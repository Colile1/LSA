/**
 * Assessment Service
 *
 * This service acts as an intermediary between the API routes and the
 * assessment content. In this initial version, it simply fetches and returns
 * the questions. In the future, it could be expanded to include more
 * complex logic, such as adaptive questioning based on user performance.
 */

// Import question content
const varkQuestions = require('../components/vark/questions');
const programmingScenarioQuestions = require('../components/programming-scenarios/questions');
const learningPreferenceQuestions = require('../components/learning-preferences/questions');
const interactiveExercises = require('../components/interactive-exercises/exercises');
const backgroundQuestions = require('../components/background/questions');

const getVarkQuestions = () => {
    return varkQuestions;
};

const getScenarioQuestions = () => {
    return programmingScenarioQuestions;
};

const getPreferenceQuestions = () => {
    return learningPreferenceQuestions;
};

const getInteractiveExercises = () => {
    return interactiveExercises;
};

const getBackgroundQuestions = () => {
    return backgroundQuestions;
};

module.exports = {
    getVarkQuestions,
    getScenarioQuestions,
    getPreferenceQuestions,
    getInteractiveExercises,
    getBackgroundQuestions
};