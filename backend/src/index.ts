// /src/index.ts

import express from 'express';
import { json } from 'body-parser';
import { favoriteRouter } from './routes/fav.routes';
import { errorHandler } from './middlewares/errorHandler.middleware';
import cors from 'cors'

const app = express();
app.use(json());

app.use(cors({origin: '*'}))
app.use('/api', favoriteRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;