import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloundinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoutes.js'
import projectRouter from './routes/projectRoutes.js'
import teamRouter from './routes/teamRoutes.js'
import newsRoutes from './routes/newsRoutes.js'
import monthRoutes from './routes/monthRoutes.js'
import deskRoute from './routes/deskRoutes.js'
import mediaRoutes from './routes/mediaRoutes.js'
import programRouter from './routes/programRoutes.js';


// App config
const app = express ()
const port = process.env.PORT || 5000 
connectDB()
connectCloundinary()


// middlewares
app.use(express.json())
// app.use(cors())
const allowedOrigins = [
  "https://ymcaibadanadmin.vercel.app",
  "https://ymcaibadan.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        // Allow requests with no origin like Postman or curl
        return callback(null, true);
      }
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      // For debugging: log blocked origins
      console.log("Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);


// Api endpoint 
app.use('/api/admin',adminRouter)
app.use('/api/project',projectRouter)
app.use('/api/team',teamRouter)
app.use('/api/news',newsRoutes)
app.use('/api/month',monthRoutes)
app.use('/api/desk',deskRoute)
app.use('/api/media',mediaRoutes)
// app.use('/api/program',programRouter)
app.use('/api/program', programRouter);

app.get('/',(req,res)=>{
    res.send('Api working')
})



app.listen(port, () => console.log("server is runninng on port:" + port )
);

