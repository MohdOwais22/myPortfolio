import express from 'express'
import cookieParser from 'cookie-parser';

export const app = express();

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded(express.urlencoded({exteded:true, limit:"50mb"})))
app.use(cookieParser());
import { userRouter } from './routes/User.js'


app.use('/api/v1',userRouter);