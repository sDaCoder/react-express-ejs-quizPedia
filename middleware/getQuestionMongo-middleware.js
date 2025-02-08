import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: './secret.env' });
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const getQuestions = async (req, _, next) => {
    const {category} = req.params;
    
    try {
        await client.connect();
        const database = client.db("questions");
        const collection = database.collection(category);

        // Fetch all documents
        const data = await collection.find({}).toArray();
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
    } finally {
        await client.close();
    }
}

export default {getQuestions};