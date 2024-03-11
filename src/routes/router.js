import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import  postRoutes  from "./post.routes.js";

const router = Router();

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/posts', postRoutes)


export default router;