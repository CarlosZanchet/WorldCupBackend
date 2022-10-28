import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface User {
  id: string
  name: string
  username: string
}

interface ITokenDto {
  token: string;
  user: User;
}

interface IAuthenticateUser {
  username: string;
  password: string;
}

export class AutenticateUserUseCase {
  async execute({ username, password }: IAuthenticateUser): Promise<ITokenDto> {

    const user = await prisma.users.findFirst({
      where: {
        username
      }
    })

    if(!user) {
      throw new Error("Usuário ou senha inválidos");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Usuário ou senha inválidos");
    }

    //Gerar token
    const token = sign({ username }, "d9452db98c065e8964ebd1c489ad3be1", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenDto: ITokenDto = {token: token, user: user}

    return tokenDto;

  }
}