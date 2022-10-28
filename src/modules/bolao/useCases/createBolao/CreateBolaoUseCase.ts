import { prisma } from "../../../../database/prismaClient";

interface ICreateBolao {
  name: string;
  type: 'private' | 'public';
}

export class CreateBolaoUseCase {
  async execute({ name, type }: ICreateBolao) {

     //Valida se descricao bolao nao esta duplicada;
     const bolaoExists = await prisma.bolao.findFirst({
      where: {
        name
      }
    })

    if(bolaoExists) {
      throw new Error('Bolão com descrição já cadastrada.')
    }

    const result = await prisma.bolao.create({
      data: {
        name,
        type
      }
    })

    return result;

  }
}