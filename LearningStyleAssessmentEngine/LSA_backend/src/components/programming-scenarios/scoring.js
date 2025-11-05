/**
 * Programming Scenarios Scoring Logic
 *
 * This function calculates the total score for each problem-solving style.
 */
const scoreProgrammingScenarios = (answers) => {
    const scores = {
        Research: 0,
        Experimental: 0,
        Collaborative: 0,
        Visual: 0
    };

    answers.forEach(answer => {
        if (scores.hasOwnProperty(answer.answer)) {
            scores[answer.answer]++;
        }
    });

    return scores;
};

module.exports = { scoreProgrammingScenarios };
