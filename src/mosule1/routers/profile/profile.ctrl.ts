import { Request, Response, NextFunction } from 'express';
import * as bl from '../../bl';
import * as m from '../../models';

export default {

    async create(req: Request, res: Response) {
        const profile = createProfileFromBody(req.body);
        if (!profile) {
            return res.status(404).send({ msg: 'body is not define correctly' });
        }
        await bl.ProfileBL.createState(profile);
        res.send({ msg: 'ok' });
    },

    async getActive(req: Request, res: Response) {
        const profile = await bl.ProfilesInvokerBL.getCurrentProfile();
        res.send(profile);
    },

    async getActives(req: Request, res: Response) {
        const profiles = await bl.ProfilesInvokerBL.getCurrentProfiles();
        res.send(profiles);
    },

    async edit(req: Request, res: Response) {
        const profile = createProfileFromBody(req.body);
        if (!profile) {
            return res.status(404).send({ msg: 'body is not define correctly' });
        }
        await bl.ProfileBL.editState(profile);
        res.send({ msg: 'ok' });
    },

    async getAll(req: Request, res: Response) {
        const profiles = await bl.ProfileBL.getAll();
        res.send(profiles);
    },

    async remove(req: Request, res: Response) {
        const id: string = req.params.id;
        if (!id) {
            res.status(404).send({ msg: 'Id is required' });
        }
        await bl.ProfileBL.remove(id);
        res.send({msg: 'the profile deleted successfully'});
    },

    async deleteAll(req: Request, res: Response) {
        const ids: string[] = req.body.id;
        if (!ids || !(ids instanceof Array)) {
            res.status(404).send({ msg: 'body.ids is required' });
        }
        await bl.ProfileBL.deleteAll(ids);
    }
};


