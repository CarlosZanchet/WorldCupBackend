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
exports.CreateGameUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const FindAllGameUseCase_1 = require("../findAllGames/FindAllGameUseCase");
class CreateGameUseCase {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const findAllGameUseCase = new FindAllGameUseCase_1.FindAllGameUseCase();
            //BUSCA TODOS OS JOGOS PARA ADICIONAR NO USUARIO
            const allGames = yield findAllGameUseCase.execute();
            const allGamesDb = allGames.map(game => {
                var _a, _b;
                return {
                    date: game.date,
                    stadium: game.stadium,
                    group_team: game.group,
                    home_score: game.homeScore,
                    outside_score: game.outsideScore,
                    id_home_team: (_a = game.homeTeam) === null || _a === void 0 ? void 0 : _a.id,
                    id_outside_team: (_b = game.outsideTeam) === null || _b === void 0 ? void 0 : _b.id,
                    step: game.step
                };
            });
            const result = yield prismaClient_1.prisma.games.createMany({
                data: allGamesDb
            });
            return result;
        });
    }
}
exports.CreateGameUseCase = CreateGameUseCase;
//# sourceMappingURL=CreateGameUseCase.js.map