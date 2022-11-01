import { prisma } from "../../../../database/prismaClient";

export class FindBoloesUseCase {
  async execute() {
    
    const result = await prisma.bolao.findMany({
      include: {
        user_create: true,
        users: true
      }
    })


    return result;

  }
}