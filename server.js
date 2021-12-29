const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello From Node</h1></body>");
  res.write("</html>");
  //   res.json("Hello World");
  res.end();
});

server.listen(PORT, () => {
  console.log("Hello World");
});
