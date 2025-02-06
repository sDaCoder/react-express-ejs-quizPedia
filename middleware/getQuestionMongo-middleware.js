import mongoose from "mongoose";
import dotenv from 'dotenv';
import GeneralModel from '../models/question-model.js';

dotenv.config({ path: './secret.env' });
const mongoURI = process.env.MONGO_URI;
const General = GeneralModel.General;


const getQuestions = async (req, _, next) => {
    try {
        await mongoose.connect(mongoURI);
        const data = await General.find({});
        const questions = data.map(doc => ({
            id: doc.$id,
            question: doc.question,
            options: doc.options,
            correct: doc.correct
        }));
        req.questions = questions;
        next();
    } catch (error) {
        console.error("Error:", error);
        next(error);
    }
}

export default {getQuestions};