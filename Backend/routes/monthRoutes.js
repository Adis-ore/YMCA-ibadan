import express from 'express'
import { addMonth,listMonth,deleteMonth } from '../controllers/monthController.js'
import upload from '../middleware/multer.js'


const monthRoutes = express.Router()


monthRoutes.post('/add',upload.fields([{name:'image', maxCount:1}]),addMonth)
monthRoutes.get('/list',listMonth)
monthRoutes.delete('/delete',deleteMonth)


export default monthRoutes