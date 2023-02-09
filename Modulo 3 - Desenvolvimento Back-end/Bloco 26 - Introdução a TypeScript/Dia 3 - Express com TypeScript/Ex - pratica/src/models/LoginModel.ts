import { Pool, RowDataPacket } from "mysql2/promise";
import ILogin from "../interfaces/ILogin";
import IUser from "../interfaces/IUser";

export default class LoginModel {
  private connection: Pool;
  constructor(connection: Pool) {
    this.connection = connection;
  };

  findUserByLogin = async (loginData: ILogin): Promise<IUser | null>  => {
    const { email, password } = loginData;
    const query = 'SELECT id, name, email FROM Users WHERE email=? AND password=?';
    const result = await this.connection.execute<RowDataPacket[]>(query, [email, password]);
    const user = result[0][0];
    return user as IUser || null;
  }
}
