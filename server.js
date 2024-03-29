var http = require("http");
var fs = require("fs");

//----create a server
var port = 7802;

var server = http.createServer(handleRequest);

//----handleRequest function-----
function handleRequest(request, response) {
  var path = request.url;

  switch (path) {
    case "/food":
      return fs.readFile(__dirname + "/food.html", function(err, data) {
        if (err) throw err;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      });
    case "/movie":
      return fs.readFile(__dirname + "/movies.html", function(err, data) {
        if (err) throw err;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      });

    // default to rendering index.html, if none of above cases are hit
    default:
      return fs.readFile(__dirname, "index.html", function(err, data) {
        if (err) throw err;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      });
  }
}

server.listen(port, function() {
  console.log("server is listening on port: " + port);
});
