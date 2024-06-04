import { Router } from 'express';
import { getData, addData } from "../controller/gameController.js";

const mongodbRouter = Router();

mongodbRouter.route('/').get(getData);
mongodbRouter.route('/save').post(addData);

export default mongodbRouter;
