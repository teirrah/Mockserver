const jsonServer = require("json-server");
const server = jsonServer.create();
const res = require('./fileReader.js');
const router = jsonServer.router(res);
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(middlewares);
server.use(router);
server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
server.options("*", cors());
server.listen(3001, () => {
  console.log("JSON Server is running");
});