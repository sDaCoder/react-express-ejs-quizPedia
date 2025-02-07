import mongoose from "mongoose";
import dotenv from 'dotenv';
import dataModel from '../models/question-model.js';

dotenv.config({ path: './secret.env' });
const mongoURI = process.env.MONGO_URI;
const General = dataModel.General;
const WorldHistory = dataModel.WorldHistory;


const getQuestions = async (req, _, next) => {
    try {
        await mongoose.connect(mongoURI);
        const data = await WorldHistory.find({});
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