import express from 'express'
import  {addProject,listProject,removeProject} from '../controllers/projectControllers.js'
// import multer from 'multer';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const projectRouter = express.Router();

projectRouter.post('/add',adminAuth,upload.fields([{name:'image', maxCount:1}]),addProject)
projectRouter.delete('/delete',removeProject)
projectRouter.get('/list',listProject)


export default projectRouter