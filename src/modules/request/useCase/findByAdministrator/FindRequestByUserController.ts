import { Request, Response } from "express";
import { FindRequestByUserUseCase } from "./FindRequestByUserUseCase";

export class FindRequestByUserController {
  async handle(request: Request, response: Response) {

    const idUser = request.params.idUser;

    const findRequestByUserUseCase = new FindRequestByUserUseCase();

    const requests = await findRequestByUserUseCase.execute(idUser);

    response.json(requests);

  }
}