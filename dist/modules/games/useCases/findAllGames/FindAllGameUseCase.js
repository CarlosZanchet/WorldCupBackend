import { prisma } from "../../../../database/prismaClient";
export class FindAllGameUseCase {
    async execute() {
        const request = await prisma.games.findMany({
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
    }
}
//# sourceMappingURL=FindAllGameUseCase.js.map