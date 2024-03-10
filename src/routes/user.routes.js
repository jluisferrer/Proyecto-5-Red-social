import { Router } from "express";
import { getUsers, getUserProfile, updateUserProfile, deleteUserById } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";

const router = Router();

router.get('/', auth, isSuperAdmin, getUsers)
router.get('/profile', auth, getUserProfile)
router.put('/profile', auth, updateUserProfile)
router.delete('/:id', auth, isSuperAdmin, deleteUserById)


export default router;