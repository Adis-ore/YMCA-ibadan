import express from 'express'


import { addTeam,listTeam,removeTeam } from '../controllers/teamControllers.js'

import upload from '../middleware/multer.js'


const teamRouter = express.Router();


teamRouter.post('/add',upload.fields([{name:'image',maxCount:1}]),addTeam)
teamRouter.delete('/delete',removeTeam)
teamRouter.get('/list',listTeam)



export default teamRouter