const express = require('express');

const questionController = require('../controllers/questionController');

const router = express.Router();

router
  .route('/')
  .get(questionController.getAllQuestions)
  .post(
    questionController.uploadQuestionImage,
    questionController.createQuestion
  );

router
  .route('/:id')
  .get(questionController.getQuestion)
  .delete(questionController.deleteQuestion);

module.exports = router;
