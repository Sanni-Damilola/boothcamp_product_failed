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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const lifeUrl = "mongodb+srv://sannidatabase:sannidatabase@cluster0.zh68ie9.mongodb.net/test";
const localUrl = "mongodb://localhost/dbcharge";
const config = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connect = yield mongoose_1.default.connect(lifeUrl);
        console.log("Connnected to ", connect.connection.host);
    }
    catch (error) {
        console.log("An error occured in Config", error.message);
        process.exit(1);
    }
});
exports.config = config;
