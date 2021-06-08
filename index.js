import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';

// route
import postsRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// route
app.get('/', (req, res) => {
    res.send('simple rest crud API');
});
app.use('/posts', postsRoutes);
app.use('/user', userRoutes);


// mongoose
mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT || 3000, () => console.log(`Server run on port ${process.env.PORT}`)))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);