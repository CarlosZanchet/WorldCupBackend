import { Request, Response } from "express";
import { FindBoloesUseCase } from "./FindBoloesUseCase";

export class FindBoloesController {
  async handle(request: Request, response: Response) {

    const findBoloesUseCase = new FindBoloesUseCase();

    const result = await findBoloesUseCase.execute();
    
    return response.json(result);
  }
}