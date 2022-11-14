import { prisma } from "../../../../database/prismaClient";
export class RequestDenyUseCase {
    async execute(idRequest) {
        await prisma.requests.delete({
            where: {
                id: idRequest
            }
        });
    }
}
//# sourceMappingURL=RequestDenyUseCase.js.map