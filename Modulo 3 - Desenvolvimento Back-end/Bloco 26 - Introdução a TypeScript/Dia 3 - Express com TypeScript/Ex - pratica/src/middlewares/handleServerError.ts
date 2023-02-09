import { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

export default async function handleServerError(error: Error, req: Request, res: Response, next: NextFunction) {
  return res.status(500).json({ message: error.message });
}
