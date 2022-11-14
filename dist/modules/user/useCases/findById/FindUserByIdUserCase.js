import { prisma } from "../../../../database/prismaClient";
export class FindUserByIdUseCase {
    async execute(idUser) {
        const user = await prisma.users.findFirst({
            include: {
                results: {
                    include: {
                        game: true
                    }
                }
            },
            where: {
                id: idUser
            }
        });
        return user;
    }
}
//# sourceMappingURL=FindUserByIdUserCase.js.map