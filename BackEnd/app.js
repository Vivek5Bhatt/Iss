require('dotenv').config()
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const swaggerUi = require('swagger-ui-express')
const app = express();
const routes = require("./routes");
const swaggerFile = require('./swagger_output.json')
const error = require("./middleware/error");

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json({ limit: "10mb" }));

app.use(express.static(path.join(__dirname, "/public")));

app.use(cors());

app.use(
  fileUpload({
    limits: { fileSize: 2 * 1024 * 1024 },
    tempFileDir: "/tmp/",
    useTempFiles: true,
  })
);

app.use("/api/v1", routes);

//swagger implementation
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
