import { SaveResultUseCase } from "./SaveResultUseCase";
export class SaveResultController {
    async handle(request, response) {
        const { id, home_result, outside_result, game, user } = request.body;
        const saveResultUseCase = new SaveResultUseCase();
        const result = saveResultUseCase.execute({ id, home_result, outside_result, game, user });
        return response.json(result);
    }
}
//# sourceMappingURL=SaveResultController.js.map