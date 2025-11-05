/**
 * Frontend API Service
 *
 * This service centralizes all communication with the backend API. It uses axios
 * for making HTTP requests. Centralizing the API logic makes the application
 * easier to maintain, as all endpoints are defined in one place.
 */

import axios from 'axios';

// Create an axios instance with a predefined base URL.
// This makes it easy to change the API endpoint for development vs. production.
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// --- Assessment Question Services ---

/**
 * Fetches the questions for the VARK section of the assessment.
 * @returns {Promise<Object>} A promise that resolves with the question data.
 */
const getVarkQuestions = () => {
    return apiClient.get('/assessment/vark');
};

/**
 * Fetches the questions for the Programming Scenarios section.
 * @returns {Promise<Object>} A promise that resolves with the question data.
 */
const getScenarioQuestions = () => {
    return apiClient.get('/assessment/scenarios');
};

/**
 * Fetches the questions for the Learning Preferences survey.
 * @returns {Promise<Object>} A promise that resolves with the question data.
 */
const getPreferenceQuestions = () => {
    return apiClient.get('/assessment/preferences');
};

/**
 * Fetches the exercises for the Interactive section.
 * @returns {Promise<Object>} A promise that resolves with the exercise data.
 */
const getInteractiveExercises = () => {
    return apiClient.get('/assessment/interactive');
};

/**
 * Fetches the questions for the Background section.
 * @returns {Promise<Object>} A promise that resolves with the question data.
 */
const getBackgroundQuestions = () => {
    return apiClient.get('/assessment/background');
};


// --- Results Services ---

/**
 * Submits the complete set of answers to the backend for processing.
 * @param {Object} allAnswers - An object containing the answers for all 5 sections.
 * @returns {Promise<Object>} A promise that resolves with the final assessment result.
 */
const submitResults = (allAnswers) => {
    return apiClient.post('/results/submit', allAnswers);
};


// --- ML Proxy Service ---

/**
 * Forwards the final assessment result to the ML module for advanced analysis.
 * @param {Object} finalResult - The final result object received from the /submit endpoint.
 * @returns {Promise<Object>} A promise that resolves with the advanced recommendations.
 */
const getAdvancedRecommendations = (finalResult) => {
    return apiClient.post('/ml/analyze', { finalResult });
};


// Export all functions so they can be used throughout the application
const apiService = {
    getVarkQuestions,
    getScenarioQuestions,
    getPreferenceQuestions,
    getInteractiveExercises,
    getBackgroundQuestions,
    submitResults,
    getAdvancedRecommendations
};

export default apiService;