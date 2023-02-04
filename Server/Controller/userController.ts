import { Request, Response } from "express";
import UserSchema from "../Model/User.schema";
import bcrypt from "bcrypt";

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password, name } = req.body;
    const salt: string = await bcrypt.genSalt(10);
    const hash: string = await bcrypt.hash(password, salt);
    const createUser = await UserSchema.create({ email, password: hash, name });
    return res.status(200).json({
      message: "successfully Posted",
      data: createUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error register",
      error: error,
    });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email } = req.body;
    const getUser = await UserSchema.findOne({ email });
    if (!getUser) {
      return res.status(400).json({
        message: "User Not Found",
      });
    }

    return res.status(200).json({
      message: `welcome ${getUser.name}`,
      data: getUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error in login",
      error: error,
    });
  }
};

export const deleteAllUser = async (req: Request, res: Response) => {
  const deletAllUser = await UserSchema.deleteMany();
  return res.status(200).json({
    message: "Deleted All User",
  });
};

export const getAllUser = async (req: Request, res: Response) => {
  const getAllUser = await UserSchema.find();
  return res.status(200).json({
    message: `${getAllUser.length}`,
    data: getAllUser,
  });
};
