import { Request, Response } from "express";
import LoginService from "../services/LoginService";

export default class LoginController {
  private loginService: LoginService;
  constructor() {
    this.loginService = new LoginService();
  }

  requestToken = async (req: Request, res: Response) => {
    const loginData = req.body;
    const { errorCode, message } = await this.loginService.generateToken(loginData);
    if (errorCode) {
      return res.status(errorCode).json({ message });
    }
    return res.status(200).json({ message });
  }
}
