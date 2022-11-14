import { RequestSignInUseCase } from "./RequestSignInUseCase";
export class RequestSignInController {
    async handle(request, response) {
        const { idUser, idBolao } = request.body;
        const requestSignInUseCase = new RequestSignInUseCase();
        const result = await requestSignInUseCase.execute({ idUser, idBolao });
        return response.json(result);
    }
}
//# sourceMappingURL=RequestSignInController.js.map