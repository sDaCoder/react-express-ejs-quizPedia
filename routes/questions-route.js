import express from 'express';
import questionsController from '../controllers/question-controller.js';
import getQuestionsMiddleware from '../middleware/getQuestionMongo-middleware.js';

const router = express.Router();

router
    .route('/')
    .get(getQuestionsMiddleware.getQuestions, questionsController.displayQuestions)
    .post(getQuestionsMiddleware.getQuestions, questionsController.postAnswers);

export default {router};