import express from 'express';
import { Response, Request } from 'express';
import UserRouter from './routes/UserRoutes';

const app = express();
app.use(express.json());

// checking server status
app.get('/', (_req: Request, res: Response) => res.status(200).send('working'));

app.use('/users', UserRouter);

export default app;
