import express, { Application, Request, Response } from "express";

import { appHttp } from "./App";
import { config } from "../Config/Db";

const app: Application = express();
const port: number | string = 2004 || process.env.port;

config();
appHttp(app);

const server = app.listen(port, () => {
  console.log("Done! on port", port);
});

process.on("unhandledRejection", (reason: any) => {
  console.log(`unhandledRejection, server i shutting down`);
  console.log(reason.message, reason);
  server.close(() => {
    process.exit(1);
  });
});
