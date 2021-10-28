const { Router } = require("express");

const statistic = require("./statistic/stats");

const apiStatistic = new Router();

apiStatistic.get("/", statistic);

exports.apiStatistic = apiStatistic;