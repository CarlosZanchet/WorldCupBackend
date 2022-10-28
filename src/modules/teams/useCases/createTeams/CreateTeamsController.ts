import { Request, Response } from "express";
import { CreateTeamsUseCase } from "./CreateTeamsUseCase";

export class CreateTeamsController {
  async handle(request: Request, response: Response) {
    
    const createTeamsUsecase = new CreateTeamsUseCase();

    const result = await createTeamsUsecase.execute();

    return response.json(result);

  }
}