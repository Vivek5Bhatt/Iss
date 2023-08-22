"use strict";
const app = require("./app");
const serverless = require("serverless-http");

let functionName
if (process.env.ENVIRONMENT === 'dev')
    functionName = 'hello'
else if (process.env.ENVIRONMENT === 'stage')
    functionName = 'stage'
else if (process.env.ENVIRONMENT === 'sandbox')
    functionName = 'sandbox'
else if (process.env.ENVIRONMENT === 'prod')
    functionName = 'prod'

module.exports[functionName] = serverless(app);
