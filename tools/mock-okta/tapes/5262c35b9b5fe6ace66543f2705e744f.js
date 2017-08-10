var path = require("path");

/**
 * GET /oauth2/v1/authorize?client_id=0oaom8GeLzZeX7oYZ0g3&redirect_uri=http://localhost:3000/authorization-code/callback&response_type=code&response_mode=query&state=STATE&nonce=NONCE&scope=openid email
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,* / *;q=0.8
 * accept-encoding: gzip
 * accept-language: en-US
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 302;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqn7CnU2HRTaCiWSNuDxxS2A");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=4803575FC985D74993BDB42BD8194D15; Path=/","t=default; Path=/","DT=DI00gCQTZFlRa2lC9c1_CUR5A; Expires=Sat, 10-Aug-2019 22:13:22 GMT; Path=/","sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=4803575FC985D74993BDB42BD8194D15; Path=/"]);
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9999");
  res.setHeader("x-rate-limit-reset", "1502403262");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("location", "http://rain.okta1.com:1802/login/login.htm;jsessionid=4803575FC985D74993BDB42BD8194D15?fromURI=%2Foauth2%2Fv1%2Fauthorize%2Fredirect%3Fokta_key%3D6yTWQmzYYxolhCEbdQfEVwnaCw6rANreWBl02jEqAo4");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Thu, 10 Aug 2017 22:13:22 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
