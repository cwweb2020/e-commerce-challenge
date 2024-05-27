  // src/errors/notFound.error.ts
  
  import { HttpError } from './http.error';
  
  export class NotFoundError extends HttpError {
    constructor(message: string) {
      super(message, 404);
    }
  }