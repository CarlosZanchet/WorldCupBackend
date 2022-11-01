import { Request, Response } from "express";
import { SignInBolaoUseCase } from "./SignInBolaoUseCase";

export class SignInBolaoController {
  async handle(request: Request, response: Response) {

    const { idUser, idBolao } = request.body;

    console.log(idUser, idBolao);

    const signInBolaoUseCase = new SignInBolaoUseCase();

    const result = await signInBolaoUseCase.execute({ idUser, idBolao });

    return response.json({ result });
  }
}