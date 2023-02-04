import express from 'express';
import LoginController from '../controllers/LoginController';

const LoginRouter = express.Router();
const loginController = new LoginController();

LoginRouter.post('/', loginController.requestToken);

export default LoginRouter;
