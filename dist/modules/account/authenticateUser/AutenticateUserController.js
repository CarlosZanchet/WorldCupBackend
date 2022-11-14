import { AutenticateUserUseCase } from "./AutenticateUserUseCase";
export class AutenticateUserController {
    async handle(request, response) {
        const { username, password } = request.body;
        const autenticateUserUseCase = new AutenticateUserUseCase();
        const result = await autenticateUserUseCase.execute({
            username, password
        });
        return response.json(result);
    }
}
//# sourceMappingURL=AutenticateUserController.js.map