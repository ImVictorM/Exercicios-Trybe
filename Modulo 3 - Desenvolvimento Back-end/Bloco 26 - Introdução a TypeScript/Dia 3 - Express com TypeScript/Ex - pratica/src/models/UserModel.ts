import { Pool, RowDataPacket } from 'mysql2/promise'
import IUser from '../interfaces/IUser';

export default class User {
  private connection: Pool;
  constructor(connection: Pool) {
    this.connection = connection;
  }

  findAll = async (): Promise<IUser[]> => {
    const query = 'SELECT * FROM Users'
    const response = await this.connection.execute<RowDataPacket[]>(query);
    const users = response[0];
    return users as IUser[];
  }
}
