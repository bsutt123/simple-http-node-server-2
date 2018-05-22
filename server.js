const http = require("http");
const fs = require("fs");
const port = 8000;

function requestHandler(req, res) {
  fs.writeFile("hello-world.txt","Hello to this great world", (err) => {
    console.log(err);
  })
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  }

  console.log(`server is listening on port ${port}`);
})
