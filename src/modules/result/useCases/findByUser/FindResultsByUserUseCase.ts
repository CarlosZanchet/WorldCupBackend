import { prisma } from "../../../../database/prismaClient";

export class FindResultsByUserUseCase { 
  async execute(idUser: string, step: string) {
    
    const results = await prisma.results.findMany({
      include: {
        game: {
          include: {
            home_team: true,
            outside_team: true,
          }
        },
        user: true
      },
      where: {
        AND: [
          {
            id_user: idUser
          },
          {
            game: {
              step: step
            }
          }
        ]
      }
    })

    return results;

  }
}