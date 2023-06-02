require("dotenv").config();
let logger = require("./utils/logger");
let express = require("express");

let app = express();

// Disabling CORS, using api-gateway config on AWS
// var corsOptions = {
//   origin: "http://localhost:8081",
// };
// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let out = {
    statusCode: 200,
    message: "¡Boilerplate Hello!",
  };
  res.status(out.statusCode).json(out);
});
require("./routes/utils.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info(
    `Server is running on port ${PORT} on ${process.env.NODE_ENV} mode.`
  );
});
