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
exports.CreateResultsUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const FindAllGameUseCase_1 = require("../../../games/useCases/findAllGames/FindAllGameUseCase");
class CreateResultsUseCase {
    execute(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const gamesUseCase = new FindAllGameUseCase_1.FindAllGameUseCase();
            const allGames = yield gamesUseCase.execute();
            const results = allGames.map((game) => {
                return {
                    home_result: null,
                    outside_result: null,
                    id_game: game.id,
                    id_user: idUser
                };
            });
            const resultsSaves = prismaClient_1.prisma.results.createMany({
                data: results
            });
            return resultsSaves;
        });
    }
}
exports.CreateResultsUseCase = CreateResultsUseCase;
//# sourceMappingURL=CreateResultsUseCase.js.map