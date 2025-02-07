import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], },
  correct: { type: String, required: true }
}, { collection: "general", strict: false });

const worldHistory = new mongoose.Schema({
    question: { type: String, required: true },
    options: { type: [String], },
    correct: { type: String, required: true }
}, { collection: "world-history", strict: false });

const General = mongoose.model('General', questionSchema);
const WorldHistory = mongoose.model('WorldHistory', worldHistory);

export default {General, WorldHistory};