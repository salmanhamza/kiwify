import { modules } from "./data.js";
import Module from "./model/schema.js";

export const SendData = async () => {
  try {
    await Module.insertMany(modules);
    console.log("data has been inserted");
  } catch (error) {
    console.log(error.message);
    console.log("not inserting");
  }
};

export const getData = async (request, response) => {
  try {
    let modules = await Module.find({});
    console.log(modules);
    return response.status(200).json(modules);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
