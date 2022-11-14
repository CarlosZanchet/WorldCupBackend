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
exports.RequestAcceptUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const SignInBolaoUseCase_1 = require("../../../bolao/useCases/signInBolao/SignInBolaoUseCase");
class RequestAcceptUseCase {
    execute(idRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prismaClient_1.prisma.requests.delete({
                where: {
                    id: idRequest
                }
            });
            const request = yield prismaClient_1.prisma.requests.findFirst({
                include: {
                    user_request: true
                },
                where: {
                    id: idRequest
                }
            });
            const signInBolaoUseCase = new SignInBolaoUseCase_1.SignInBolaoUseCase();
            if (request) {
                try {
                    signInBolaoUseCase.execute({ idUser: request.user_request.id, idBolao: request.id_bolao });
                }
                catch (_a) {
                    throw new Error("Houve um erro ao aceitar a solicitação");
                }
            }
        });
    }
}
exports.RequestAcceptUseCase = RequestAcceptUseCase;
//# sourceMappingURL=RequestAcceptUseCase.js.map