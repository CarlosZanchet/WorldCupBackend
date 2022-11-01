import { json, Request, Response } from "express";
import { ScoreCounterUseCase } from "./ScoreCounterUseCase";

export class ScoreCounterController {
  async handle(request: Request, response: Response) {

    const idUser = request.params.idUser;

    const scoreCounterUseCase = new ScoreCounterUseCase();

    const result = await scoreCounterUseCase.execute(idUser)

    return response.json(result)

  }
}