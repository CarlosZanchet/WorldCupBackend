import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";
import { SignInBolaoUseCase } from "../../../bolao/useCases/signInBolao/SignInBolaoUseCase";

export class RequestAcceptUseCase {
  async execute(idRequest: string) {

    await prisma.requests.delete({
      where: {
        id: idRequest
      }
    })

    const request = await prisma.requests.findFirst({
      include: {
        user_request: true
      },
      where: {
        id: idRequest
      }
    })

    const signInBolaoUseCase = new SignInBolaoUseCase();

    if(request) {
      try {
        signInBolaoUseCase.execute({idUser: request.user_request.id, idBolao: request.id_bolao})
      } catch {
        throw new Error("Houve um erro ao aceitar a solicitação");
      }
    }
  }
}