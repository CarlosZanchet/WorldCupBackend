import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateUser";
import { AutenticateUserController } from "./modules/account/authenticateUser/AutenticateUserController";
import { CreateBolaoController } from "./modules/bolao/useCases/createBolao/CreateBolaoController";
import { SignInBolaoController } from "./modules/bolao/useCases/signInBolao/SignInBolaoController";
import { CreateGameController } from "./modules/games/useCases/createGame/CreateGameController";
import { FindResultsByUserController } from "./modules/result/useCases/findByUser/FindResultsByUserController";
import { SaveResultController } from "./modules/result/useCases/saveResult/SaveResultController";
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

//TEAMS
routes.post('/create-teams', new CreateTeamsController().handle)

//RESULTS 
routes.post('/result', new SaveResultController().handle)
routes.get('/results-by-user', ensureAuthenticateClient,  new FindResultsByUserController().handle)


export { routes }