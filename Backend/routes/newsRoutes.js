import express from 'express'

import { addNews,listNews,deleteNews } from '../controllers/newsController.js'


const newsRoutes = express.Router()


newsRoutes.post('/add',addNews)
newsRoutes.get('/list',listNews)
newsRoutes.delete('/delete',deleteNews)


export default newsRoutes