import { Router } from "express";
import { getUsers, getUserProfile, updateUserProfile, deleteUserById } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";

const router = Router();

router.get('/', auth, isSuperAdmin, getUsers)     //Ok
router.get('/profile', auth, getUserProfile)      //Ok  
router.put('/profile', auth, updateUserProfile)   //Ok
router.delete('/:id', auth, isSuperAdmin, deleteUserById) //Ok


export default router;