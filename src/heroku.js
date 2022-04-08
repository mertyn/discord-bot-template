const http = require("http");

// simple listener
function listener(req, res) {
    res.writeHead(200);
    res.end("This app does not have a webpage.");
    console.log("got webpage request");
}

// create server
const server = http.createServer(listener);
// start server, get port from environment variable if available
server.listen(process.env.PORT || 8080);