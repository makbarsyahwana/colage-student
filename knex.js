require("dotenv").config()

const pg = require("pg")

pg.defaults.ssl = true

module.export = {
  client: pg,
  connection: process.env.DATABASE_URL
}
