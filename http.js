const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write("hello world");
  res.end();
});
server.listen(4000);
