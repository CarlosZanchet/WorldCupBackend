import { Request, Response } from "express";
import { FindBolaoByUserUseCase } from "./FindBolaoByUserUseCase";

export class FindBolaoByUserController {
  async handle(request: Request, response: Response) {

    const idUser = request.params.idUser;
    const findBolaoByUserUseCase = new FindBolaoByUserUseCase();

    const result = await findBolaoByUserUseCase.execute(idUser);

    return response.json(result);
  }
}