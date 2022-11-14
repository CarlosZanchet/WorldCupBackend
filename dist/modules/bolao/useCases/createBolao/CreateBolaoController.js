import { CreateBolaoUseCase } from "./CreateBolaoUseCase";
export class CreateBolaoController {
    async handle(request, response) {
        const { name, url_image, user_create, created_at, type } = request.body;
        const createBolaoUseCase = new CreateBolaoUseCase();
        const result = await createBolaoUseCase.execute({ name, url_image, user_create, created_at, type });
        return response.json({ result });
    }
}
//# sourceMappingURL=CreateBolaoController.js.map