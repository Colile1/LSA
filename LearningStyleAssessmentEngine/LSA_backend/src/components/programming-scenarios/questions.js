/**
 * Programming Scenario Test Content
 *
 * This file contains scenario-based questions to assess learning preferences
 * in specific, realistic programming contexts. The options often map to different
 * problem-solving styles, such as visual/debugging, collaborative/social,
 * research-oriented, or experimental/hands-on.
 */

const programmingScenarioQuestions = [
    {
        id: 'PROG01',
        text: 'You have to build a new feature that you have never worked on before. What is your first step?',
        options: [
            { id: 'Research', text: 'Spend a few hours reading articles and documentation to understand the best practices.' },
            { id: 'Experimental', text: 'Start with a "Hello, World!" version of the feature to get something working quickly.' },
            { id: 'Collaborative', text: 'Schedule a meeting with a senior developer to discuss the best approach.' },
            { id: 'Visual', text: 'Map out the required components and user flow on a whiteboard or in a diagramming tool.' }
        ]
    },
    {
        id: 'PROG02',
        text: 'You are faced with a legacy codebase that is poorly documented. How do you approach understanding it?',
        options: [
            { id: 'Experimental', text: 'Start making small, safe changes to see how the system reacts and what breaks.' },
            { id: 'Visual', text: 'Use a tool to generate a class diagram or a dependency graph to visualize the structure.' },
            { id: 'Collaborative', text: 'Find the original developers or long-time maintainers and ask them to explain the code.' },
            { id: 'Research', text: 'Begin by adding your own documentation and comments as you read through the code.' }
        ]
    },
    {
        id: 'PROG03',
        text: 'Your application has a critical performance bottleneck. How do you diagnose the problem?',
        options: [
            { id: 'Visual', text: 'Use a profiler to generate performance graphs and flame charts to identify the slow functions.' },
            { id: 'Research', text: 'Research common performance issues related to the technologies you are using.' },
            { id: 'Experimental', text: 'Form a hypothesis, make a change to the code, and then measure the performance impact.' },
            { id: 'Collaborative', text: 'Ask a performance expert on your team to review your code and offer suggestions.' }
        ]
    },
    {
        id: 'PROG04',
        text: 'You need to choose between two different libraries for a new project. How do you decide?',
        options: [
            { id: 'Research', text: 'Read comparison articles, GitHub issues, and the documentation for both libraries.' },
            { id: 'Collaborative', text: 'Ask for opinions and experiences from other developers in your professional network or online communities.' },
            { id: 'Experimental', text: 'Build a small proof-of-concept with each library to see which one feels better to work with.' },
            { id: 'Visual', text: 'Look for showcase projects or demos that use each library to see the final result.' }
        ]
    },
    {
        id: 'PROG05',
        text: 'A user reports a bug that you cannot reproduce on your own machine. What do you do first?',
        options: [
            { id: 'Collaborative', text: 'Schedule a call with the user to have them demonstrate the bug for you.' },
            { id: 'Research', text: 'Ask the user for detailed logs, error messages, and exact steps to reproduce the issue.' },
            { id: 'Experimental', text: 'Try to replicate the user\'s environment (e.g., browser, OS) as closely as possible.' },
            { id: 'Visual', text: 'Ask the user for a screenshot or a screen recording of the bug occurring.' }
        ]
    },
    {
        id: 'PROG06',
        text: 'You are learning about asynchronous programming for the first time. Which resource would be most helpful?',
        options: [
            { id: 'Visual', text: 'An interactive animation that visualizes the event loop and callback queue.' },
            { id: 'Experimental', text: 'A set of coding exercises that require you to write and debug asynchronous code.' },
            { id: 'Research', text: 'A well-written tutorial that explains the theory behind asynchronous operations.' },
            { id: 'Collaborative', text: 'A mentor walking you through a real-world example in a shared coding session.' }
        ]
    },
    {
        id: 'PROG07',
        text: 'You have been assigned to refactor a large, complex function. What is your strategy?',
        options: [
            { id: 'Research', text: 'First, write a set of unit tests to ensure you don\'t change the function\'s behavior.' },
            { id: 'Visual', text: 'Draw a flowchart of the function\'s logic to identify areas that can be simplified.' },
            { id: 'Experimental', text: 'Start by breaking down the function into smaller, private helper methods.' },
            { id: 'Collaborative', text: 'Discuss the function with a teammate to get a second opinion before you start.' }
        ]
    },
    {
        id: 'PROG08',
        text: 'When you are learning a new API, you feel most confident after you have:',
        options: [
            { id: 'Experimental', text: 'Successfully made a few different API calls and received the data you expected.' },
            { id: 'Research', text: 'Read through the entire API documentation, including all endpoints and data models.' },
            { id: 'Visual', text: 'Used a tool like Postman or Insomnia to visually explore the API endpoints.' },
            { id: 'Collaborative', text: 'Seen how a more experienced developer uses the API in an existing project.' }
        ]
    }
];

module.exports = programmingScenarioQuestions;
