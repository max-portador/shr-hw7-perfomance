const express = require("express");
const {apiStatistic } = require("./routes");
const port = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", apiStatistic)


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});