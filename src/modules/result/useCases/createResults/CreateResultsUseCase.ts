import { prisma } from "../../../../database/prismaClient";
import { FindAllGameUseCase } from "../../../games/useCases/findAllGames/FindAllGameUseCase";

export class CreateResultsUseCase {
  async execute(idUser: string) {
    const gamesUseCase = new FindAllGameUseCase();

    const allGames = await gamesUseCase.execute();

    const results = allGames.map((game) => {
      return {
        home_result: null,
        outside_result: null,
        id_game: game.id,
        id_user: idUser
      };
    });

    const resultsSaves = prisma.results.createMany({
      data: results
    })

    return resultsSaves;
  }
}
