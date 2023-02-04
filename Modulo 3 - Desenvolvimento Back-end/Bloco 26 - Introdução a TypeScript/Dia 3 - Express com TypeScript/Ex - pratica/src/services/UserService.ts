import UserModel from "../models/UserModel";
import connection from "../database/connection";
import IUser from '../interfaces/IUser';

export default class UserService {
  private userModel;
  constructor() {
    this.userModel = new UserModel(connection);
  }

  getAllInteraction = async (): Promise<IUser[]> => {
    const users = await this.userModel.findAll();
    return users;
  };
}