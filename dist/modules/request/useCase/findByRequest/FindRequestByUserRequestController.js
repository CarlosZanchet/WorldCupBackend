import { FindRequestByUserRequestUseCase } from "./FindRequestByUserRequestUseCase";
export class FindRequestByUserRequestController {
    async handle(request, response) {
        const idUser = request.params.idUser;
        const findRequestByUserRequestUseCase = new FindRequestByUserRequestUseCase();
        const requests = findRequestByUserRequestUseCase.execute(idUser);
        return response.json(requests);
    }
}
//# sourceMappingURL=FindRequestByUserRequestController.js.map