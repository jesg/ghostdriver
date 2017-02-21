this is my ghostdriver fork.  have fun!

# Changelog

## 1.3.0-beta.9

* add unhandledPromptBehavior w3c capability

## 1.3.0-beta.8

* fix bug in blacklist/whitelist capabilities

## 1.3.0-beta.7

* add blacklist/whitelist capabilities

## 1.3.0-beta.6

* fix content security policy issue
* remove unused touch atoms

## 1.3.0-beta.5

* fix sending keys to content editable elements
* file upload compatible with phantomjs 2.5-beta
* fix action chains with elements in iframes
* add is_file_element atom
* add is_content_editable atom
* remove unused session storage atoms
* remove unused local storage atoms

## 1.3.0-beta.4

* add command line option `--remoteHost` (@madhavajay)

## 1.3.0-beta.3

* add default values to add_cookie

## 1.3.0-beta.2

* stable npm package
* fix custom headers
* fix default timeouts
* fix multiple file upload

---

# Ghost Driver

Ghost Driver is a pure JavaScript implementation of the
[WebDriver Wire Protocol](http://code.google.com/p/selenium/wiki/JsonWireProtocol)
for [PhantomJS](http://phantomjs.org/).
It's a Remote WebDriver that uses PhantomJS as back-end.

## Setup

* Download latest stable PhantomJS from [here](http://phantomjs.org/download.html)
* Selenium version `>= 3.0.0`
* ghostdriver requires phantomjs >= 2.1.1

the current version of ghostdriver in phantomjs is 2 years old.  the following will setup the current version.

### Install from npm

to install **with** the `phantomjs-prebuilt` package.
```
npm install --global ghostdriver
```

to install **without** the `phantomjs-prebuilt` package.
```
npm install --global --no-optional ghostdriver
```

### Install from Source

1. checkout ghostdriver

	```sh
	$ git clone https://github.com/jesg/ghostdriver ~/.ghostdriver
	```
2. add `bin/ghostdriver.pl` to your `$PATH`
	```sh
	echo 'export PATH="$HOME/.ghostdriver/bin:$PATH";' >> ~/.bash_profile
	```
    **Ubuntu Desktop note**: Modify your `~/.bashrc` instead of `~/.bash_profile`.

    **Zsh note**: Modify your `~/.zshrc` file instead of `~/.bash_profile`.
3. run ghostdriver `ghostdriver.pl --webdriver=8910`

the ghostdriver bash script is a drop in replacement for phantomjs.

## Register GhostDriver with a Selenium Grid hub

1. Launch the grid server, which listens on 4444 by default: `java -jar /path/to/selenium-server-standalone-<SELENIUM VERSION>.jar -role hub`
2. Register with the hub: `phantomjs --webdriver=8080 --webdriver-selenium-grid-hub=http://127.0.0.1:4444`
3. Now you can use your normal webdriver client with `http://127.0.0.1:4444` and just request `browserName: phantomjs`


### Run validation tests

Here I show how to clone this repo and kick start the (Java) tests. You need
[Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
to run them (I tested it with Java 7, but should work with Java 6 too).

1. `git clone https://github.com/detro/ghostdriver.git`
2. Configure `phantomjs_exec_path` inside `ghostdriver/test/config.ini` to point at the build of PhantomJS you just did
3. `cd ghostdriver/test/java; ./gradlew test`

#### Alternative: Run GhostDriver yourself and launch tests against that instance

1. `phantomjs --webdriver=PORT`
2. Configure `driver` inside `ghostdriver/test/config.ini` to point at the URL `http://localhost:PORT`
3. `cd ghostdriver/test/java; ./gradlew test`

### WebDriver Atoms

Being GhostDriver a WebDriver implementation, it embeds the standard/default WebDriver Atoms to operate inside open
webpages. In the specific, the Atoms cover scenarios where the "native" PhantomJS `require('webpage')` don't stretch.

Documentation about how those work can be found [here](http://code.google.com/p/selenium/wiki/AutomationAtoms)
and [here](http://www.aosabook.org/en/selenium.html).

How are those Atoms making their way into GhostDriver? If you look inside the `/tools` directory you can find a bash
script: `/tools/import_atoms.sh`. That script accepts the path to a Selenium local repo, runs the
[CrazyFunBuild](http://code.google.com/p/selenium/wiki/CrazyFunBuild) to produce the compressed/minified Atoms,
grabs those and copies them over to the `/src/third_party/webdriver-atoms` directory.

The Atoms original source lives inside the Selenium repo in the subtree of `/javascript`. To understand how the build
works, you need to spend a bit of time reading about
[CrazyFunBuild](http://code.google.com/p/selenium/wiki/CrazyFunBuild): worth your time if you want to contribute to
GhostDriver (or any WebDriver, as a matter of fact).

One thing it's important to mention, is that CrazyFunBuild relies on the content of `build.desc` file to understand
what and how to build it. Those files define what exactly is built and what it depends on. In the case of the Atoms,
the word "build" means "run Google Closure Compiler over a set of files and compress functions into Atoms".
The definition of the Atoms that GhostDriver uses lives at `/tools/atoms_build_dir/build.desc`.

Let's take this small portion of our `build.desc`:
```
js_deps(name = "deps",
  srcs = "*.js",
  deps = ["//javascript/atoms:deps",
          "//javascript/webdriver/atoms:deps"])

js_fragment(name = "get_element_from_cache",
  module = "bot.inject.cache",
  function = "bot.inject.cache.getElement",
  deps = [ "//javascript/atoms:deps" ])

js_deps(name = "build_atoms",
  deps = [
    ...
    "//javascript/webdriver/atoms:execute_script",
    ...
  ]
```
The first part (`js_deps(name = "deps"...`) declares what are the dependency of this `build.desc`: with that CrazyFunBuild knows
what to build before fulfilling our build.

The second part (`js_fragment(...`) defines an Atom: the `get_element_from_cache` is going to be the name of
an Atom to build; it can be found in the module `bot.inject.cache` and is realised by the function named
`bot.inject.cache.getElement`.

The third part (`js_deps(name = "build_atoms"...`) is a list of the Atoms (either defined by something like the second
part or in one of the files we declared as dependency) that we want to build.

If you reached this stage in understanding the Atoms, you are ready to go further by yourself.

### Contributions and/or Bug Report

You can contribute by testing GhostDriver, reporting bugs and issues, or submitting Pull Requests.
Any **help is welcome**, but bear in mind the following base principles:

* Issue reporting requires a reproducible example, otherwise will most probably be **closed without warning**
* Squash your commits by theme: I prefer a clean, readable log
* Maintain consistency with the code-style you are surrounded by
* If you are going to make a big, substantial change, let's discuss it first
* I **HATE** CoffeeScript: assume I'm going to laugh off any "contribution" that contains such _aberrational crap_!
* Open Source is NOT a democracy (and I mean it!)

## License
GhostDriver is distributed under [BSD License](http://www.opensource.org/licenses/BSD-2-Clause).

## Release names
See [here](http://en.wikipedia.org/wiki/List_of_ghosts).
