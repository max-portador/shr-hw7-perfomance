const {GUID, MAIN_PAGE, METRICS} = require("../src/constants/constants");
const axios = require("axios");

const {
    prepareData,
    showSession,
    calcMetricByDate,
    showMetricByPeriod,
    compareMetric,
} = require("./utils");


const example_metric = METRICS.cats
const example_date = "2021-10-29"
const example_period = ["2021-10-28", "2021-11-11"]
const example_requestId = "067178463181"

//получение метрики
module.exports = async (req, res) => {
    try {
        const axiosData = await axios.get(
            `https://shri.yandex/hw/stat/data?counterId=${GUID}`
        );

        let data = prepareData(axiosData.data);

        showSession(data, MAIN_PAGE, example_requestId);
        calcMetricByDate(data, MAIN_PAGE, example_metric, example_date);
        showMetricByPeriod(data, MAIN_PAGE, example_metric, ...example_period);
        compareMetric(data, MAIN_PAGE, example_metric, "browser");
        compareMetric(data, MAIN_PAGE, example_metric, "platform");
        compareMetric(data, MAIN_PAGE, example_metric, "os");
        compareMetric(data, MAIN_PAGE, example_metric, "connectionType");
        compareMetric(data, MAIN_PAGE, example_metric, "deviceMemory");

        res.end("Metrics in terminal");

    } catch (e) {
        res.status(500).end(e.message);
    }
};