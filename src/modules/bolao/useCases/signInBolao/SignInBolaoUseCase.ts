import { prisma } from "../../../../database/prismaClient";

interface ISignInBolao {
  idUser: string;
  idBolao: string;
}

export class SignInBolaoUseCase {
  async execute({ idUser, idBolao }: ISignInBolao) {

    const bolao = await prisma.bolao_users.findFirst({
      where: {
        id_bolao: idBolao,
        id_user: idUser
      }
    })

    if(bolao) {
      throw new Error("Você já está inscrito nesse bolão.");
    }

    const result = prisma.bolao_users.create({
      data: {
        id_user: idUser,
        id_bolao: idBolao
      }
    })

    return result;

  }
}