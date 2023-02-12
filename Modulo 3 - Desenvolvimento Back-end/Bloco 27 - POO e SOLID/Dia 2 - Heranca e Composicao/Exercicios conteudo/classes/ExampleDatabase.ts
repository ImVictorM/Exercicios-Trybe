import Logger from "../interfaces/Logger";
import Database from "../interfaces/Database";
import ConsoleLogger from './ConsoleLogger';
import ConsoleLogger2 from './ConsoleLogger2';

class ExampleDatabase implements Database {

  constructor(public logger: Logger = new ConsoleLogger()) {}

  public save(key: string, value: string): void {
    this.logger.log(`${key} ${value}`);
  };
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('lamborguine', 'amarela');
db2.save('marcola', 'sim');
db3.save('agua', 'sapato');
