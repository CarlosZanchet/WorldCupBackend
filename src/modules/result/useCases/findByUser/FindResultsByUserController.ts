import { Request, Response } from "express";
import { FindResultsByUserUseCase } from "./FindResultsByUserUseCase";

export class FindResultsByUserController { 
  async handle(request: Request, response: Response) {

    const idUser = request.query.idUser as string;
    const step = request.query.step  as string;

    const findResultsByUserUseCase = new FindResultsByUserUseCase()

    const results = await findResultsByUserUseCase.execute(idUser, step)

    return response.json(results)
  }
}