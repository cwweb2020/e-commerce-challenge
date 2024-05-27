  // src/errors/internal.error.ts
  
  import { HttpError } from './http.error';
  
  export class InternalError extends HttpError {
    constructor(message: string) {
      super(message, 500);
    }
  }