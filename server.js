require("dotenv").config();

const http = require("http");

const app = require("./startups/app");

// uncaughtExeption
// uncaughtPromiseExeption
// logger
const PORT = process.env.PORT;

const server = http.createServer(app);

server.listen(PORT, function () {
  console.log(`Your app is listening on port `, PORT);
});
