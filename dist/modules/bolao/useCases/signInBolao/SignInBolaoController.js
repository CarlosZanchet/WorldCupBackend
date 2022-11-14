import { SignInBolaoUseCase } from "./SignInBolaoUseCase";
export class SignInBolaoController {
    async handle(request, response) {
        const { idUser, idBolao } = request.body;
        const signInBolaoUseCase = new SignInBolaoUseCase();
        const result = await signInBolaoUseCase.execute({ idUser, idBolao });
        return response.json({ result });
    }
}
//# sourceMappingURL=SignInBolaoController.js.map