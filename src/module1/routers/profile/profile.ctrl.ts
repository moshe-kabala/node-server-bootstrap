import { Request, Response, NextFunction } from 'express';
import { CtrlWrapper } from "@storex/db-controller/lib/wrappers";
import { profileBL } from '../../bl';


class ProfileCtrl extends CtrlWrapper {
  constructor() {
    super({
      data: profileBL,
      modelName: "preset",
      modelsName: "presets",
      modelSchema: profileBL.modelSchema
    });
  }
  
  // Example for wrapping the add function
  async add(req, res) {
    const status = await super.add(req, res);
    const logAction = {
      action: "create-layout",
      request: req,
      actionDetails: { layout: { name: req.body.name } }
    };
    if (status.success) {
      // do something on success
      // logger.processEnded(logAction);
    } else {
      // do something on failed
      // logger.processEnded(logAction);
    }
    return status;
  }
}

export const profileCtrl = new ProfileCtrl();
