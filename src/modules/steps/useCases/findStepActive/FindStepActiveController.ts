import { Request, Response } from "express";
import { FindStepActiveUseCase } from "./FindStepActiveUseCase";

export class FindStepActiveController {
  async handle(request: Request, response: Response) {

    const findStepActiveUseCase = new FindStepActiveUseCase();

    const result = await findStepActiveUseCase.execute();

    return response.json(result);

  }
}