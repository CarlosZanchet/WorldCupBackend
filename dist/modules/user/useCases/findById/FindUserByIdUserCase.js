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
exports.FindUserByIdUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
class FindUserByIdUseCase {
    execute(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prismaClient_1.prisma.users.findFirst({
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
        });
    }
}
exports.FindUserByIdUseCase = FindUserByIdUseCase;
//# sourceMappingURL=FindUserByIdUserCase.js.map