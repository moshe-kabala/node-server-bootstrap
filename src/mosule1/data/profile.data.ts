import { getCollection } from "./mongo";
import { MongoCollectionWrapper } from "@storex/db-controller/lib/data-access";

class MapPresetData extends MongoCollectionWrapper {
  constructor() {
    super({ getCollection: () => getCollection("profiles") });
  }
  // wrap function if you need
  async getMany(ids?) {
    return super.getMany(ids, { name: 1 });
  }
}

export const mapPresetData = new MapPresetData();