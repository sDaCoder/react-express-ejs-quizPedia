import express from 'express';
import questionsController from '../controllers/question-controller.js';
import getQuestionsMiddleware from '../middleware/getQuestionMongo-middleware.js';

const router = express.Router();

router
    .route('/')
    .all(getQuestionsMiddleware.getQuestions)
    .get(questionsController.displayQuestions)
    .post(questionsController.postAnswers);

export default {router};