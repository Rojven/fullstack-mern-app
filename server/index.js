import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

//кросс-доменные запросы
app.use(cors());

//обработка загружаемые в дб изображений
app.use(express.json({
    limit: "20mb", 
    extended: true
}));

//обработка загружаемые в дб изображений
app.use(express.urlencoded({ 
    limit: "20mb",
    extended: true
}));

//устанавливаем путь для всех постов
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;

//Устанавливаем соединение с дб
//Если соединение установлено - слушать порт
mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(
        PORT, 
        () => console.log(`Server is running! Port: ${PORT}`))
    )
    .catch((err) => console.log(err.message));
