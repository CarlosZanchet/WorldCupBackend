import { Request, request, Response, Router } from "express";
import { AutenticateUserController } from "./modules/account/authenticateUser/AutenticateUserController";
import { CreateBolaoController } from "./modules/bolao/useCases/createBolao/CreateBolaoController";
import { SignInBolaoController } from "./modules/bolao/useCases/signInBolao/SignInBolaoController";
import { CreateGameController } from "./modules/games/useCases/createGame/CreateGameController";
import { FindGamesByUserController } from "./modules/games/useCases/findByUser/FindGamesByUserController";
import { CreateTeamsController } from "./modules/teams/useCases/createTeams/CreateTeamsController";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const autenticateUserController = new AutenticateUserController();

const createBolaoController = new CreateBolaoController();
const signInBolaoController = new SignInBolaoController();

const createGameController = new CreateGameController();

const createTeamsController = new CreateTeamsController();

routes.post("/user", createUserController.handle);
routes.post('/authenticate', autenticateUserController.handle);

routes.post('/bolao', createBolaoController.handle)
routes.post('/sign-in-bolao', signInBolaoController.handle);

routes.post('/create-game', createGameController.handle);

routes.post('/create-teams', createTeamsController.handle)

routes.get('/games-by-user/:idUser', new FindGamesByUserController().handle)

export { routes }