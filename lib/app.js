import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import pajamaController from './controllers/pajamas';

const app = express();

app.use(express.json());

app.use('/api/v1/pajamas', pajamaController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
