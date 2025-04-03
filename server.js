import express from 'express';
import { startServer } from './models/models.js';
import cookieParser from 'cookie-parser';

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Hello World!');
});




startServer();
app.listen(3000);


