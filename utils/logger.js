require("dotenv").config();
const pino = require("pino");
module.exports = pino({
  level: process.env.LOG_LEVEL ? parseInt(process.env.LOG_LEVEL) : 30, // 10 TRACE, 20 DEBUG, 30 INFO, 40 WARN
});
