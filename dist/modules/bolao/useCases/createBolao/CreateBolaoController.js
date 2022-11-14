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
exports.CreateBolaoController = void 0;
const CreateBolaoUseCase_1 = require("./CreateBolaoUseCase");
class CreateBolaoController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, url_image, user_create, created_at, type } = request.body;
            const createBolaoUseCase = new CreateBolaoUseCase_1.CreateBolaoUseCase();
            const result = yield createBolaoUseCase.execute({ name, url_image, user_create, created_at, type });
            return response.json({ result });
        });
    }
}
exports.CreateBolaoController = CreateBolaoController;
//# sourceMappingURL=CreateBolaoController.js.map