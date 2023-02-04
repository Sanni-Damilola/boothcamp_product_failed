"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "input your email"],
        trim: true,
        lowercase: true,
        validate: [isEmail_1.default, "Please Enter a a vaild email"],
    },
    name: {
        type: String,
        required: [true, "input Your Name"],
    },
    password: {
        type: String,
        minlength: 6,
        required: [true, "input Your Password"],
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("UserChargeSchema", userSchema);
