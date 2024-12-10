import {Router} from 'express';
import {addNewPlayer, getPlayer, updatePlayer} from "../controller/gameController.js";

const playerRouter = Router();

playerRouter.route('/').get(getPlayer);
playerRouter.route('/new').post(addNewPlayer);
playerRouter.route('/:id').put(updatePlayer);
//playerRouter.route('/:id').delete(deletePlayer);

export default playerRouter;
