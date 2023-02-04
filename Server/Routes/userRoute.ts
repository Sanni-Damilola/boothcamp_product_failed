import { Router } from "express";
import { deleteAllUser, getAllUser, login, register } from "../Controller/userController";

const userRoute = Router();

userRoute.route("/register").post(register);
userRoute.route("/deleteallUser").delete(deleteAllUser);
userRoute.route("/login").post(login);
userRoute.route("/getallUser").get(getAllUser);

export default userRoute;
