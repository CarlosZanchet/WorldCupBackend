import { RequestAcceptUseCase } from "./RequestAcceptUseCase";
export class RequestAcceptController {
    async handle(request, reponse) {
        const idRequest = request.params.idRequest;
        const requestAcceptUseCase = new RequestAcceptUseCase();
        requestAcceptUseCase.execute(idRequest);
        return reponse.json({ message: 'Adicionado com sucesso.' });
    }
}
//# sourceMappingURL=RequestAcceptController.js.map