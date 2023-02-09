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

  getOneInteraction = async (id: number): Promise<IUser> => {
    const user = await this.userModel.findOne(id);
    return user;
  }

  createOneInteraction = async (newUser: IUser): Promise<IUser> => {
    const createdUser = await this.userModel.createOne(newUser);
    return createdUser;
  }

  updateOneInteraction = async (id:number, updatedInfo: Partial<IUser>): Promise<IUser> => {
    const updatedUser = await this.userModel.updateOne(id, updatedInfo);
    return updatedUser;
  }

  deleteOneInteraction = async (id: number): Promise<void> => {
    await this.userModel.deleteOne(id);
  }
}