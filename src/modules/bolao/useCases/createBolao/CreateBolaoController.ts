import { Request, Response } from "express";
import { CreateBolaoUseCase } from "./CreateBolaoUseCase";

export class CreateBolaoController {
  async handle(request: Request, response: Response) {

    const { name, url_image, user_create, created_at, type } =  request.body;

    const createBolaoUseCase = new CreateBolaoUseCase();

    const result = await createBolaoUseCase.execute({ name, url_image, user_create, created_at, type })

    return response.json({ result });
  }
}