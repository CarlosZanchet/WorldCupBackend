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
exports.SaveResultController = void 0;
const SaveResultUseCase_1 = require("./SaveResultUseCase");
class SaveResultController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, home_result, outside_result, game, user } = request.body;
            const saveResultUseCase = new SaveResultUseCase_1.SaveResultUseCase();
            const result = saveResultUseCase.execute({ id, home_result, outside_result, game, user });
            return response.json(result);
        });
    }
}
exports.SaveResultController = SaveResultController;
//# sourceMappingURL=SaveResultController.js.map