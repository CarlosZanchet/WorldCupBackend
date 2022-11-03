import { Request, Response } from "express";
import { RequestAcceptUseCase } from "./RequestAcceptUseCase";

export class RequestAcceptController {
  async handle(request: Request, reponse: Response) {

    const idRequest = request.params.idRequest;

    const requestAcceptUseCase = new RequestAcceptUseCase();

    requestAcceptUseCase.execute(idRequest);

    return reponse.json({message: 'Adicionado com sucesso.'})

  }
}