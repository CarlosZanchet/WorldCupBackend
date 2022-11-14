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
exports.CreateTeamsUseCase = void 0;
const apiWorldCup_1 = require("../../../../api/apiWorldCup");
const prismaClient_1 = require("../../../../database/prismaClient");
class CreateTeamsUseCase {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield apiWorldCup_1.apiWorldCup.get("/teams");
            const allTeams = request.data;
            const teamDb = allTeams.map((team) => {
                return {
                    id: team.id,
                    name: team.name,
                    group_team: team.group,
                    urlflag: team.urlFlag
                };
            });
            const result = yield prismaClient_1.prisma.teams.createMany({
                data: teamDb
            });
            return result;
        });
    }
}
exports.CreateTeamsUseCase = CreateTeamsUseCase;
//# sourceMappingURL=CreateTeamsUseCase.js.map