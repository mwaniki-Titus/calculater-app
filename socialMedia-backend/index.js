import express from 'express';
import  bodyParser from 'body-parser';
import dotenv from 'dotenv';
import logger from './src/utils/logger.js';
import userRouter from './src/routes/user.router.js';
import groupRouter from './src/routes/group.router.js';
import eventRouter from './src/routes/event.router.js';
import postRouter from './src/routes/post.router.js';


dotenv.config();
const app =express();

const PORT = process.env.PORT || 3000;
 
//middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//routes
app.use('/api',userRouter);
app.use('/api',groupRouter);
app.use('/api',eventRouter);
app.use('/api',postRouter);

app.get('/health', (req, res) => {
    res.status(200).send('I am very healthy💪');

});
app.listen(PORT, () => {
    logger.info(`server is running on PORT ${PORT}`)

}); 

