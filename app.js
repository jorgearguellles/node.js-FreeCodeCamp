const http = require("http");

const server = http.createServer((req, res) => {
  console.log("===> req()");
  console.log(req.url);
  console.log(req.method);
  res.end("Hello World!");
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
});
