import { Request, request, Response, Router } from "express";
import { AutenticateUserController } from "./modules/account/authenticateUser/AutenticateUserController";
import { CreateBolaoController } from "./modules/bolao/useCases/createBolao/CreateBolaoController";
import { SignInBolaoController } from "./modules/bolao/useCases/signInBolao/SignInBolaoController";
import { CreateGameController } from "./modules/games/useCases/createGame/CreateGameController";
import { FindGamesByUserController } from "./modules/games/useCases/findByUser/FindGamesByUserController";
import { CreateTeamsController } from "./modules/teams/useCases/createTeams/CreateTeamsController";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";

const routes = Router();

routes.post("/user", new CreateUserController().handle);
routes.post('/authenticate', new AutenticateUserController().handle);

routes.post('/bolao', new CreateBolaoController().handle)
routes.post('/sign-in-bolao', new SignInBolaoController().handle);

routes.post('/create-game', new CreateGameController().handle);

routes.post('/create-teams', new CreateTeamsController().handle)

routes.get('/games-by-user/:idUser', new FindGamesByUserController().handle)

export { routes }