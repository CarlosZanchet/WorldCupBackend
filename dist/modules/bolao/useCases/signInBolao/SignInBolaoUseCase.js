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
exports.SignInBolaoUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
class SignInBolaoUseCase {
    execute({ idUser, idBolao }) {
        return __awaiter(this, void 0, void 0, function* () {
            const bolao = yield prismaClient_1.prisma.bolao_users.findFirst({
                where: {
                    id_bolao: idBolao,
                    id_user: idUser
                }
            });
            if (bolao) {
                throw new Error("Você já está inscrito nesse bolão.");
            }
            const result = prismaClient_1.prisma.bolao_users.create({
                data: {
                    id_user: idUser,
                    id_bolao: idBolao
                }
            });
            return result;
        });
    }
}
exports.SignInBolaoUseCase = SignInBolaoUseCase;
//# sourceMappingURL=SignInBolaoUseCase.js.map