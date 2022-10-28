import { prisma } from "../../../../database/prismaClient";

interface ISignInBolao {
  idUser: string;
  idBolao: string;
}

export class SignInBolaoUseCase {
  async execute({ idUser, idBolao }: ISignInBolao) {

    const result = prisma.bolao_users.create({
      data: {
        id_user: idUser,
        id_bolao: idBolao
      }
    })

    return result;

  }
}