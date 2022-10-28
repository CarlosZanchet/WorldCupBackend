import { Request, Response } from "express";
import { FindGamesByUserUseCase } from "./FindGamesByUserUseCase";

export class FindGamesByUserController {
  async handle(request: Request, response: Response) {

    const { idUser } = request.params;

    console.log('myid ', idUser);

    const findByUserUseCase = new FindGamesByUserUseCase();

    const gamesById = await findByUserUseCase.execute({ idUser });

    return response.json(gamesById);

  }
}