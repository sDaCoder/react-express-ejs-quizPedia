const displayQuestions = (req, res) => {
    const questions = req.questions;
    res.status(200).render("index", { questions });
}

const postAnswers = (req, res) => {
    const answered = req.body.answered;
    const questions = req.questions;
    
    res.status(200).render("result", {questions, answered});
}

export default { displayQuestions, postAnswers };