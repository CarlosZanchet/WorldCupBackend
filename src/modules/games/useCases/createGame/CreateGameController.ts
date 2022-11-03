import { Request, Response } from "express";
import { CreateGameUseCase } from "./CreateGameUseCase";

export class CreateGameController {
  async handle(request: Request, response: Response) {

    const createGameUseCase = new CreateGameUseCase();

    const result = await createGameUseCase.execute()

    response.json(result)
  }
}