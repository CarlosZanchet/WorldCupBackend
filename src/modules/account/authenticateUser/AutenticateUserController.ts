import { Request, Response } from "express";
import { AutenticateUserUseCase } from "./AutenticateUserUseCase";

export class AutenticateUserController {
  async handle(request: Request, response: Response) {

    const { username, password } = request.body;

    const autenticateUserUseCase = new AutenticateUserUseCase();

    const result = await autenticateUserUseCase.execute({
      username, password
    })

    return response.json(result);
  }
}