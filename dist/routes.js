"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const prismaClient_1 = require("./database/prismaClient");
const ensureAuthenticateUser_1 = require("./middlewares/ensureAuthenticateUser");
const AutenticateUserController_1 = require("./modules/account/authenticateUser/AutenticateUserController");
const CreateBolaoController_1 = require("./modules/bolao/useCases/createBolao/CreateBolaoController");
const FindBoloesController_1 = require("./modules/bolao/useCases/findBolao/FindBoloesController");
const FindBolaoByUserController_1 = require("./modules/bolao/useCases/findByUser/FindBolaoByUserController");
const RequestSignInController_1 = require("./modules/bolao/useCases/requestSignIn/RequestSignInController");
const SignInBolaoController_1 = require("./modules/bolao/useCases/signInBolao/SignInBolaoController");
const CreateGameController_1 = require("./modules/games/useCases/createGame/CreateGameController");
const FindRequestByUserController_1 = require("./modules/request/useCase/findByAdministrator/FindRequestByUserController");
const FindRequestByUserRequestController_1 = require("./modules/request/useCase/findByRequest/FindRequestByUserRequestController");
const RequestAcceptController_1 = require("./modules/request/useCase/requestAccept/RequestAcceptController");
const RequestDenyController_1 = require("./modules/request/useCase/requestDeny/RequestDenyController");
const FindResultsByUserController_1 = require("./modules/result/useCases/findByUser/FindResultsByUserController");
const SaveResultController_1 = require("./modules/result/useCases/saveResult/SaveResultController");
const FindStepActiveController_1 = require("./modules/steps/useCases/findStepActive/FindStepActiveController");
const CreateTeamsController_1 = require("./modules/teams/useCases/createTeams/CreateTeamsController");
const CreateUserController_1 = require("./modules/user/useCases/createUser/CreateUserController");
const FindUserByIdController_1 = require("./modules/user/useCases/findById/FindUserByIdController");
const routes = (0, express_1.Router)();
exports.routes = routes;
//USER AND AUTHENTICATION
routes.post("/user", new CreateUserController_1.CreateUserController().handle);
routes.post('/authenticate', new AutenticateUserController_1.AutenticateUserController().handle);
routes.get('/user/:idUser', new FindUserByIdController_1.FindUserByIdController().handle);
//BOLAO
routes.post('/bolao', ensureAuthenticateUser_1.ensureAuthenticateClient, new CreateBolaoController_1.CreateBolaoController().handle);
routes.get('/bolao', ensureAuthenticateUser_1.ensureAuthenticateClient, new FindBoloesController_1.FindBoloesController().handle);
routes.post('/sign-in-bolao', ensureAuthenticateUser_1.ensureAuthenticateClient, new SignInBolaoController_1.SignInBolaoController().handle);
routes.get('/bolao-by-user/:idUser', ensureAuthenticateUser_1.ensureAuthenticateClient, new FindBolaoByUserController_1.FindBolaoByUserController().handle);
routes.post('/request-sign-in', ensureAuthenticateUser_1.ensureAuthenticateClient, new RequestSignInController_1.RequestSignInController().handle);
//GAME
routes.post('/create-game', new CreateGameController_1.CreateGameController().handle);
//TEAMS
routes.post('/create-teams', new CreateTeamsController_1.CreateTeamsController().handle);
//RESULTS 
routes.post('/result', ensureAuthenticateUser_1.ensureAuthenticateClient, new SaveResultController_1.SaveResultController().handle);
routes.get('/results-by-user', ensureAuthenticateUser_1.ensureAuthenticateClient, new FindResultsByUserController_1.FindResultsByUserController().handle);
// REQUESTS
routes.get('/request-by-user/:idUser', ensureAuthenticateUser_1.ensureAuthenticateClient, new FindRequestByUserController_1.FindRequestByUserController().handle);
routes.get('/request-deny/:idRequest', ensureAuthenticateUser_1.ensureAuthenticateClient, new RequestDenyController_1.RequestDenyController().handle);
routes.get('/request-accept/:idRequest', ensureAuthenticateUser_1.ensureAuthenticateClient, new RequestAcceptController_1.RequestAcceptController().handle);
routes.get('/requests-by-user-request/:idUser', ensureAuthenticateUser_1.ensureAuthenticateClient, new FindRequestByUserRequestController_1.FindRequestByUserRequestController().handle);
// STEP 
routes.get('/steps-active', ensureAuthenticateUser_1.ensureAuthenticateClient, new FindStepActiveController_1.FindStepActiveController().handle);
//CADASTRA AS STEPS
routes.get('/steps-create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const steps = [
        {
            step: 1,
            active: true,
            name: 'Primeira Rodada'
        },
        {
            step: 2,
            active: true,
            name: 'Segunda Rodada'
        },
        {
            step: 3,
            active: true,
            name: 'Terceira Rodada'
        },
        {
            step: 4,
            active: false,
            name: 'Oitavas de Final'
        },
        {
            step: 5,
            active: false,
            name: 'Quarta de Final'
        },
        {
            step: 6,
            active: false,
            name: 'Semi Finais'
        },
        {
            step: 7,
            active: false,
            name: 'Terceiro e Quarto'
        },
        {
            step: 8,
            active: false,
            name: 'Final'
        }
    ];
    const result = yield prismaClient_1.prisma.steps.createMany({
        data: steps
    });
    return res.json(result);
}));
//# sourceMappingURL=routes.js.map