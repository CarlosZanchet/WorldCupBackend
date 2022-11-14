import { FindStepActiveUseCase } from "./FindStepActiveUseCase";
export class FindStepActiveController {
    async handle(request, response) {
        const findStepActiveUseCase = new FindStepActiveUseCase();
        const result = await findStepActiveUseCase.execute();
        return response.json(result);
    }
}
//# sourceMappingURL=FindStepActiveController.js.map