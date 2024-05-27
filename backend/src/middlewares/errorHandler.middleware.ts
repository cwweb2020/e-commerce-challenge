// src/middleware/errorHandler.middleware.ts

import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors/http.error';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export function errorHandler(
  err: HttpError | Error,
  _req: Request,
 res: Response,
  _next: NextFunction
) {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
