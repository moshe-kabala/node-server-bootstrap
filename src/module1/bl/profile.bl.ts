import { BLWrapper } from "@storex/db-controller/lib/wrappers";
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
    async add(item) {
        const status = await super.add(item);
        return status;
    }
}

export const profileBL = new ProfileBL();