import { prisma } from "../../../../database/prismaClient";
export class FindRequestByUserRequestUseCase {
    async execute(idUser) {
        const requests = await prisma.requests.findMany({
            include: {
                user_request: true
            },
            where: {
                id_user_request: idUser
            }
        });
        return requests;
    }
}
//# sourceMappingURL=FindRequestByUserRequestUseCase.js.map