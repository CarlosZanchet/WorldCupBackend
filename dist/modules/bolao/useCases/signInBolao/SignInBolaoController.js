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
exports.SignInBolaoController = void 0;
const SignInBolaoUseCase_1 = require("./SignInBolaoUseCase");
class SignInBolaoController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUser, idBolao } = request.body;
            const signInBolaoUseCase = new SignInBolaoUseCase_1.SignInBolaoUseCase();
            const result = yield signInBolaoUseCase.execute({ idUser, idBolao });
            return response.json({ result });
        });
    }
}
exports.SignInBolaoController = SignInBolaoController;
//# sourceMappingURL=SignInBolaoController.js.map