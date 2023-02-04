import express, { json } from 'express';
import { Response, Request } from 'express';

const app = express();
app.use(express.json());

// checking server status
app.get('/', (_req: Request, res: Response) => res.status(200).send('working'));

export default app;
