import { prisma } from "../../../../database/prismaClient";

export class FindStepActiveUseCase {
  async execute() {

    const result = await prisma.steps.findMany({
      where: {
        active: true,
      }
    })

    return result;
  }
}