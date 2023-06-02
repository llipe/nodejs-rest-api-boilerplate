module.exports = (app) => {
    let utils = require("../controllers/utils.controller");
    let router = require("express").Router();
  
    // Check heartbeat
    router.get("/heartbeat", utils.heartbeat);
    
    app.use("/utils", router);
  };
  