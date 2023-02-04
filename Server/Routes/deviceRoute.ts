import { Router } from "express";
import {
  deleteAll,
  getAllDevice,
  getAll_P_or_B,
  getOneDevice,
  postDevice,
  updateDevice,
} from "../Controller/deviceController";

const deviceRoute = Router();

deviceRoute.route("/getall").get(getAllDevice);
deviceRoute.route("/post/:id").post(postDevice);
deviceRoute.route("/query").get(getAll_P_or_B);
deviceRoute.route("/update/:id").patch(updateDevice);
deviceRoute.route("/getone/:id").get(getOneDevice);
deviceRoute.route("/deleteall").delete(deleteAll);

export default deviceRoute;
