import { apiWorldCup } from "../../../../api/apiWorldCup";
import { prisma } from "../../../../database/prismaClient";
export class CreateTeamsUseCase {
    async execute() {
        const request = await apiWorldCup.get("/teams");
        const allTeams = request.data;
        const teamDb = allTeams.map((team) => {
            return {
                id: team.id,
                name: team.name,
                group_team: team.group,
                urlflag: team.urlFlag
            };
        });
        const result = await prisma.teams.createMany({
            data: teamDb
        });
        return result;
    }
}
//# sourceMappingURL=CreateTeamsUseCase.js.map