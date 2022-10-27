import { Router } from "express";
import { AutenticateUserController } from "./modules/account/authenticateUser/AutenticateUserController";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const autenticateUserController = new AutenticateUserController();

routes.post("/user/", createUserController.handle)
routes.post('/authenticate', autenticateUserController.handle)

export { routes }