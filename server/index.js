import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { SendData } from "./route.js";
import router from "./routes.js";

import cors from "cors";
const app = express();

const Connection = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      "mongodb+srv://salman:1234@kiwify.2drnnye.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("database connected");
  } catch (error) {
    console.log("database is not connected");
  }
};

Connection();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.listen("8000", () => {
  console.log("app is running on 8000");
});

SendData();
