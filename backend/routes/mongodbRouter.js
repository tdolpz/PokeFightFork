import {Router} from 'express';
import {addNewPlayer, getPlayer} from "../controller/gameController.js";

const mongodbRouter = Router();
mongodbRouter.route('/').get(getPlayer);
mongodbRouter.route('/new').post(addNewPlayer);

export default mongodbRouter;
