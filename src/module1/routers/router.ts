import { Router } from 'express';
import * as bodyParser from 'body-parser';
import { profileRouter } from './profile/profile.router';



export const module1Router = Router();

module1Router.use(bodyParser.json());
module1Router.use(bodyParser.urlencoded({
    extended: true
}));

module1Router.use( profileRouter );



