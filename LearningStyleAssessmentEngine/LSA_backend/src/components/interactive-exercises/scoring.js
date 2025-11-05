/**
 * Interactive Exercises Scoring Logic
 *
 * This function calculates the total score for each behavioral style
 * based on the paths the user chose in the interactive exercises.
 */
const scoreInteractiveExercises = (answers, exercises) => {
    const scores = {
        Visual: 0,
        Research: 0,
        Experimental: 0,
        Collaborative: 0
    };

    answers.forEach(ans => {
        const exercise = exercises.find(ex => ex.id === ans.questionId);
        if (exercise) {
            const chosenPath = exercise.paths.find(p => p.id === ans.answer);
            if (chosenPath && scores.hasOwnProperty(chosenPath.style)) {
                scores[chosenPath.style]++;
            }
        }
    });

    return scores;
};

module.exports = { scoreInteractiveExercises };
