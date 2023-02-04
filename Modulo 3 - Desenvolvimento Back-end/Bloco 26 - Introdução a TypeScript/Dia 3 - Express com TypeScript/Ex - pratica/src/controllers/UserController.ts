import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserController {
  private userService;
  constructor() {
    this.userService = new UserService();
  }

  requestAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAllInteraction();
    return res.status(200).json(users);
  }
}