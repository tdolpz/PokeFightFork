import {Router} from 'express';
import {addNewPlayer, getPlayer, updatePlayer} from "../controller/gameController.js";

const mongodbRouter = Router();

mongodbRouter.route('/').get(getPlayer);
mongodbRouter.route('/new').post(addNewPlayer);
mongodbRouter.route('/:id').put(updatePlayer);
//mongodbRouter.route('/:id').delete(deletePlayer);

export default mongodbRouter;
