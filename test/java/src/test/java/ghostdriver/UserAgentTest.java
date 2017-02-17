/*
This file is part of the GhostDriver by Ivan De Marino <http://ivandemarino.me>.

Copyright (c) 2017, Jason Gowan
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice,
      this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

package ghostdriver;

import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.JavascriptExecutor;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import ghostdriver.server.HttpRequestCallback;

import static org.junit.Assert.assertEquals;

public class UserAgentTest extends BaseTestWithServer {

    private static final String USER_AGENT = "Blue Lady";

    @BeforeClass
    public static void setCustomHeaders() {
        sCaps.setCapability(
                "phantomjs.page.settings.userAgent",
                USER_AGENT
        );
    }

    // regression test for detro/ghostdriver#273
    @Test
    public void testAcceptEncodingHeader() {
        WebDriver d = getDriver();


        server.setHttpHandler("GET", new HttpRequestCallback() {
            @Override
            public void call(HttpServletRequest req, HttpServletResponse res) throws IOException {
                String header = req.getHeader("User-Agent");

                res.getOutputStream().println("<html><body>" +
                        header +
                        "</body></html>");
            }
        });

        // open two windows
        String url = server.getBaseUrl();
        d.get(url);
        ((JavascriptExecutor) d).executeScript(
                "window.open('" + url + "');");

        for(String handle : d.getWindowHandles()) {
            d.switchTo().window(handle);
            String serverHeader = d.findElement(By.tagName("body")).getText();
            System.out.println("header: " + serverHeader);
            String res = (String)((JavascriptExecutor) d).executeScript(
                    "return navigator.userAgent;");
            System.out.println("user agent: " + res);

            assertEquals(USER_AGENT, serverHeader);
            assertEquals(USER_AGENT, res);
        }
    }
}
