import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { FindAllGameUseCase } from "../../../games/useCases/findAllGames/FindAllGameUseCase";

interface ICreateUser {
  name: string;
  username: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({ name, username, password }: ICreateUser) {
    const findAllGameUseCase = new FindAllGameUseCase();

    //Valida se o usuário nao está duplicado;
    const userExists = await prisma.users.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (userExists) {
      throw new Error("Usuário já cadastrado.");
    }

    //Criptografa senha
    const hashPassword = await hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        username,
        password: hashPassword,
      },
    });

    //BUSCA TODOS OS JOGOS PARA ADICIONAR NO USUARIO
    const allGames = await findAllGameUseCase.execute();

    const allGamesDb = allGames.map(game => {
      return {
          id_user: user.id,
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

    //SALVA TODOS OS JOGOS DO USUARIO
    await prisma.games.createMany({
      data: allGamesDb
    })

    return user;
  }
}
