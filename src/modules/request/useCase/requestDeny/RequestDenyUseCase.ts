import { prisma } from "../../../../database/prismaClient";

export class RequestDenyUseCase {
  async execute(idRequest: string) {

    await prisma.requests.delete({
      where: {
        id: idRequest
      }
    })
  }
}