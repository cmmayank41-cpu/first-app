// Load Node.js's built-in HTTP module (no installation needed)
const http = require("http");

// The port our server will listen on
const PORT = 3000;

// Create the server. This function runs every time someone visits it.
// "req" = the incoming request, "res" = the response we send back.
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // 200 = OK, plain text
  res.end("Hello from my first application");           // send body and finish
});

// Start listening for visitors
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
