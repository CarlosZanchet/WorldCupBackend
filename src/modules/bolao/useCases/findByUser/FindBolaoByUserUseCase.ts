import { prisma } from "../../../../database/prismaClient";

export class FindBolaoByUserUseCase {
  async execute(idUser: string) {


    const result = await prisma.bolao_users.findMany({
      include: {
        bolao: true,
      },
      where: {
        id_user: idUser
      }
    })

    const boloes = result.map((bol) => bol.bolao)

    return boloes;

  }
}