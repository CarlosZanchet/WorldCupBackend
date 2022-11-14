import { RequestDenyUseCase } from "./RequestDenyUseCase";
export class RequestDenyController {
    async handle(request, reponse) {
        const idRequest = request.params.idRequest;
        const requestDenyUseCase = new RequestDenyUseCase();
        requestDenyUseCase.execute(idRequest);
        return reponse.json({ message: 'Excluido com sucesso.' });
    }
}
//# sourceMappingURL=RequestDenyController.js.map