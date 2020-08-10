const express = require("express");
const IpController = require("./controllers/IpController");

const routes = new express.Router();

routes.get("/", IpController.index);

module.exports = routes;
