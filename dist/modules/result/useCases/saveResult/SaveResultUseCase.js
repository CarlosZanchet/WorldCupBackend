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
exports.SaveResultUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
class SaveResultUseCase {
    execute(result) {
        return __awaiter(this, void 0, void 0, function* () {
            const home = result.home_result;
            const outside = result.outside_result;
            if (home !== null && outside !== null) {
                const resultDb = yield prismaClient_1.prisma.results.update({
                    where: {
                        id: result.id
                    },
                    data: {
                        home_result: home.toString(),
                        outside_result: outside.toString()
                    }
                });
                return resultDb;
            }
            return null;
        });
    }
}
exports.SaveResultUseCase = SaveResultUseCase;
//# sourceMappingURL=SaveResultUseCase.js.map