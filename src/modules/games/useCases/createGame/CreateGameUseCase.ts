import { prisma } from "../../../../database/prismaClient";
import { FindAllGameUseCase } from "../findAllGames/FindAllGameUseCase";

interface ICreateGame {
  idUser: string;
}

export class CreateGameUseCase {
  async execute() {

    const findAllGameUseCase = new FindAllGameUseCase();


    //BUSCA TODOS OS JOGOS PARA ADICIONAR NO USUARIO
    const allGames = await findAllGameUseCase.execute();

    const allGamesDb = allGames.map(game => {
      return {
          date: game.date,
          stadium: game.stadium,
          group_team: game.group,
          home_score: game.homeScore,
          outside_score: game.outsideScore, 
          id_home_team: game.homeTeam?.id,
          id_outside_team: game.outsideTeam?.id, 
          step: game.step
      }
    })

    const result = await prisma.games.createMany({
      data: allGamesDb
    })

    return result;
  }
}