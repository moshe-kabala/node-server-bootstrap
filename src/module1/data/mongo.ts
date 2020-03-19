import { Mongo } from "@storex/db-controller/lib/db-connections/mongo";
// const config = require("./config.json");
import { serverConfiguration } from "./../../config/server";

// // Connection URL
// const config = {
//   user: "",
//   password: "",
//   testDb: "example-db-test",
//   devDb: "example-db"
// };

const host = serverConfiguration.mongoHost;
const port = serverConfiguration.mongoPort;
const user = serverConfiguration.mongoUser;
const password = serverConfiguration.mongoPassword;
const database = "database_any";
const node_env = serverConfiguration.NODE_ENV;
const url =
  "mongodb://" +
  encodeURIComponent(user) +
  ":" +
  encodeURIComponent(password) +
  `@${host}:${port}/` +
  (node_env === "test" ? `${database}_test` : database) +
  "?authSource=admin";

const mongo = new Mongo(url);

const getDb = mongo.getDb;
const getCollection = mongo.getCollection;
const close = mongo.close;
const dropDatabase = mongo.dropDatabase;

const dropCollection = mongo.dropCollection;

export { getDb, getCollection, close, dropDatabase, dropCollection };
