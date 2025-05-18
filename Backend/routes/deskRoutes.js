import express from 'express'
import { addDesk,listDesk,deleteDesk } from '../controllers/deskController.js'
import upload from '../middleware/multer.js'

const deskRoute = express.Router()

deskRoute.post('/add',upload.fields([{name:'image',maxCount:1}]),addDesk)
deskRoute.delete('/delete',deleteDesk)
deskRoute.get('/list',listDesk)


export default  deskRoute