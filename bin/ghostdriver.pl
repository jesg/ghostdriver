#!/usr/bin/env perl

# Copyright (c) 2016, Jason Gowan
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without modification,
# are permitted provided that the following conditions are met:
#
# 1. Redistributions of source code must retain the above copyright notice, this
# list of conditions and the following disclaimer.
#
# 2. Redistributions in binary form must reproduce the above copyright notice,
# this list of conditions and the following disclaimer in the documentation and/or
# other materials provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
# ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
# WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
# DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
# ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
# (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
#   LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
# ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
# (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
# SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

use strict;
use warnings;
use FindBin;

my $phantomjs_path = $ENV{PHANTOMJS_BINARY_PATH} // 'phantomjs';
my $ghostdriver_path = $ENV{PHANTOMJS_GHOSTDRIVER_PATH} // "$FindBin::Bin/../src/main.js";

# transform command line arguments
my $ip;
my $port;
my $ip_port_in_next_arg = 0;
my $has_path = 0;
my @new_args = ();

for (@ARGV) {
	if ($ip_port_in_next_arg) {
		if (/((?<ip>[0-9\.]+):)?(?<port>[0-9]+)/) {
			$ip = $+{'ip'} || '127.0.0.1';
			$port = $+{'port'};
		} else {
			$port = '8910';
			$ip = '127.0.0.1';
		}
		$ip_port_in_next_arg = 0;
	}

	if (!$has_path && (/^-w/ || /^--webdriver/ || /^--wd/)) {
		push @new_args, $ghostdriver_path;
		$has_path = 1;
	}

	if (/^-w=?/ || /^--webdriver[^-]=?/ || /^--wd=?/) {
		if (/((?<ip>[0-9\.]+):)?(?<port>[0-9]+)/) {
			$ip = $+{'ip'} || '127.0.0.1';
			$port = $+{'port'};
		} else {
			$ip_port_in_next_arg = 1;
		}
		next;
	}

	if (s/--webdriver-selenium-grid-hub/--hub/) {
		push @new_args, $_;
	} elsif (s/--webdriver-loglevel/--logLevel/) {
		push @new_args, $_;
	} elsif (s/--webdriver-logfile/--logFile/) {
		push @new_args, $_;
	} else {
		push @new_args, $_;
	}
}

if ( defined $ip) {
	push @new_args, "--ip=$ip";
}

if ( defined $port) {
	push @new_args, "--port=$port";
}

exec "$phantomjs_path @new_args";
