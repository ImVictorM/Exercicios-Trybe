import express from 'express';
import { Response, Request } from 'express';
import UserRouter from './routes/UserRoutes';
import LoginRouter from './routes/LoginRoutes';
import handleServerError from './middlewares/handleServerError';

const app = express();
app.use(express.json());

// checking server status
app.get('/', (_req: Request, res: Response) => res.status(200).send('working'));

app.use('/login', LoginRouter);
app.use('/users', UserRouter);

app.use(handleServerError);

export default app;
