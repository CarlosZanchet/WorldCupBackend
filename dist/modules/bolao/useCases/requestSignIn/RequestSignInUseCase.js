import { prisma } from "../../../../database/prismaClient";
export class RequestSignInUseCase {
    async execute({ idUser, idBolao }) {
        const bolao = await prisma.bolao.findFirst({
            include: {
                user_create: true
            },
            where: {
                id: idBolao
            }
        });
        if (bolao) {
            const request = {
                id_user_request: idUser,
                id_bolao: idBolao,
                id_administrator: bolao.user_create.id
            };
            const result = await prisma.requests.create({
                data: request
            });
            return result;
        }
        else {
            throw new Error("Houve um erro ao carregar o bolão");
        }
    }
}
//# sourceMappingURL=RequestSignInUseCase.js.map