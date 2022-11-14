import { prisma } from "../../../../database/prismaClient";
export class SaveResultUseCase {
    async execute(result) {
        const home = result.home_result;
        const outside = result.outside_result;
        if (home !== null && outside !== null) {
            const resultDb = await prisma.results.update({
                where: {
                    id: result.id
                },
                data: {
                    home_result: home.toString(),
                    outside_result: outside.toString()
                }
            });
            return resultDb;
        }
        return null;
    }
}
//# sourceMappingURL=SaveResultUseCase.js.map