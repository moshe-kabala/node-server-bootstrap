import { getCollection } from "./mongo";
import { MongoCollectionWrapper } from "@storex/db-controller/lib/wrappers";

class ProfileData extends MongoCollectionWrapper {
  constructor() {
    super({ getCollection: () => getCollection("profiles") });
  }
  // Example for wrapping a function
  async getMany(ids?) {
    //return super.getMany(ids, { name: 1 });
    const result = await super.getMany();
    return result;
  }
}

export const profileData = new ProfileData();