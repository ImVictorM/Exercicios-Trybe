import ILogin from "../../interfaces/ILogin";
import Joi from "joi";

const logginPattern = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export function validateLogin(loginInfo: ILogin): { errorCode: number | null, message: string | null } {
  const { error } = logginPattern.validate(loginInfo);
  if (error) {
    return { errorCode: 400, message: 'invalid login' };
  }
  return { errorCode: null, message: null };
}
