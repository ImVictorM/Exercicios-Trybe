import express from 'express';
import UserController from '../controllers/UserController';

const UserRouter = express.Router();

const userController = new UserController();

UserRouter.get('/', userController.requestAll);
UserRouter.get('/:id', userController.requestOne);
UserRouter.post('/', userController.requestCreateOne);
UserRouter.put('/:id', userController.requestUpdateOne);
UserRouter.delete('/:id', userController.requestDeleteOne);

export default UserRouter;
