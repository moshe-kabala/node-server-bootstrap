import { Router } from "express";
import { profileCtrl } from "./profile.ctrl";

export const profileRouter = Router();
// standard rest api request on collections.

profileRouter.get(`/profiles`, profileCtrl.getMany);

profileRouter
  .route(`/profile/:id*?`)
  .get(profileCtrl.get)
  .post(profileCtrl.add)
  .put(profileCtrl.update)
  .delete(profileCtrl.remove);
