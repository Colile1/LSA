/**
 * Background Questionnaire Content
 *
 * This file contains questions to gather contextual information about the user.
 * This data is not typically used for the initial learning style calculation
 * but is invaluable for providing context to the ML model for deeper analysis
 * and more personalized recommendations.
 */

const backgroundQuestions = [
    {
        id: 'BG01',
        type: 'multiple-choice',
        text: 'How would you describe your current level of programming experience?',
        options: [
            'No experience at all',
            'Beginner (less than 1 year)',
            'Intermediate (1-3 years)',
            'Advanced (3-5 years)',
            'Expert (5+ years)'
        ]
    },
    {
        id: 'BG02',
        type: 'multiple-choice',
        text: 'What is your primary goal for learning to code on this platform?',
        options: [
            'To start a new career in tech',
            'To get a promotion or advance in my current career',
            'For a university or school course',
            'To build a specific personal project',
            'For a hobby or personal interest'
        ]
    },
    {
        id: 'BG03',
        type: 'multiple-choice-multi',
        text: 'Which of the following programming languages do you already have some experience with? (Select all that apply)',
        options: [
            'Python',
            'JavaScript',
            'Java',
            'C++',
            'C#',
            'Ruby',
            'PHP',
            'Swift / Objective-C',
            'None of the above'
        ]
    },
    {
        id: 'BG04',
        type: 'multiple-choice',
        text: 'How much time can you dedicate to learning each week?',
        options: [
            'Less than 2 hours',
            '2-5 hours',
            '5-10 hours',
            '10-20 hours',
            'More than 20 hours'
        ]
    },
    {
        id: 'BG05',
        type: 'multiple-choice',
        text: 'What is your current employment status?',
        options: [
            'Student',
            'Employed full-time',
            'Employed part-time',
            'Self-employed or freelancer',
            'Unemployed',
            'Prefer not to say'
        ]
    },
    {
        id: 'BG06',
        type: 'open-text',
        text: 'What specific topics or technologies are you most interested in learning about? (e.g., web development, machine learning, mobile apps)'
    }
];

module.exports = backgroundQuestions;
