import { CreateGameUseCase } from "./CreateGameUseCase";
export class CreateGameController {
    async handle(request, response) {
        const createGameUseCase = new CreateGameUseCase();
        const result = await createGameUseCase.execute();
        response.json(result);
    }
}
//# sourceMappingURL=CreateGameController.js.map