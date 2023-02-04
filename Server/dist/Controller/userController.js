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
exports.getAllUser = exports.deleteAllUser = exports.login = exports.register = void 0;
const User_schema_1 = __importDefault(require("../Model/User.schema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const createUser = yield User_schema_1.default.create({ email, password: hash, name });
        return res.status(200).json({
            message: "successfully Posted",
            data: createUser,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error register",
            error: error,
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const getUser = yield User_schema_1.default.findOne({ email });
        if (!getUser) {
            return res.status(400).json({
                message: "User Not Found",
            });
        }
        return res.status(200).json({
            message: `welcome ${getUser.name}`,
            data: getUser,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error in login",
            error: error,
        });
    }
});
exports.login = login;
const deleteAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletAllUser = yield User_schema_1.default.deleteMany();
    return res.status(200).json({
        message: "Deleted All User",
    });
});
exports.deleteAllUser = deleteAllUser;
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getAllUser = yield User_schema_1.default.find();
    return res.status(200).json({
        message: `${getAllUser.length}`,
        data: getAllUser,
    });
});
exports.getAllUser = getAllUser;
