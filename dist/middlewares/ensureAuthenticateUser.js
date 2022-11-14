"use strict";
// VALIDA TOKEN
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
exports.ensureAuthenticateClient = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticateClient(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            return response.status(401).json({
                message: 'Token missing'
            });
        }
        const [, token] = authHeader.split(" ");
        try {
            (0, jsonwebtoken_1.verify)(token, 'd9452db98c065e8964ebd1c489ad3be1');
            return next();
        }
        catch (err) {
            return response.status(401).json({
                message: 'Invalid token'
            });
        }
    });
}
exports.ensureAuthenticateClient = ensureAuthenticateClient;
//# sourceMappingURL=ensureAuthenticateUser.js.map