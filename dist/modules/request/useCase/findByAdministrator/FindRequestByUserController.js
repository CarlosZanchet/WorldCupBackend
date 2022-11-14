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
exports.FindRequestByUserController = void 0;
const FindRequestByUserUseCase_1 = require("./FindRequestByUserUseCase");
class FindRequestByUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = request.params.idUser;
            const findRequestByUserUseCase = new FindRequestByUserUseCase_1.FindRequestByUserUseCase();
            const requests = yield findRequestByUserUseCase.execute(idUser);
            response.json(requests);
        });
    }
}
exports.FindRequestByUserController = FindRequestByUserController;
//# sourceMappingURL=FindRequestByUserController.js.map