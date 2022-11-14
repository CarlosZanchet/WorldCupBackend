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
exports.CreateUserUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const prismaClient_1 = require("../../../../database/prismaClient");
const CreateResultsUseCase_1 = require("../../../result/useCases/createResults/CreateResultsUseCase");
class CreateUserUseCase {
    execute({ name, username, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            //Valida se o usuário nao está duplicado;
            const userExists = yield prismaClient_1.prisma.users.findFirst({
                where: {
                    username
                },
            });
            if (userExists) {
                throw new Error("Usuário já cadastrado.");
            }
            //Criptografa senha
            const hashPassword = yield (0, bcrypt_1.hash)(password, 10);
            const user = yield prismaClient_1.prisma.users.create({
                data: {
                    name,
                    username,
                    password: hashPassword,
                },
            });
            //CRIA OS RESULTADOS DO USUARIO
            const createResultsUseCase = new CreateResultsUseCase_1.CreateResultsUseCase();
            yield createResultsUseCase.execute(user.id);
            return user;
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map