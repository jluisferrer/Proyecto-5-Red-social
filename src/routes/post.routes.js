import { Router } from "express";
import { newPost, deletePostById, updatePostById } from "../controllers/post.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post('/',auth, newPost)
router.delete('/:id',auth, deletePostById)
router.put('/:id',auth, updatePostById)


export default router;