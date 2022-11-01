import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateUser";
import { AutenticateUserController } from "./modules/account/authenticateUser/AutenticateUserController";
import { CreateBolaoController } from "./modules/bolao/useCases/createBolao/CreateBolaoController";
import { FindBoloesController } from "./modules/bolao/useCases/findBolao/FindBoloesController";
import { FindBolaoByUserController } from "./modules/bolao/useCases/findByUser/FindBolaoByUserController";
import { SignInBolaoController } from "./modules/bolao/useCases/signInBolao/SignInBolaoController";
import { CreateGameController } from "./modules/games/useCases/createGame/CreateGameController";
import { FindResultsByUserController } from "./modules/result/useCases/findByUser/FindResultsByUserController";
import { SaveResultController } from "./modules/result/useCases/saveResult/SaveResultController";
import { ScoreCounterController } from "./modules/score/useCase/ScoreCounterController";
import { CreateTeamsController } from "./modules/teams/useCases/createTeams/CreateTeamsController";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";

const routes = Router();

//USER AND AUTHENTICATION
routes.post("/user", new CreateUserController().handle);
routes.post('/authenticate', new AutenticateUserController().handle);

//BOLAO
routes.post('/bolao', ensureAuthenticateClient, new CreateBolaoController().handle)
routes.get('/bolao', ensureAuthenticateClient, new FindBoloesController().handle)
routes.post('/sign-in-bolao', ensureAuthenticateClient, new SignInBolaoController().handle);
routes.get('/bolao-by-user/:idUser', ensureAuthenticateClient, new FindBolaoByUserController().handle)

//GAME
routes.post('/create-game', new CreateGameController().handle);

//TEAMS
routes.post('/create-teams', new CreateTeamsController().handle)

//RESULTS 
routes.post('/result', ensureAuthenticateClient, new SaveResultController().handle)
routes.get('/results-by-user', ensureAuthenticateClient,  new FindResultsByUserController().handle)
routes.get('/score-by-user/:idUser', ensureAuthenticateClient, new ScoreCounterController().handle)


export { routes }