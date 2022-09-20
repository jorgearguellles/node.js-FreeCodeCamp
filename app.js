const http = require("http");

const server = http.createServer((res, req) => {
  res.end("Hello World");
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log("Server listen on Port:" + PORT);
});
