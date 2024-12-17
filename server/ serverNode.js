const http = require("http");
const fs = require("fs");

const category = fs.readFileSync("./dev-data/category.json", "utf-8");

const gallery = fs.readFileSync("./dev-data/gallery.json", "utf-8");
const gift = fs.readFileSync("./dev-data/gift.json", "utf-8");
const gold = fs.readFileSync("./dev-data/gold.json", "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/category") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(category);
  } else if (pathName === "/gallery") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(gallery);
  } else if (pathName === "/gift") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(gift);
  } else if (pathName === "/gold") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(gold);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
  }
});

server.listen(7000, () => {
  console.log("Connected");
});
