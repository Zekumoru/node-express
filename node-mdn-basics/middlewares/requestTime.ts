/// <reference path="./requestTime.d.ts" />
import { Request, Response, NextFunction } from 'express';

const requestTime = (req: Request, res: Response, next: NextFunction) => {
  req.requestTime = Date.now();
  next();
};

export default requestTime;
