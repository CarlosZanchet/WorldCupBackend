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
exports.RequestDenyController = void 0;
const RequestDenyUseCase_1 = require("./RequestDenyUseCase");
class RequestDenyController {
    handle(request, reponse) {
        return __awaiter(this, void 0, void 0, function* () {
            const idRequest = request.params.idRequest;
            const requestDenyUseCase = new RequestDenyUseCase_1.RequestDenyUseCase();
            requestDenyUseCase.execute(idRequest);
            return reponse.json({ message: 'Excluido com sucesso.' });
        });
    }
}
exports.RequestDenyController = RequestDenyController;
//# sourceMappingURL=RequestDenyController.js.map