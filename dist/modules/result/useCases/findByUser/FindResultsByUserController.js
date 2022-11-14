import { FindResultsByUserUseCase } from "./FindResultsByUserUseCase";
export class FindResultsByUserController {
    async handle(request, response) {
        const idUser = request.query.idUser;
        const step = request.query.step;
        const findResultsByUserUseCase = new FindResultsByUserUseCase();
        const results = await findResultsByUserUseCase.execute(idUser, step);
        return response.json(results);
    }
}
//# sourceMappingURL=FindResultsByUserController.js.map