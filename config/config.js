require('dotenv').config();
let logger = require('../utils/logger');

module.exports = {
  "development": {
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    dialect: "postgres",
    logging: (msg) => { logger.info(msg) }
  },
  "test": {
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASS,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOST,
    port: process.env.TEST_DB_PORT,
    dialect: "postgres",
    logging: (msg) => { logger.info(msg) }
  },
  "production": {
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASS,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOST,
    port: process.env.PROD_DB_PORT,
    dialect: "postgres",
    logging: (msg) => { logger.info(msg) }
  }
}