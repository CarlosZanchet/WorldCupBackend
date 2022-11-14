import { FindRequestByUserUseCase } from "./FindRequestByUserUseCase";
export class FindRequestByUserController {
    async handle(request, response) {
        const idUser = request.params.idUser;
        const findRequestByUserUseCase = new FindRequestByUserUseCase();
        const requests = await findRequestByUserUseCase.execute(idUser);
        response.json(requests);
    }
}
//# sourceMappingURL=FindRequestByUserController.js.map