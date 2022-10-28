import { apiWorldCup } from "../../../../api/apiWorldCup";
import { prisma } from "../../../../database/prismaClient";

interface ITeam {
  id: string;
  name: string;
  group: string;
  urlFlag: string;
}

interface IGame {
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
  
    const request = await apiWorldCup.get('/games');
    const allGames: IGame[] = request.data;
    return allGames;
    
  }
}
