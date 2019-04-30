import { profileSchema } from "../models";
import {
  BLWrapper,
  ModelOptionsData
} from "@storex/db-controller/lib/wrappers";
import * as uid from "uuid";
import { profileData } from "../data";

class ProfileBL extends BLWrapper implements ModelOptionsData {
  constructor() {
    super({
      data: profileData,
      modelName: "profiles",
      modelsName: "profile",
      modelSchema: profileSchema(),
      mapFrom: d => {
        // manupulation of returned data (server -> client)
        return d;
      },
      mapTo: d => {
        // manupulation of returned data (server -> client)
        return d;
      }

    });
  }

  async add(item) {
    this.consoleModule("add: " + item);
      // in case other module need to know the id of the added to
    const uidS: string = uid();
    item._id = uidS;
    const status = await super.add(item);
    return status;
  }

  async remove(req) {
    this.consoleModule("remove: " + req);
    const status = await super.remove(req);
    return status;
  }

  async addMany(items) {
    this.consoleModule("addMany: " + items);
    const status = await super.addMany(items);
    return status;
  }

  async getManyByFilter(filter) {
    this.consoleModule("getManyByFilter: " + filter);
    const status = await super.getManyByFilter(filter);
    return status;
  }

  async update(item) {
    this.consoleModule("update: " + item);
    const status = await super.update(item);
    return status;
  }

  consoleModule(strToShow: string) {
    console.log("[ ProfileBL ] " + strToShow);
  }
}

export const profileBL = new ProfileBL();
