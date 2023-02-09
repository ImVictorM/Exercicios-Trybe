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

  requestOne = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await this.userService.getOneInteraction(id);
    return res.status(200).json(user);
  }

  requestCreateOne = async (req: Request, res: Response) => {
    const newUser = req.body;
    const createdUser = await this.userService.createOneInteraction(newUser);
    return res.status(201).json(createdUser);
  }

  requestUpdateOne = async (req: Request, res: Response) => {
    const updatedInfo = req.body;
    const id = Number(req.params.id);
    const updatedUser = await this.userService.updateOneInteraction(id, updatedInfo);
    return res.status(200).json(updatedUser);
  }

  requestDeleteOne = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.userService.deleteOneInteraction(id);
    return res.status(204).end();
  }
}