/**
 * Interactive Learning Exercises Content
 *
 * This file defines the structure for a series of interactive exercises.
 * Unlike simple multiple-choice questions, these tasks present a scenario and
 * a set of choices that represent different paths a user might take to solve
 * a problem. The user's choices are recorded as behavioral data.
 *
 * Each choice is associated with a learning/problem-solving style (e.g., 'Visual',
 * 'Research', 'Experimental', 'Collaborative').
 */

const interactiveExercises = [
    {
        id: 'INT01',
        type: 'path-choice',
        title: 'Debugging a Failing Test',
        scenario: 'You have written a new function, but the unit test for it is failing. You are not sure why. What is your first action?',
        paths: [
            { id: 'path-a', style: 'Visual', text: 'Add a breakpoint and run the test in a visual debugger to step through the code.' },
            { id: 'path-b', style: 'Research', text: 'Read the test assertion and error message carefully, then review your function\'s logic.' },
            { id: 'path-c', style: 'Experimental', text: 'Add several `console.log` statements inside the function to trace the values of key variables.' }
        ]
    },
    {
        id: 'INT02',
        type: 'path-choice',
        title: 'Learning a New Library',
        scenario: 'You need to use a new data visualization library for your project. How do you start?',
        paths: [
            { id: 'path-a', style: 'Experimental', text: 'Find the simplest "getting started" code example, copy it into your project, and try to make it run.' },
            { id: 'path-b', style: 'Visual', text: 'Go to the library’s official website and look for a gallery of examples to see what’s possible.' },
            { id: 'path-c', style: 'Research', text: 'Read the core concepts and API documentation to understand how the library is structured.' }
        ]
    },
    {
        id: 'INT03',
        type: 'path-choice',
        title: 'Understanding a Code Snippet',
        scenario: 'You find a complex-looking code snippet on Stack Overflow that might solve your problem. What do you do?',
        paths: [
            { id: 'path-a', style: 'Research', text: 'Read the explanation and comments around the code snippet to understand how it works before using it.' },
            { id: 'path-b', style: 'Experimental', text: 'Copy the code into your project, run it, and see if it works as expected.' },
            { id: 'path-c', style: 'Collaborative', text: 'Share the snippet with a teammate and ask if they think it\'s a good solution.' }
        ]
    },
    {
        id: 'INT04',
        type: 'path-choice',
        title: 'Optimizing a Slow Function',
        scenario: 'You\'ve identified a function that is making your application slow. How do you approach optimizing it?',
        paths: [
            { id: 'path-a', style: 'Visual', text: 'Use a profiling tool to generate a flame graph, which visually highlights the slowest parts of the function.' },
            { id: 'path-b', style: 'Experimental', text: 'Make an educated guess about the bottleneck, apply a change, and measure the performance before and after.' },
            { id: 'path-c', style: 'Research', text: 'Research common optimization techniques for the language and framework you are using.' }
        ]
    },
    {
        id: 'INT05',
        type: 'path-choice',
        title: 'Starting a New Project',
        scenario: 'You are about to start a brand new personal project from scratch. What is your very first step?',
        paths: [
            { id: 'path-a', style: 'Visual', text: 'Create a mind map or a series of diagrams to plan out the features and architecture.' },
            { id: 'path-b', style: 'Research', text: 'Write a detailed project specification and a list of all the features you want to include.' },
            { id: 'path-c', style: 'Experimental', text: 'Set up the basic file structure and write a "Hello World" to make sure the foundation is working.' }
        ]
    }
];

module.exports = interactiveExercises;
