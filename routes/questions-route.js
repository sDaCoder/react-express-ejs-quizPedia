import express from 'express';
import questionsController from '../controllers/question-controller.js';
import getQuestionMiddleware from '../middleware/getQuestion-middleware.js';

const router = express.Router();

router
    .route('/')
    .get(getQuestionMiddleware.getQuestions, questionsController.displayQuestions)
    .post(getQuestionMiddleware.getQuestions, questionsController.postAnswers);

export default {router};