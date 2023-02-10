import Logger from "../interfaces/Logger";

export default class ConsoleLogger implements Logger{
  public log(message: string): void {
    console.log(message);
  };
};
