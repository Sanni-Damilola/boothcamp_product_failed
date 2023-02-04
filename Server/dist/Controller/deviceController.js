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
exports.getAll_P_or_B = exports.getOneDevice = exports.updateDevice = exports.deleteAll = exports.postDevice = exports.getAllDevice = void 0;
const deviceSchema_1 = __importDefault(require("../Model/deviceSchema"));
const User_schema_1 = __importDefault(require("../Model/User.schema"));
// get all device
const getAllDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAll = yield deviceSchema_1.default.find();
        return res.status(200).json({
            length: `${getAll.length} users(s)`,
            message: "Sucessfully gotten all Data",
            data: getAll,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in getAllDevice",
            error: error,
        });
    }
});
exports.getAllDevice = getAllDevice;
const postDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getUserID = yield User_schema_1.default.findById(req.params.id).populate([
            {
                path: "email",
            },
        ]);
        const { ticketNumber, lostCard, deviceType, numberOfDeviceBrought, collected, userID, } = req.body;
        const post = yield deviceSchema_1.default.create({
            ticketNumber: ticketNumber.toUpperCase(),
            lostCard: false,
            deviceType,
            numberOfDeviceBrought: numberOfDeviceBrought ? numberOfDeviceBrought : "",
            collected: false,
            userID: getUserID === null || getUserID === void 0 ? void 0 : getUserID._id,
            pORb: ticketNumber.charAt(0).toUpperCase(),
        });
        return res.status(200).json({
            message: "successfully post device",
            data: post,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "An error occured in postDevice",
            error: error.message,
        });
    }
});
exports.postDevice = postDevice;
const deleteAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteAllDevice = yield deviceSchema_1.default.deleteMany();
        return res.status(200).json({
            message: "Delete All Device",
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in deleteAll",
            error: error,
        });
    }
});
exports.deleteAll = deleteAll;
const updateDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ticketNumber, numberOfDeviceBrought, deviceType, lostCard, collected, } = req.body;
        const upDate = yield deviceSchema_1.default.findByIdAndUpdate(req.params.id, {
            ticketNumber,
            numberOfDeviceBrought,
            deviceType,
            lostCard,
            collected,
        }, { new: true });
        return res.status(200).json({
            message: "Successfully updated" + req.params.id,
            data: upDate,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in updateDevice",
            error: error,
        });
    }
});
exports.updateDevice = updateDevice;
const getOneDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getOne = yield deviceSchema_1.default.findById(req.params.id);
        return res.status(200).json({
            message: "successfully gotten id" + req.params.id,
            data: getOne,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in getOneDevice",
            error: error,
        });
    }
});
exports.getOneDevice = getOneDevice;
const getAll_P_or_B = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const get = yield deviceSchema_1.default.find(req.query);
        return res.status(200).json({
            message: "Successfully gotten" + req.query,
            data: get,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in getAll_P_or_B",
            error: error,
        });
    }
});
exports.getAll_P_or_B = getAll_P_or_B;
