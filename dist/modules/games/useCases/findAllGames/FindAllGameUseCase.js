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
exports.FindAllGameUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
class FindAllGameUseCase {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield prismaClient_1.prisma.games.findMany({
                include: {
                    home_team: true,
                    outside_team: true
                }
            });
            const gamesDb = request.map((game) => {
                return {
                    id: game.id,
                    date: game.date,
                    stadium: game.stadium,
                    group: game.group_team,
                    homeTeam: game.home_team,
                    outsideTeam: game.outside_team,
                    homeScore: game.home_score,
                    outsideScore: game.outside_score,
                    step: game.step
                };
            });
            return gamesDb;
        });
    }
}
exports.FindAllGameUseCase = FindAllGameUseCase;
//# sourceMappingURL=FindAllGameUseCase.js.map