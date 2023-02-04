import express, { Request, Response } from "express";
import schema from "../Model/deviceSchema";
import UserSchema from "../Model/User.schema";

// get all device
export const getAllDevice = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getAll = await schema.find();
    return res.status(200).json({
      length: `${getAll.length} users(s)`,
      message: "Sucessfully gotten all Data",
      data: getAll,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in getAllDevice",
      error: error,
    });
  }
};

export const postDevice = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getUserID = await UserSchema.findById(req.params.id).populate([
      {
        path: "email",
      },
    ]);
    const {
      ticketNumber,
      lostCard,
      deviceType,
      numberOfDeviceBrought,
      collected,
      position,
      userID,
    } = req.body;

    const post = await schema.create({
      ticketNumber: ticketNumber.toUpperCase(),
      lostCard: false,
      deviceType,
      numberOfDeviceBrought: numberOfDeviceBrought ? numberOfDeviceBrought : "",
      collected: false,
      position,
      userID: getUserID?._id,
      pORb: ticketNumber.charAt(0).toUpperCase(),
    });

    return res.status(200).json({
      message: "successfully post device",
      data: post,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({
      message: "An error occured in postDevice",
      error: error.message,
    });
  }
};

export const deleteAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const deleteAllDevice = await schema.deleteMany();
    return res.status(200).json({
      message: "Delete All Device",
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in deleteAll",
      error: error,
    });
  }
};

export const updateDevice = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      ticketNumber,
      numberOfDeviceBrought,
      deviceType,
      lostCard,
      collected,
      position,
    } = req.body;

    const upDate = await schema.findByIdAndUpdate(
      req.params.id,
      {
        ticketNumber,
        numberOfDeviceBrought,
        deviceType,
        lostCard,
        position,
        collected,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Successfully updated" + req.params.id,
      data: upDate,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in updateDevice",
      error: error,
    });
  }
};

export const getOneDevice = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getOne = await schema.findById(req.params.id);
    return res.status(200).json({
      message: "successfully gotten id" + req.params.id,
      data: getOne,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in getOneDevice",
      error: error,
    });
  }
};

export const getAll_P_or_B = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const get = await schema.find(req.query);
    return res.status(200).json({
      message: "Successfully gotten" + req.query,
      data: get,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in getAll_P_or_B",
      error: error,
    });
  }
};
