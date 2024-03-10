import { Router } from "express";
import { login, register  } from "../controllers/auth.controller.js";


const router = Router();

router.post('/register', register)  //Ok
router.post('/login', login)        //Ok

export default router;