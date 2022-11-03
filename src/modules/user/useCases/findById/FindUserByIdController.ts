import { Request, Response } from "express";
import { FindUserByIdUseCase } from "./FindUserByIdUserCase";

export class FindUserByIdController {
  async handle(request: Request, response: Response) {
    
    const idUser = request.params.idUser

    const findUserByIdUseCase = new FindUserByIdUseCase();

    const user = await findUserByIdUseCase.execute(idUser)

    return response.json(user)
  }
}