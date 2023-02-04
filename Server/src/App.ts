import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import userRoute from "../Routes/userRoute";
import deviceRoute from "../Routes/deviceRoute";

export const appHttp = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use(morgan("dev")) // middleware Configuration

    .use("/api", userRoute)
    .use("/api", deviceRoute)

    .all("*", (req: Request, res: Response, next: NextFunction) => {
      res.status(404).json({
        message: `This route ${req.originalUrl} NotFound `,
      });
    });

  // error handlers: note: it should be the last in your app
};
