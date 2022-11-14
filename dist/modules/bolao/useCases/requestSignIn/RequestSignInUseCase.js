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
exports.RequestSignInUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
class RequestSignInUseCase {
    execute({ idUser, idBolao }) {
        return __awaiter(this, void 0, void 0, function* () {
            const bolao = yield prismaClient_1.prisma.bolao.findFirst({
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
                const result = yield prismaClient_1.prisma.requests.create({
                    data: request
                });
                return result;
            }
            else {
                throw new Error("Houve um erro ao carregar o bolão");
            }
        });
    }
}
exports.RequestSignInUseCase = RequestSignInUseCase;
//# sourceMappingURL=RequestSignInUseCase.js.map