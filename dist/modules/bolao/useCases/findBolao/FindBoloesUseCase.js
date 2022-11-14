"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindBoloesUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
class FindBoloesUseCase {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield prismaClient_1.prisma.bolao.findMany({
                include: {
                    user_create: true,
                    users: {
                        include: {
                            users: true
                        }
                    }
                }
            });
            const boloesUser = result.map((bol) => {
                const users = bol.users.map((user) => user.users);
                return {
                    id: bol.id,
                    name: bol.name,
                    created_at: bol.created_at,
                    user_create: bol.user_create,
                    type: bol.type,
                    users: users,
                    url_image: bol.url_image
                };
            });
            return boloesUser;
        });
    }
}
exports.FindBoloesUseCase = FindBoloesUseCase;
//# sourceMappingURL=FindBoloesUseCase.js.map