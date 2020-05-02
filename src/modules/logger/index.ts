export class Logger {
  static logger = (...args: any[]) => {
    for (const key in args) {
      console.log(args[key]);
    }
  }

  static multiply = (a: number, b: number) => a * b;
}