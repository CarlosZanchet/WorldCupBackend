import { Request, Response } from "express";
import { ISaveResult, SaveResultUseCase } from "./SaveResultUseCase";

export class SaveResultController {
  async handle(request: Request, response: Response) {

    const { id, home_result, outside_result, game, user }: ISaveResult = request.body

    const saveResultUseCase = new SaveResultUseCase();

    const result = saveResultUseCase.execute({ id, home_result, outside_result, game, user });

    return response.json(result);
  }
}