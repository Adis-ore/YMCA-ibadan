import express from 'express';

import { addProgram, listProgram, removeProgram } from '../controllers/programControllers.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';


const programRouter = express.Router();

programRouter.post('/add', adminAuth, upload.fields([{ name: 'image', maxCount: 1 }]), addProgram);
programRouter.delete('/delete', removeProgram);
programRouter.get('/list', listProgram);


export default programRouter;