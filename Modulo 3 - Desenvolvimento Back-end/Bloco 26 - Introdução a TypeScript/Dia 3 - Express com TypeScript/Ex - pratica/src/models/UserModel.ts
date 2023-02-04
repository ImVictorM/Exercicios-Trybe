import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import IUser from '../interfaces/IUser';

export default class User {
  private connection: Pool;
  constructor(connection: Pool) {
    this.connection = connection;
  }

  findAll = async (): Promise<IUser[]> => {
    const query = 'SELECT id, name, email FROM Users'
    const response = await this.connection.execute<RowDataPacket[]>(query);
    const users = response[0];
    return users as IUser[];
  }

  findOne = async (id: number): Promise<IUser> => {
    const query = 'SELECT id, name, email FROM Users WHERE id = ?';
    const response = await this.connection.execute<RowDataPacket[]>(query, [id]);
    const user = response[0][0];
    return user as IUser;
  }

  createOne = async (newUser: IUser): Promise<IUser> => {
    const {name, email, password} = newUser;
    const query = 'INSERT INTO Users (name, email, password) VALUES (?, ? ,?)';
    const response = await this.connection.execute<ResultSetHeader>(query, [name, email, password]);
    const { insertId } = response[0];
    const createdUser = await this.findOne(insertId);
    return createdUser;
  }

  updateOne = async (id: number, updatedInfo: Partial<IUser>): Promise<IUser> => {
    const keys = Object.keys(updatedInfo);
    const colums = keys.map((key) => `${key} = ?`).join(', ');
    const columsValues = Object.values(updatedInfo);

    const query = `UPDATE Users SET ${colums} WHERE id = ?`;
    await this.connection.execute(query, [...columsValues, id]);
    const updatedUser = await this.findOne(id);
    return updatedUser;
  }

  deleteOne = async (id: number): Promise<void> => {
    const query = 'DELETE FROM Users WHERE id = ?';
    await this.connection.execute(query, [id]);
  }
}
