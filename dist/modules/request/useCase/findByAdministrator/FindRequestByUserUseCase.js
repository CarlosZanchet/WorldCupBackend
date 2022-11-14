import { prisma } from "../../../../database/prismaClient";
export class FindRequestByUserUseCase {
    async execute(idUser) {
        const requests = await prisma.requests.findMany({
            include: {
                bolao: true,
                user_request: true
            },
            where: {
                id_administrator: idUser
            }
        });
        return requests;
    }
}
//# sourceMappingURL=FindRequestByUserUseCase.js.map