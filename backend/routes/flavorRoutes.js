import express from 'express';
import { getFlavors } from '../controllers/flavorController.js';

const router = express.Router();
router.get('/', getFlavors);

export default router;