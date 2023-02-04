"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const deviceSchema = new mongoose_1.default.Schema({
    ticketNumber: {
        type: String,
        trim: true,
        required: true,
    },
    lostCard: {
        type: Boolean,
    },
    deviceType: {
        type: String,
    },
    numberOfDeviceBrought: {
        type: String,
    },
    pORb: {
        type: String,
    },
    collected: {
        type: Boolean,
    },
    userID: {
        type: String,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("DeviceSchema", deviceSchema);
