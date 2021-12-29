const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.json("Hello World");
});

server.listen(PORT, () => {
  console.log("Hello World");
});
