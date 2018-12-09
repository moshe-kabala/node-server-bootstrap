import { Request, Response, NextFunction } from 'express';
import * as bl from '../../bl';
import * as m from '../../models';

import { RoutingCtrlWrapper } from "@storex/db-controller/lib/data-ctrl";
import {profileData} from '../../data';
import { profileSchema } from '../../models';


class MapPresetCtrl extends RoutingCtrlWrapper {
  constructor() {
    super({
      data: profileData,
      modelName: "preset",
      modelsName: "presets",
      modelSchema: profileSchema()
    });
  }
  
  // wrapping add function
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

export const mapPresetCtrl = new MapPresetCtrl();
