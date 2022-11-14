import { FindBoloesUseCase } from "./FindBoloesUseCase";
export class FindBoloesController {
    async handle(request, response) {
        const findBoloesUseCase = new FindBoloesUseCase();
        const result = await findBoloesUseCase.execute();
        return response.json(result);
    }
}
//# sourceMappingURL=FindBoloesController.js.map