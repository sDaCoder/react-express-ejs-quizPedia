const displayQuestions = (req, res) => {
    const questions = req.questions;
    const { category } = req.params;
    res.status(200).render("index", { questions, category });
}

const postAnswers = (req, res) => {
    const { category } = req.params;
    const answered = req.body.answered;
    const questions = req.questions;
    
    res.status(200).render("result", {category, questions, answered});
}

export default { displayQuestions, postAnswers };