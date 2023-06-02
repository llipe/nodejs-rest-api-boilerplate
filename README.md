# nodejs-rest-api-boilerplate
Base structure to build REST APIs using node + express + sequelize as an ORM.

*Included features or packages*
* Express server
* ORM with Sequelize for Postgres databases. Can ba easily changed to other store removing the pg and pg-hstore packages and installing the proper ones. [More info here](https://sequelize.org/docs/v6/getting-started/)
* Dotenv for environment variables
* Pino & pino-pretty for log management. LOG_LEVEL defaults to 30 ("info"), but it can be set in the .env file.

## Folder structure ##

* root
* * config
* * controllers
* * models
* * routes
* * utils