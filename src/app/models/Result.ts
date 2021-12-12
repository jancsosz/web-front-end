export class Result<T> {
  timestamp: Date;
  status: string;
  path: string;
  data?: T;
  errors: Error[];
}
