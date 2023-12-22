import { Request } from 'express';

interface User {
  name: string;
}

declare module 'express-serve-static-core' {
  interface Request {
    user: User | undefined;
  }
}

type UserRequest = Request<
  {},
  {},
  {
    name: string;
  }
>;

export type { User, UserRequest };
