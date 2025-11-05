/**
 * Learning Preferences Scoring Logic
 *
 * This function processes the Likert scale answers. It doesn't "score" in a traditional
 * sense but aggregates the responses by category to identify strong preferences.
 */
const scoreLearningPreferences = (answers, questions) => {
    const preferences = {};

    // Initialize categories from questions
    questions.forEach(q => {
        if (!preferences[q.category]) {
            preferences[q.category] = { total: 0, count: 0 };
        }
    });

    answers.forEach(ans => {
        const question = questions.find(q => q.id === ans.questionId);
        if (question && preferences[question.category]) {
            preferences[question.category].total += ans.answer; // answer is the Likert score (1-5)
            preferences[question.category].count++;
        }
    });

    // Calculate average score for each category
    const averagedPreferences = {};
    for (const category in preferences) {
        if (preferences[category].count > 0) {
            averagedPreferences[category] = preferences[category].total / preferences[category].count;
        }
    }

    return averagedPreferences;
};

module.exports = { scoreLearningPreferences };
