import { FindBolaoByUserUseCase } from "./FindBolaoByUserUseCase";
export class FindBolaoByUserController {
    async handle(request, response) {
        const idUser = request.params.idUser;
        const findBolaoByUserUseCase = new FindBolaoByUserUseCase();
        const result = await findBolaoByUserUseCase.execute(idUser);
        return response.json(result);
    }
}
//# sourceMappingURL=FindBolaoByUserController.js.map