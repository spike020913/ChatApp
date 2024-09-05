import express from 'express';
import { sendMessage, getMessage} from '../controllers/messageController.js';
import protectedRoutes from '../middlewares/protectedRoutes.js';

const router = express.Router();
// run sendMessage function only if the user is authenticated.
router.post("/send/:id", protectedRoutes, sendMessage);
router.get("/:id", protectedRoutes, getMessage);
export default router;