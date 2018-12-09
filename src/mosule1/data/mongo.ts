import { Mongo } from '../../../models/mongo';


// Connection URL
const config = require('./config.json');
const url = "mongodb://" + encodeURIComponent(config.user) + ":" + encodeURIComponent(config.password) +
    "@localhost:27017/" + ((process.env.NODE_ENV === 'test') ? config.testDb : config.devDb) + "?authSource=admin";

const mongo = new Mongo(url);

const getDb = mongo.getDb;
const getCollection = mongo.getCollection;
const close = mongo.close;
const dropDatabase = mongo.dropDatabase;

const dropCollection = mongo.dropCollection;

export {
    getDb,
    getCollection,
    close,
    dropDatabase,
    dropCollection
};
