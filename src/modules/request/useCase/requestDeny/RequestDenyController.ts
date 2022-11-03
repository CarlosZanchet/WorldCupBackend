import { Request, Response } from "express";
import { RequestDenyUseCase } from "./RequestDenyUseCase";

export class RequestDenyController {
  async handle(request: Request, reponse: Response) {

    const idRequest = request.params.idRequest;

    const requestDenyUseCase = new RequestDenyUseCase();

    requestDenyUseCase.execute(idRequest);

    return reponse.json({message: 'Excluido com sucesso.'})

  }
}