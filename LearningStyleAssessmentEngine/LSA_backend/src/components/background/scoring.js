/**
 * Background Questionnaire Processing Logic
 *
 * This function doesn't "score" but formats the background answers into a
 * clean, structured object for storage and later use by the ML model.
 */
const processBackground = (answers) => {
    const backgroundProfile = {};
    answers.forEach(ans => {
        // Simple key-value mapping from questionId to the answer
        backgroundProfile[ans.questionId] = ans.answer;
    });
    return backgroundProfile;
};

module.exports = { processBackground };
