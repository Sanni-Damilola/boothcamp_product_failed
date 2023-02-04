import mongoose from "mongoose";

const lifeUrl =
  "mongodb+srv://sannidatabase:sannidatabase@cluster0.zh68ie9.mongodb.net/test";
const localUrl = "mongodb://localhost/dbcharge";

export const config = async () => {
  try {
    const connect = await mongoose.connect(lifeUrl);
    console.log("Connnected to ", connect.connection.host);
  } catch (error: any) {
    console.log("An error occured in Config", error.message);
    process.exit(1);
  }
};
