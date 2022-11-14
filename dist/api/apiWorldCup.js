"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiWorldCup = void 0;
const axios_1 = __importDefault(require("axios"));
const baseURL = 'http://ec2-15-228-99-56.sa-east-1.compute.amazonaws.com:3333';
exports.apiWorldCup = axios_1.default.create({ baseURL });
//# sourceMappingURL=apiWorldCup.js.map