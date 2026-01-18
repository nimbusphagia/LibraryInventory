import { Router } from "express";
import { authorsGet, authorsPost } from "../controllers/authors.js";

const authorsRouter = new Router();
authorsRouter.get('/authors', authorsGet);
authorsRouter.post('/authors', authorsPost);

export { authorsRouter };
