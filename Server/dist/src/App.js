"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appHttp = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const userRoute_1 = __importDefault(require("../Routes/userRoute"));
const deviceRoute_1 = __importDefault(require("../Routes/deviceRoute"));
const appHttp = (app) => {
    app
        .use(express_1.default.json())
        .use((0, cors_1.default)())
        .use((0, morgan_1.default)("dev")) // middleware Configuration
        .use("/api", userRoute_1.default)
        .use("/api", deviceRoute_1.default)
        .all("*", (req, res, next) => {
        res.status(404).json({
            message: `This route ${req.originalUrl} NotFound `,
        });
    });
    // error handlers: note: it should be the last in your app
};
exports.appHttp = appHttp;
