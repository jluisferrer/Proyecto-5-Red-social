import { Router } from "express";
import { newPost, deletePostById, updatePostById, getOwnPost, getAllPosts, getPostsById, getPostsByUserId, likePost, UpdatePost } from "../controllers/post.controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";


const router = Router();

router.post('/',auth, newPost)              //Ok
router.delete('/:id',auth, deletePostById)  //Ok
router.put('/:id',auth, isSuperAdmin, updatePostById)     //Ok
router.put('/update/:id',auth, UpdatePost)
router.get('/own',auth, getOwnPost)         //Ok
router.get('/',auth, getAllPosts)           //Ok Probar con diferentes users 
router.get('/:id',auth, getPostsById)       //Ok
router.put('/like/:id', auth, likePost)

export default router;