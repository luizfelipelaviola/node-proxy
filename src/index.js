var http = require('http'),
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  console.log(req.headers.host);
  proxy.web(req, res, { target: 'http://127.0.0.1:9000' });
}).listen(8000);
 
//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);