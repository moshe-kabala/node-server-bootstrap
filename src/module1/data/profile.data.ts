import { getCollection } from "./mongo";
import { MongoCollectionWrapper } from "@storex/db-controller/lib/wrappers";

class ProfileData extends MongoCollectionWrapper {
  constructor() {
    super({ getCollection: () => getCollection("profiles") });
  }
  // wrap function if you need
  async getMany(ids?) {
    return super.getMany(ids, { name: 1 });
  }
}

export const profileData = new ProfileData();