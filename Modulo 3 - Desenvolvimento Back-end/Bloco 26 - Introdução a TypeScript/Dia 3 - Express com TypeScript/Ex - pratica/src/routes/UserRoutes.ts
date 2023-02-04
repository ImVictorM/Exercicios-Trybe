import express from 'express';
import UserController from '../controllers/UserController';

const UserRouter = express.Router();

const userController = new UserController();

UserRouter.get('/', userController.requestAll);

export default UserRouter;
