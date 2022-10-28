import { Request, Response } from "express";
import { CreateBolaoUseCase } from "./CreateBolaoUseCase";

export class CreateBolaoController {
  async handle(request: Request, response: Response) {

    const { name, type } =  request.body;

    const createBolaoUseCase = new CreateBolaoUseCase();

    const result = await createBolaoUseCase.execute({ name, type})

    return response.json({ result });
  }
}