import { Request, Response } from "express";
import { RequestSignInUseCase } from "./RequestSignInUseCase";

export class RequestSignInController {
  async handle(request: Request, response: Response) {
    const { idUser, idBolao } = request.body;

    const requestSignInUseCase = new  RequestSignInUseCase();
    
    const result = await requestSignInUseCase.execute({ idUser, idBolao });
  
    return response.json(result);
  }
}