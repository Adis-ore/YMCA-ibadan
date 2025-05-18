import express from 'express'
import { addMedia,listMedia,deleteMedia } from '../controllers/mediaController.js'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'


const mediaRoutes = express.Router()

mediaRoutes.post('/add',adminAuth,upload.fields([{name:'image',maxCount:1}]),addMedia)
mediaRoutes.get('/list',listMedia)
mediaRoutes.delete('/delete',deleteMedia)


export default  mediaRoutes