declare global {
  namespace Express {
    interface Request {
      requestTime?: number; // requestTime middleware function
    }
  }
}

export {};
