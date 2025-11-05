/**
 * API Routes for serving assessment questions
 */
const express = require('express');
const router = express.Router();

// Import question content
const varkQuestions = require('../../components/vark/questions');
const programmingScenarioQuestions = require('../../components/programming-scenarios/questions');
const learningPreferenceQuestions = require('../../components/learning-preferences/questions');
const interactiveExercises = require('../../components/interactive-exercises/exercises');
const backgroundQuestions = require('../../components/background/questions');

// @route   GET api/assessment/vark
// @desc    Get all VARK questionnaire questions
// @access  Public
router.get('/vark', (req, res) => {
    try {
        res.json(varkQuestions);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   GET api/assessment/scenarios
// @desc    Get all Programming Scenario Test questions
// @access  Public
router.get('/scenarios', (req, res) => {
    try {
        res.json(programmingScenarioQuestions);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   GET api/assessment/preferences
// @desc    Get all Learning Preference Survey questions
// @access  Public
router.get('/preferences', (req, res) => {
    try {
        res.json(learningPreferenceQuestions);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   GET api/assessment/interactive
// @desc    Get all Interactive Learning Exercises
// @access  Public
router.get('/interactive', (req, res) => {
    try {
        res.json(interactiveExercises);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   GET api/assessment/background
// @desc    Get all Background Questionnaire questions
// @access  Public
router.get('/background', (req, res) => {
    try {
        res.json(backgroundQuestions);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
