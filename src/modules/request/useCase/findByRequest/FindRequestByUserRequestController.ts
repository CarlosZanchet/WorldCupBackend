import { Request, Response } from "express";
import { FindRequestByUserRequestUseCase } from "./FindRequestByUserRequestUseCase";

export class FindRequestByUserRequestController {
  async handle(request: Request, response: Response) {
    
    const idUser = request.params.idUser;

    const findRequestByUserRequestUseCase = new FindRequestByUserRequestUseCase();

    const requests = findRequestByUserRequestUseCase.execute(idUser)

    return response.json(requests)

  }
}