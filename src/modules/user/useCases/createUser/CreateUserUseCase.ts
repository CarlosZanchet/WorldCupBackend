import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateUser {
  name: string;
  lastname: string;
  username: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({ name, lastname, username, password }: ICreateUser) {

    //Valida se o usuário nao está duplicado;
    const userExists = await prisma.user.findFirst({
      where: {
        username: {
          mode: 'insensitive'
        }
      }
    })

    if(userExists) {
      throw new Error('Usuário já cadastrado.')
    }

    //Criptografa senha
    const hashPassword = await hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        lastname,
        username,
        password: hashPassword
      }
    })
  }
}


