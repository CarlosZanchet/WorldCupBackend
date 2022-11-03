import { prisma } from "../../../../database/prismaClient";

export class FindUserByIdUseCase {
  async execute(idUser: string) {


    const user = await prisma.users.findFirst({
      include: {
        results: {
          include: {
            game: true
          }
        }
      },
      where: {
        id: idUser
      }
    })

    return user;

  }
}