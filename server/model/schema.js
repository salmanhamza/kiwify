import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  chapter: {
    type: String,
  },
});

const moduleSchema = new mongoose.Schema({
  module: {
    type: String,
    required: true,
    unique: true,
  },
  videos: {
    type: String,
  },
  chapters: [chapterSchema],
});

const Module = mongoose.model("Module", moduleSchema);

export default Module;
