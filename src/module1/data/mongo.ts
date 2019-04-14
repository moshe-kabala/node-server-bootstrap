import { Mongo } from "@storex/db-controller/lib/db-connections/mongo";
const config = require('./config.json');

// // Connection URL
// const config = {
//   user: "",
//   password: "",
//   testDb: "example-db-test",
//   devDb: "example-db"
// };
const url =
  "mongodb://" +
  encodeURIComponent(config.user) +
  ":" +
  encodeURIComponent(config.password) +
  "@localhost:27017/" +
  (process.env.NODE_ENV === "test" ? config.testDb : config.devDb) +
  "?authSource=admin";

const mongo = new Mongo(url);

const getDb = mongo.getDb;
const getCollection = mongo.getCollection;
const close = mongo.close;
const dropDatabase = mongo.dropDatabase;

const dropCollection = mongo.dropCollection;

export { getDb, getCollection, close, dropDatabase, dropCollection };
