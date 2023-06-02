let db = require("../models");
const logger = require("../utils/logger");

exports.heartbeat = (req, res) => {
  db.sequelize
    .query("SELECT NOW()")
    .then((data) => {
      let out = {
        statusCode: 200,
        message: "Server OK",
        data: {
          databaseTime: `OK, server time ${data[0][0].now}`,
        },
      };
      logger.info(out);
      res.send(out);
    })
    .catch((err) => {
      let out = {
        statusCode: 500,
        message: err.message || "Some error occurred. Heartbeat error."
      }
      logger.fatal(out.message);
      res.status(out.status).send(out);
    });
};
