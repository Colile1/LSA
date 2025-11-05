/**
 * API Routes for submitting and processing assessment results
 */
const express = require('express');
const router = express.Router();

// Import all scoring functions and the recommendation engine
const { scoreVark } = require('../../components/vark/scoring');
const { scoreProgrammingScenarios } = require('../../components/programming-scenarios/scoring');
const { scoreLearningPreferences } = require('../../components/learning-preferences/scoring');
const { scoreInteractiveExercises } = require('../../components/interactive-exercises/scoring');
const { processBackground } = require('../../components/background/scoring');
const { generateRecommendation } = require('../../utils/recommendationEngine');

// Import question data needed for context in scoring
const learningPreferenceQuestions = require('../../components/learning-preferences/questions');
const interactiveExercises = require('../../components/interactive-exercises/exercises');

// @route   POST api/results/submit
// @desc    Submit all assessment answers and get a preliminary recommendation
// @access  Public
router.post('/submit', (req, res) => {
    const { vark, scenarios, preferences, interactive, background, userId } = req.body;

    // Validate that all parts of the assessment are present
    if (!vark || !scenarios || !preferences || !interactive || !background) {
        return res.status(400).json({ msg: 'Incomplete assessment data. All five sections are required.' });
    }

    try {
        // --- 1. Score each component ---
        const varkScores = scoreVark(vark);
        const scenarioScores = scoreProgrammingScenarios(scenarios);
        const preferenceScores = scoreLearningPreferences(preferences, learningPreferenceQuestions);
        const interactiveScores = scoreInteractiveExercises(interactive, interactiveExercises);
        const backgroundProfile = processBackground(background);

        // --- 2. Generate the preliminary recommendation using the combined scores ---
        const recommendation = generateRecommendation(varkScores, scenarioScores, interactiveScores, preferenceScores);

        // --- 3. Assemble the complete result object ---
        const finalResult = {
            userId: userId || 'anonymous',
            submittedAt: new Date().toISOString(),
            ...recommendation, // Includes primaryStyle, finalScores, and recommendationText
            detailedScores: {
                vark: varkScores,
                scenarios: scenarioScores,
                interactive: interactiveScores,
                preferences: preferenceScores
            },
            backgroundProfile: backgroundProfile,
            rawAnswers: req.body // Store the raw answers for potential re-analysis
        };

        // --- 4. For now, we just log the result. Later, this will save to a database. ---
        console.log('--- New Assessment Result ---');
        console.log(JSON.stringify(finalResult, null, 2));
        console.log('-----------------------------');

        // --- 5. Return the final result to the client ---
        res.status(200).json(finalResult);

    } catch (error) {
        console.error('Error processing assessment results:', error);
        res.status(500).json({ msg: 'A server error occurred while processing the assessment.' });
    }
});

module.exports = router;
