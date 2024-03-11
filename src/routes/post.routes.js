import { Router } from "express";
import { newPost, deletePostById } from "../controllers/post.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post('/',auth, newPost)
router.delete('/:id',auth, deletePostById)


export default router;