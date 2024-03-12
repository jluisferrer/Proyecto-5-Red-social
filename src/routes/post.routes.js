import { Router } from "express";
import { newPost, deletePostById, updatePostById, getOwnPost, getAllPosts, getPostsById, getPostsByUserId } from "../controllers/post.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post('/',auth, newPost)              //Ok
router.delete('/:id',auth, deletePostById)  //Ok
router.put('/:id',auth, updatePostById)     //Ok
router.get('/own',auth, getOwnPost)         //Ok
router.get('/',auth, getAllPosts)           //Ok Probar con diferentes users 
router.get('/:id',auth, getPostsById)       //Ok
router.get('/:id',auth, getPostsByUserId)

export default router;