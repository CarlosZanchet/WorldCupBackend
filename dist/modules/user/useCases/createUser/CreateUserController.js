import { CreateUserUseCase } from "./CreateUserUseCase";
export class CreateUserController {
    async handle(request, response) {
        const { name, username, password } = request.body;
        const createUserUseCase = new CreateUserUseCase();
        const result = await createUserUseCase.execute({
            name,
            username,
            password,
        });
        return response.json({ result });
    }
}
//# sourceMappingURL=CreateUserController.js.map