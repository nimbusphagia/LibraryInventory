import { Router } from "express";
import { indexGet, indexPost } from "../controllers/index.js";

const indexRouter = new Router();

indexRouter.get('/', indexGet);
indexRouter.post('/', indexPost);

export { indexRouter };
