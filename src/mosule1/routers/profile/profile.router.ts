import { Router } from 'express';
import ctrl from './profile.ctrl';

const profileRouter = Router();
profileRouter.get('/profile/active', ctrl.getActive);
profileRouter.get('/profiles/active', ctrl.getActives);


profileRouter.route('/profile/:id*?')
    //  .get()
    .post(ctrl.create)
    .put(ctrl.edit)
    .delete(ctrl.remove);



profileRouter.route('/profiles')
    .get(ctrl.getAll);

export { profileRouter };
