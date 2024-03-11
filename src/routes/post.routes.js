import { Router } from "express";
import { newPost } from "../controllers/post.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post('/',auth, newPost)


export default router;