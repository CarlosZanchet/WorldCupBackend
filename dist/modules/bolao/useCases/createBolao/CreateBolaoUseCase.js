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
exports.CreateBolaoUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const SignInBolaoUseCase_1 = require("../signInBolao/SignInBolaoUseCase");
class CreateBolaoUseCase {
    execute({ name, url_image, user_create, created_at, type }) {
        return __awaiter(this, void 0, void 0, function* () {
            //Valida se descricao bolao nao esta duplicada;
            const bolaoExists = yield prismaClient_1.prisma.bolao.findFirst({
                where: {
                    name
                }
            });
            if (bolaoExists) {
                throw new Error('Bolão com descrição já cadastrada.');
            }
            const result = yield prismaClient_1.prisma.bolao.create({
                data: {
                    name,
                    url_image,
                    created_at,
                    id_user: user_create.id,
                    type
                }
            });
            //INSCREVE O USUARIO NO BOLAO RECEM CADASTARDO
            const signInBolaoUseCase = new SignInBolaoUseCase_1.SignInBolaoUseCase();
            yield signInBolaoUseCase.execute({ idUser: result.id_user, idBolao: result.id });
            return result;
        });
    }
}
exports.CreateBolaoUseCase = CreateBolaoUseCase;
//# sourceMappingURL=CreateBolaoUseCase.js.map