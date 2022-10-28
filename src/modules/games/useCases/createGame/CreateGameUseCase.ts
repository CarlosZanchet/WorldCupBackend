import { prisma } from "../../../../database/prismaClient";
import { FindAllGameUseCase } from "../findAllGames/FindAllGameUseCase";

interface ICreateGame {
  idUser: string;
}

export class CreateGameUseCase {
  async execute({ idUser }: ICreateGame) {

    const findAllGameUseCase = new FindAllGameUseCase();

    const allGames = await findAllGameUseCase.execute();

    const firstGame = allGames[0];

    const { date, stadium, group, homeScore, homeTeam, outsideScore, outsideTeam, step } = firstGame;

    const result = prisma.games.create({
      data: {
        id_user: idUser, 
        date,
        stadium,
        group_team: group,
        home_score: homeScore,
        id_home_team: homeTeam?.id,
        outside_score: outsideScore,
        id_outside_team: outsideTeam?.id,
        step
      }
    })

    return result;
  }
}