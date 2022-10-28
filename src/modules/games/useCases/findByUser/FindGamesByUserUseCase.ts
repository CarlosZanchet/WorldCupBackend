import { prisma } from "../../../../database/prismaClient";

interface IFindByUser {
  idUser: string;
}

export class FindGamesByUserUseCase {
  async execute({ idUser }: IFindByUser) {
    

    const gamesByUser = prisma.games.findMany({
      where: {
        id_user: idUser
      }
    })

    return gamesByUser;

  }
}