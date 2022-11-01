import { games, results } from "@prisma/client";
import { prisma } from "../../../database/prismaClient";

export class ScoreCounterUseCase {
  async execute(idUser: string) {
    const gamesForUser = await prisma.results.findMany({
      include: {
        game: true,
      },
      where: {
        id_user: idUser
      },
    });

    const PONTOS_ACERTO = 10;
    const PONTOS_RESULTADO = 5;

    function calculo(result: results, game: games | null): number {
      if (game) {
        const palpiteCasa: number | null = result.home_result
          ? parseInt(result.home_result)
          : null;
        const palpiteFora: number | null = result.outside_result
          ? parseInt(result.outside_result)
          : null;

        const placarCasa: number | null = game.home_score
          ? Number(game.home_score)
          : null;
        const placarFora: number | null = game.outside_score
          ? Number(game.outside_score)
          : null;

        if (palpiteCasa && palpiteFora && placarCasa && placarFora) {

          if (!palpiteCasa || !palpiteFora) {
            console.log('1')
            return 0;
          }

          if (!placarCasa || !placarFora) {
            console.log('2')
            return 0;
          }

          //ACERTO TOTAL
          if (palpiteCasa === placarCasa && palpiteFora === placarFora) {
            console.log('3')
            return PONTOS_ACERTO;
          }

          //ACERTO DO RESULTADO VITORIA DE CASA
          if (palpiteCasa > palpiteFora && placarCasa > placarFora) {
            console.log('4')
            return PONTOS_RESULTADO;
          }

          //ACERTO DO RESULTADO VITORIA DE FORA
          if (palpiteCasa < palpiteFora && placarCasa < placarFora) {
            console.log('5')
            return PONTOS_RESULTADO;
          }

          //EMPATE DIFERENTE DO ENPATE DO PALPITE
          if (palpiteCasa === palpiteFora && placarCasa === placarFora) {
            console.log('6')
            return PONTOS_RESULTADO;
          }
        }
        return 0;
      }
      return 0;
    }

    const valores = gamesForUser.map((res) => {
      const game = res.game;
      return calculo(res, game);
    });

    const sumValores = valores.reduce((sum, val) => sum + val, 0);
    console.log('Soma dos pontos: ',sumValores)

    return sumValores;
  }
}
