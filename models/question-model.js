import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], },
  correct: { type: String, required: true }
}, { collection: "general", strict: false });

const General = mongoose.model('General', questionSchema);

export default {General};