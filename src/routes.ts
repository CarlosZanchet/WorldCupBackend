import { Request, request, Response, Router } from "express";
import { AutenticateUserController } from "./modules/account/authenticateUser/AutenticateUserController";
import { CreateBolaoController } from "./modules/bolao/useCases/createBolao/CreateBolaoController";
import { SignInBolaoController } from "./modules/bolao/useCases/signInBolao/SignInBolaoController";
import { CreateGameController } from "./modules/games/useCases/createGame/CreateGameController";
import { FindGamesByUserController } from "./modules/games/useCases/findByUser/FindGamesByUserController";
import { CreateTeamsController } from "./modules/teams/useCases/createTeams/CreateTeamsController";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";

const routes = Router();

//USER AND AUTHENTICATION
routes.post("/user", new CreateUserController().handle);
routes.post('/authenticate', new AutenticateUserController().handle);

//BOLAO
routes.post('/bolao', new CreateBolaoController().handle)
routes.post('/sign-in-bolao', new SignInBolaoController().handle);

//GAME
routes.post('/create-game', new CreateGameController().handle);
routes.get('/games-by-user/:idUser', new FindGamesByUserController().handle)

//TEAMS
routes.post('/create-teams', new CreateTeamsController().handle)


export { routes }