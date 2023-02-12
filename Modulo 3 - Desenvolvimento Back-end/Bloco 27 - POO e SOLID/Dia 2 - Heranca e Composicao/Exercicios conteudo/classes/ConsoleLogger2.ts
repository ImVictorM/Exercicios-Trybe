import Logger from "../interfaces/Logger";

export default class ConsoleLogger2 implements Logger{
  public log(message: string): void {
    console.log(`Here's your message: ${message}`);
  };
};
