import mongoose from "mongoose";
import { Device } from "../Interface/interface";

interface Idata extends Device, mongoose.Document {}

const deviceSchema = new mongoose.Schema(
  {
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
    position: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Idata>("DeviceSchema", deviceSchema);
