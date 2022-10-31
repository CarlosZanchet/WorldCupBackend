import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { FindAllGameUseCase } from "../../../games/useCases/findAllGames/FindAllGameUseCase";
import { CreateResultsUseCase } from "../../../result/useCases/createResults/CreateResultsUseCase";

interface ICreateUser {
  name: string;
  username: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({ name, username, password }: ICreateUser) {
    const findAllGameUseCase = new FindAllGameUseCase();

    //Valida se o usuário nao está duplicado;
    const userExists = await prisma.users.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (userExists) {
      throw new Error("Usuário já cadastrado.");
    }

    //Criptografa senha
    const hashPassword = await hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        username,
        password: hashPassword,
      },
    });

    
    //CRIA OS RESULTADOS DO USUARIO
    const createResultsUseCase = new CreateResultsUseCase();
    await createResultsUseCase.execute(user.id)

    return user;
  }
}
