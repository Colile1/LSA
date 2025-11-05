/**
 * VARK Questionnaire Content
 *
 * This file contains the questions for the VARK (Visual, Aural, Read/Write, Kinesthetic)
 * section of the learning style assessment. Each question is designed to gauge the user's
 * preferred method of learning in a programming-related context.
 */

const varkQuestions = [
    {
        id: 'VARK01',
        text: 'When you are learning a new programming language, you prefer to:',
        options: [
            { id: 'V', text: 'Watch video tutorials that show code being written and explained with diagrams.' },
            { id: 'A', text: 'Listen to a podcast or a lecture that explains the core concepts.' },
            { id: 'R', text: 'Read through the official documentation, books, or written tutorials.' },
            { id: 'K', text: 'Start with a small project and learn by writing code and experimenting immediately.' }
        ]
    },
    {
        id: 'VARK02',
        text: 'You need to understand a complex algorithm. What is the most effective way for you to learn it?',
        options: [
            { id: 'V', text: 'Look at flowcharts, diagrams, or animations that visualize how the algorithm works.' },
            { id: 'A', text: 'Have someone explain the steps of the algorithm to you verbally.' },
            { id: 'R', text: 'Read a detailed, step-by-step description of the algorithm with pseudo-code.' },
            { id: 'K', text: 'Implement the algorithm yourself in code and trace its execution with test data.' }
        ]
    },
    {
        id: 'VARK03',
        text: 'You are stuck on a difficult bug in your code. Your first instinct is to:',
        options: [
            { id: 'V', text: 'Use a visual debugger to step through the code and inspect variables.' },
            { id: 'A', text: 'Talk through the problem with a colleague or a rubber duck.' },
            { id: 'R', text: 'Read the error messages carefully and search for similar issues online.' },
            { id: 'K', text: 'Try changing different parts of the code to see how it affects the outcome.' }
        ]
    },
    {
        id: 'VARK04',
        text: 'When you want to learn how to use a new software library or framework, you are most likely to:',
        options: [
            { id: 'V', text: 'Find a video that demonstrates its main features.' },
            { id: 'A', text: 'Join a webinar or online talk about the framework.' },
            { id: 'R', text: 'Read the "Getting Started" guide and API documentation.' },
            { id: 'K', text: 'Download it and run the example projects to see how they work.' }
        ]
    },
    {
        id: 'VARK05',
        text: 'How do you prefer to receive feedback on your code?',
        options: [
            { id: 'V', text: 'With visual annotations (e.g., comments directly on a screenshot of the code).' },
            { id: 'A', text: 'In a verbal conversation, either in person or over a call.' },
            { id: 'R', text: 'As a written code review with detailed comments and suggestions.' },
            { id: 'K', text: 'By pair programming with someone who can guide you as you make the changes.' }
        ]
    },
    {
        id: 'VARK06',
        text: 'You are planning the architecture for a new application. What is your preferred method?',
        options: [
            { id: 'V', text: 'Draw diagrams and charts to map out the components and data flow.' },
            { id: 'A', text: 'Discuss the architecture with your team in a brainstorming session.' },
            { id: 'R', text: 'Write a detailed design document outlining the architecture.' },
            { id: 'K', text: 'Build a small, working prototype to test the architectural ideas.' }
        ]
    },
    {
        id: 'VARK07',
        text: 'When you attend a tech conference, which part do you usually find most valuable?',
        options: [
            { id: 'V', text: 'The slide decks and visual presentations from the talks.' },
            { id: 'A', text: 'The live talks and Q&A sessions with the speakers.' },
            { id: 'R', text: 'The papers, articles, or blog posts published after the conference.' },
            { id: 'K', text: 'The hands-on workshops and live coding sessions.' }
        ]
    },
    {
        id: 'VARK08',
        text: 'You need to remember the syntax for a specific command or function. What do you do?',
        options: [
            { id: 'V', text: 'Picture the code in your head or look at a color-coded cheat sheet.' },
            { id: 'A', text: 'Say the command out loud to yourself or ask a voice assistant.' },
            { id: 'R', text: 'Write it down or look it up in your notes or documentation.' },
            { id: 'K', text: 'Just start typing it; your muscle memory for coding will kick in.' }
        ]
    },
    {
        id: 'VARK09',
        text: 'When working with a team, you contribute best by:',
        options: [
            { id: 'V', text: 'Creating mockups, wireframes, or presentations to share your ideas.' },
            { id: 'A', text: 'Leading discussions and explaining concepts to the team.' },
            { id: 'R', text: 'Writing clear documentation, specifications, or reports.' },
            { id: 'K', text: 'Taking on practical tasks and building parts of the system.' }
        ]
    },
    {
        id: 'VARK10',
        text: 'How do you best understand the relationship between different files and modules in a large project?',
        options: [
            { id: 'V', text: 'By looking at a dependency graph or a UML diagram.' },
            { id:
 'A', text: 'By having someone walk you through the codebase and explain the connections.' },
            { id: 'R', text: 'By reading the project\'s README and architectural overview documents.' },
            { id: 'K', text: 'By navigating through the code yourself, jumping from file to file to trace connections.' }
        ]
    },
    {
        id: 'VARK11',
        text: 'You are reviewing a pull request from a teammate. You are most likely to focus on:',
        options: [
            { id: 'V', text: 'The overall structure and whether the changes look clean and organized.' },
            { id: 'A', text: 'Scheduling a quick call to discuss the changes and their reasoning.' },
            { id: 'R', text: 'Reading every line of code and leaving detailed written comments.' },
            { id: 'K', text: 'Pulling the branch down to your local machine to run and test the changes yourself.' }
        ]
    },
    {
        id: 'VARK12',
        text: 'What kind of programming content do you enjoy the most?',
        options: [
            { id: 'V', text: 'Live coding streams on platforms like Twitch or YouTube with lots of on-screen action.' },
            { id: 'A', text: 'Interviews with famous developers or podcasts about the tech industry.' },
            { id: 'R', text: 'In-depth blog posts that analyze a specific technology or trend.' },
            { id: 'K', text: 'Coding challenges and competitions on platforms like HackerRank or LeetCode.' }
        ]
    },
    {
        id: 'VARK13',
        text: 'When you are setting up a new development environment, you:',
        options: [
            { id: 'V', text: 'Follow a video guide that shows each step visually.' },
            { id: 'A', text: 'Have a friend or colleague guide you through the process over a voice call.' },
            { id: 'R', text: 'Follow a written, step-by-step tutorial or setup script.' },
            { id: 'K', text: 'Dive right in, installing tools and fixing issues as they appear.' }
        ]
    },
    {
        id: 'VARK14',
        text: 'You want to explain a technical concept to someone who is not a programmer. You would:',
        options: [
            { id: 'V', text: 'Draw a simple diagram or analogy to illustrate the concept.' },
            { id: 'A', text: 'Explain it to them using simple, spoken language and analogies.' },
            { id: 'R', text: 'Write a short, clear email or document explaining the key points.' },
            { id: 'K', text: 'Show them a real-world example of the concept in action.' }
        ]
    },
    {
        id: 'VARK15',
        text: 'When choosing a new technology to learn, what influences your decision the most?',
        options: [
            { id: 'V', text: 'Seeing impressive demos and visual examples of what it can do.' },
            { id: 'A', text: 'Hearing a lot of buzz and positive discussion about it in the community.' },
            { id: 'R', text: 'Reading articles that compare it to other technologies and highlight its benefits.' },
            { id: 'K', text: 'Finding out that it is used in a project you find interesting and want to contribute to.' }
        ]
    },
    {
        id: 'VARK16',
        text: 'After a long coding session, how do you best consolidate what you have learned?',
        options: [
            { id: 'V', text: 'Reviewing your code and visualizing its structure.' },
            { id: 'A', text: 'Explaining what you did and what you learned to someone else.' },
            { id: 'R', text: 'Writing personal notes, a blog post, or documentation about your work.' },
            { id: 'K', text: 'Refactoring your code or applying the same concepts to a different small problem.' }
        ]
    }
];

module.exports = varkQuestions;
