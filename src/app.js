const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require('./dbs/init.mongodb');
const { checkOverLoad } = require('./helpers/check.connect');
checkOverLoad();

// init route
app.get("/", (req, res, next) => {
    const strCompress = "Hello Gia Hau";
    return res.status(200).json({
        message: "Wellcome Gia Hau",
        metadata: strCompress.repeat(10000)
    });
});

// handing error

module.exports = app;