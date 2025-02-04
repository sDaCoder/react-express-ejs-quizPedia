import { Client, Databases } from 'appwrite';
import dotenv from 'dotenv';

dotenv.config({ path: './secret.env' });

const getQuestions = async (req, res, next) => {
  
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject(process.env.PROJECT_ID); // Project ID
    
    const databases = new Databases(client);
    
    try {
        const data = await databases.listDocuments(
            process.env.DATABASE_ID, // Database ID
            process.env.GENERAL_COLLECTION_ID, // Collection ID
        );
        const questions = data.documents.map(doc => ({
            id: doc.$id,
            question: doc.question,
            options: doc.options,
            correct: doc.correct
        }));
        req.questions = questions;
        next();
        
    } catch (err) {
        console.log('Some error occurred from Appwrite', err);
    }
}

export default {getQuestions};