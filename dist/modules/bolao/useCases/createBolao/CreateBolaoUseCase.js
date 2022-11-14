import { prisma } from "../../../../database/prismaClient";
import { SignInBolaoUseCase } from "../signInBolao/SignInBolaoUseCase";
export class CreateBolaoUseCase {
    async execute({ name, url_image, user_create, created_at, type }) {
        //Valida se descricao bolao nao esta duplicada;
        const bolaoExists = await prisma.bolao.findFirst({
            where: {
                name
            }
        });
        if (bolaoExists) {
            throw new Error('Bolão com descrição já cadastrada.');
        }
        const result = await prisma.bolao.create({
            data: {
                name,
                url_image,
                created_at,
                id_user: user_create.id,
                type
            }
        });
        //INSCREVE O USUARIO NO BOLAO RECEM CADASTARDO
        const signInBolaoUseCase = new SignInBolaoUseCase();
        await signInBolaoUseCase.execute({ idUser: result.id_user, idBolao: result.id });
        return result;
    }
}
//# sourceMappingURL=CreateBolaoUseCase.js.map