import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateUser";
import { AutenticateUserController } from "./modules/account/authenticateUser/AutenticateUserController";
import { CreateBolaoController } from "./modules/bolao/useCases/createBolao/CreateBolaoController";
import { FindBoloesController } from "./modules/bolao/useCases/findBolao/FindBoloesController";
import { FindBolaoByUserController } from "./modules/bolao/useCases/findByUser/FindBolaoByUserController";
import { RequestSignInController } from "./modules/bolao/useCases/requestSignIn/RequestSignInController";
import { SignInBolaoController } from "./modules/bolao/useCases/signInBolao/SignInBolaoController";
import { CreateGameController } from "./modules/games/useCases/createGame/CreateGameController";
import { FindRequestByUserController } from "./modules/request/useCase/findByAdministrator/FindRequestByUserController";
import { FindRequestByUserRequestController } from "./modules/request/useCase/findByRequest/FindRequestByUserRequestController";
import { RequestAcceptController } from "./modules/request/useCase/requestAccept/RequestAcceptController";
import { RequestDenyController } from "./modules/request/useCase/requestDeny/RequestDenyController";
import { FindResultsByUserController } from "./modules/result/useCases/findByUser/FindResultsByUserController";
import { SaveResultController } from "./modules/result/useCases/saveResult/SaveResultController";
import { CreateTeamsController } from "./modules/teams/useCases/createTeams/CreateTeamsController";
import { CreateUserController } from "./modules/user/useCases/createUser/CreateUserController";
import { FindUserByIdController } from "./modules/user/useCases/findById/FindUserByIdController";

const routes = Router();

//USER AND AUTHENTICATION
routes.post("/user", new CreateUserController().handle);
routes.post('/authenticate', new AutenticateUserController().handle);
routes.get('/user/:idUser', new FindUserByIdController().handle)

//BOLAO
routes.post('/bolao', ensureAuthenticateClient, new CreateBolaoController().handle)
routes.get('/bolao', ensureAuthenticateClient, new FindBoloesController().handle)
routes.post('/sign-in-bolao', ensureAuthenticateClient, new SignInBolaoController().handle);
routes.get('/bolao-by-user/:idUser', ensureAuthenticateClient, new FindBolaoByUserController().handle)
routes.post('/request-sign-in', ensureAuthenticateClient, new RequestSignInController().handle);

//GAME
routes.post('/create-game', new CreateGameController().handle);

//TEAMS
routes.post('/create-teams', new CreateTeamsController().handle)

//RESULTS 
routes.post('/result', ensureAuthenticateClient, new SaveResultController().handle)
routes.get('/results-by-user', ensureAuthenticateClient,  new FindResultsByUserController().handle)

// REQUESTS
routes.get('/request-by-user/:idUser', ensureAuthenticateClient, new FindRequestByUserController().handle)
routes.get('/request-deny/:idRequest', ensureAuthenticateClient, new RequestDenyController().handle)
routes.get('/request-accept/:idRequest', ensureAuthenticateClient, new RequestAcceptController().handle)
routes.get('/requests-by-user-request/:idUser', ensureAuthenticateClient, new FindRequestByUserRequestController().handle)

export { routes }