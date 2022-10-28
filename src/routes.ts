import { Request, request, Response, Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateUser";
import { AutenticateUserController } from "./modules/account/authenticateUser/AutenticateUserController";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const autenticateUserController = new AutenticateUserController();

routes.get('/rota-auth', ensureAuthenticateClient, (request: Request, response:Response) => {
    response.json({ message: 'acho que deu certo'})
})

routes.post("/user", createUserController.handle)
routes.post('/authenticate', autenticateUserController.handle)

export { routes }