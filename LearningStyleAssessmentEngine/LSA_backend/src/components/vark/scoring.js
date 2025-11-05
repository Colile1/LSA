/**
 * VARK Scoring Logic
 *
 * This function calculates the total score for each VARK category based on user answers.
 */
const scoreVark = (answers) => {
    const scores = { V: 0, A: 0, R: 0, K: 0 };

    answers.forEach(answer => {
        // answer is expected to be an object like { questionId: 'VARK01', answer: 'V' }
        if (scores.hasOwnProperty(answer.answer)) {
            scores[answer.answer]++;
        }
    });

    return scores;
};

module.exports = { scoreVark };
