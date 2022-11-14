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
exports.FindResultsByUserController = void 0;
const FindResultsByUserUseCase_1 = require("./FindResultsByUserUseCase");
class FindResultsByUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = request.query.idUser;
            const step = request.query.step;
            const findResultsByUserUseCase = new FindResultsByUserUseCase_1.FindResultsByUserUseCase();
            const results = yield findResultsByUserUseCase.execute(idUser, step);
            return response.json(results);
        });
    }
}
exports.FindResultsByUserController = FindResultsByUserController;
//# sourceMappingURL=FindResultsByUserController.js.map