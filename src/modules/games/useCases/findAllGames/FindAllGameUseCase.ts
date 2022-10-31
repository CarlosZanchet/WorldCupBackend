import { apiWorldCup } from "../../../../api/apiWorldCup";
import { prisma } from "../../../../database/prismaClient";

interface ITeam {
  id: string;
  name: string;
  group: string;
  urlFlag: string;
}

interface IGame {
  id?: string;
  date: Date;
  stadium: string;
  group: string | null;
  homeTeam: ITeam | null;
  outsideTeam: ITeam | null;
  homeScore: number | null;
  outsideScore: number | null;
  step: string;
}

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
      }
    })


    return gamesDb;
    
  }
}
