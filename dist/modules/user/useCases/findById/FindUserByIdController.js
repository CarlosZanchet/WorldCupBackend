import { FindUserByIdUseCase } from "./FindUserByIdUserCase";
export class FindUserByIdController {
    async handle(request, response) {
        const idUser = request.params.idUser;
        const findUserByIdUseCase = new FindUserByIdUseCase();
        const user = await findUserByIdUseCase.execute(idUser);
        return response.json(user);
    }
}
//# sourceMappingURL=FindUserByIdController.js.map