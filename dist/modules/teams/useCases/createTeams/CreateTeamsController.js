import { CreateTeamsUseCase } from "./CreateTeamsUseCase";
export class CreateTeamsController {
    async handle(request, response) {
        const createTeamsUsecase = new CreateTeamsUseCase();
        const result = await createTeamsUsecase.execute();
        return response.json(result);
    }
}
//# sourceMappingURL=CreateTeamsController.js.map