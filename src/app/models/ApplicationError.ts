export class ApplicationError {
  code: string;
  title: string;
  message: string;
  info: string;

  constructor({code, title, message, info}) {
    this.code = code;
    this.title = title;
    this.message = message;
    this.info = info;
  }

}
