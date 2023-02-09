import LoginModel from "../models/LoginModel";
import connection from "../database/connection";
import ILogin from "../interfaces/ILogin";
import jwt, { Secret } from 'jsonwebtoken';
import { validateLogin } from "./validations/loginValid";

export default class LoginService {
  private loginModel: LoginModel;
  constructor() {
    this.loginModel = new LoginModel(connection);
  }
  generateToken = async (loginData: ILogin): Promise<{ errorCode: number | null, message: string | null }> => {
    const validationResponse = validateLogin(loginData);
    if (validationResponse.errorCode) return validationResponse;
    const user = await this.loginModel.findUserByLogin(loginData);
    if (!user) {
      return { errorCode: 404, message: 'user not found' }
    }
    const secret = process.env.JWT_SECRET as Secret;
    const token = jwt.sign(user, secret);
    return { errorCode: null, message: token };
  }
}
