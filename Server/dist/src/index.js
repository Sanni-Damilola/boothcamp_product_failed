"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const App_1 = require("./App");
const Db_1 = require("../Config/Db");
const app = (0, express_1.default)();
const port = 2004 || process.env.port;
(0, Db_1.config)();
(0, App_1.appHttp)(app);
const server = app.listen(port, () => {
    console.log("Done! on port", port);
});
process.on("unhandledRejection", (reason) => {
    console.log(`unhandledRejection, server i shutting down`);
    console.log(reason.message, reason);
    server.close(() => {
        process.exit(1);
    });
});
