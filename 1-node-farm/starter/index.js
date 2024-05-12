const fs = require("fs");
const http = require("http");
// const fileRead = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(fileRead);

// const fileWrite = `this is what we know about avocado ${fileRead}.\nCreated on ${new Date().toDateString()}`;

// fs.writeFileSync("./txt/input.txt", fileWrite);
// console.log("successful write");

// const fileIn = fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("reading file .........");

const server = http.createServer((request, response) => {
  const path = request.url;
  console.log(request.url);
  if (path === "/" || path === "/overview") {
    response.end("this is overview");
  } else if (path === "/api") {
    const api = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
    response.writeHead(200, {
      "Content-type": "application/json",
    });
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const res = JSON.parse(data);
      console.log(res);
      response.end(data);
    });
  } else if (path === "/product") {
    response.end("this is product");
  } else {
    response.writeHead(404, {
      "Content-type": "text/html",
    });
    response.end("<h1>page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listing to request on port 8000");
});
