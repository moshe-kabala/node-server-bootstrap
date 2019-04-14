import { BLWrapper } from "@storex/db-controller/lib/wrappers";
import * as uid from "uuid";
import { profileSchema } from "../models";
import { profileData } from "../data";
import { stat } from "fs";

class ProfileBL extends BLWrapper {
    
    constructor() {
        super({
            data: profileData,
            modelName: "presetReport",
            modelsName: "presetReports",
            modelSchema: profileSchema(),
            mapFrom: presetReport => {
                return presetReport;
            }
        });
    }

    // Example of overriding a method
    // It is recommanded to add an ID for the GET method to work well
    async add(item) {
        const uidS: string = uid();
        item._id = uidS;
        const status = await super.add(item);
        return status;
    }
}

export const profileBL = new ProfileBL();