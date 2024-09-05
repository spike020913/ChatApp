import express from 'express';
import protectedRoutes from '../middlewares/protectedRoutes.js';
import  { getUserForSidebar } from '../controllers/userController.js';
const router = express.Router();

router.get("/", protectedRoutes, getUserForSidebar);

export default router;