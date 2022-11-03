import { prisma } from "../../../../database/prismaClient";

export class FindRequestByUserUseCase {
  async execute(idUser: string) {
    
    const requests = await prisma.requests.findMany({
      include: {
        bolao: true,
        user_request: true
      },
      where: {
        id_administrator: idUser
      }
    })

    return requests;

  }
}