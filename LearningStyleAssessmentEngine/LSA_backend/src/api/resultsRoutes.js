/**
 * API Routes for submitting and processing assessment results
 */
const express = require('express');
const router = express.Router();

// Import scoring logic, recommendation engine, and the new database service
const { scoreVark } = require('../../components/vark/scoring');
const { scoreProgrammingScenarios } = require('../../components/programming-scenarios/scoring');
const { scoreLearningPreferences } = require('../../components/learning-preferences/scoring');
const { scoreInteractiveExercises } = require('../../components/interactive-exercises/scoring');
const { processBackground } = require('../../components/background/scoring');
const { generateRecommendation } = require('../../utils/recommendationEngine');
const db = require('../services/databaseService'); // Import the database service

// Import question data for context
const learningPreferenceQuestions = require('../../components/learning-preferences/questions');
const interactiveExercises = require('../../components/interactive-exercises/exercises');

// @route   POST api/results/submit
// @desc    Submit all assessment answers, get recommendation, and save the result
// @access  Public
router.post('/submit', async (req, res) => {
    const { vark, scenarios, preferences, interactive, background, userId } = req.body;

    if (!vark || !scenarios || !preferences || !interactive || !background) {
        return res.status(400).json({ msg: 'Incomplete assessment data. All five sections are required.' });
    }

    try {
        // Score each component
        const varkScores = scoreVark(vark);
        const scenarioScores = scoreProgrammingScenarios(scenarios);
        const preferenceScores = scoreLearningPreferences(preferences, learningPreferenceQuestions);
        const interactiveScores = scoreInteractiveExercises(interactive, interactiveExercises);
        const backgroundProfile = processBackground(background);

        // Generate the preliminary recommendation
        const recommendation = generateRecommendation(varkScores, scenarioScores, interactiveScores, preferenceScores);

        // Assemble the complete result object
        const finalResult = {
            userId: userId || 'anonymous',
            submittedAt: new Date().toISOString(),
            ...recommendation,
            detailedScores: { vark: varkScores, scenarios: scenarioScores, interactive: interactiveScores, preferences: preferenceScores },
            backgroundProfile: backgroundProfile,
            rawAnswers: req.body
        };

        // --- Save the result using the Database Service ---
        const savedRecord = await db.saveResult(finalResult);
        console.log(`Result saved with ID: ${savedRecord.id}`);

        // Return the saved record to the client (which now includes a database ID)
        res.status(201).json(savedRecord);

    } catch (error) {
        console.error('Error processing assessment results:', error);
        res.status(500).json({ msg: 'A server error occurred while processing the assessment.' });
    }
});

// @route   GET api/results
// @desc    Get all saved assessment results
// @access  Public (for demonstration; should be protected in production)
router.get('/', async (req, res) => {
    try {
        const allResults = await db.getAllResults();
        res.status(200).json(allResults);
    } catch (error) {
        console.error('Error retrieving all results:', error);
        res.status(500).json({ msg: 'Server error while retrieving results.' });
    }
});

// @route   GET api/results/:id
// @desc    Get a single assessment result by its ID
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const result = await db.getResultById(req.params.id);
        if (!result) {
            return res.status(404).json({ msg: 'Result not found.' });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error(`Error retrieving result with id ${req.params.id}:`, error);
        res.status(500).json({ msg: 'Server error while retrieving result.' });
    }
});

module.exports = router;