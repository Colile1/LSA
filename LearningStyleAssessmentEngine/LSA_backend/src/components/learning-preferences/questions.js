/**
 * Learning Preference Survey Content
 *
 * This file contains Likert scale questions to gather self-reported data on
 * users' study habits and general learning preferences. The responses help
 * to build a more nuanced profile of the learner.
 *
 * The scale is typically:
 * 1: Strongly Disagree
 * 2: Disagree
 * 3: Neutral
 * 4: Agree
 * 5: Strongly Agree
 */

const learningPreferenceQuestions = [
    {
        id: 'PREF01',
        type: 'likert',
        category: 'Pace',
        text: 'I prefer to learn at my own pace rather than following a fixed schedule.'
    },
    {
        id: 'PREF02',
        type: 'likert',
        category: 'Structure',
        text: 'I learn best when content is highly structured and presented in a linear order.'
    },
    {
        id: 'PREF03',
        type: 'likert',
        category: 'Practice',
        text: 'I believe that hands-on practice is the most effective way to learn programming.'
    },
    {
        id: 'PREF04',
        type: 'likert',
        category: 'Theory',
        text: 'I find it important to understand the theory and fundamental concepts before I start coding.'
    },
    {
        id: 'PREF05',
        type: 'likert',
        category: 'Collaboration',
        text: 'I am more motivated to learn when I am part of a group or community.'
    },
    {
        id: 'PREF06',
        type: 'likert',
        category: 'Competition',
        text: 'I enjoy competitive elements in learning, such as coding challenges or leaderboards.'
    },
    {
        id: 'PREF07',
        type: 'likert',
        category: 'Feedback',
        text: 'I prefer immediate feedback on my work, even if it is automated.'
    },
    {
        id: 'PREF08',
        type: 'likert',
        category: 'Guidance',
        text: 'I like having a clear, guided path through a course or tutorial.'
    },
    {
        id: 'PREF09',
        type: 'likert',
        category: 'Exploration',
        text: 'I enjoy exploring topics on my own and finding my own resources.'
    },
    {
        id: 'PREF10',
        type: 'likert',
        category: 'RealWorld',
        text: 'I am more engaged when I am building real-world projects rather than solving abstract problems.'
    },
    {
        id: 'PREF11',
        type: 'likert',
        category: 'Challenge',
        text: 'I learn best when I am working on problems that are just outside my current skill level.'
    },
    {
        id: 'PREF12',
        type: 'likert',
        category: 'Repetition',
        text: 'I find it helpful to review and repeat exercises to solidify my understanding.'
    }
];

module.exports = learningPreferenceQuestions;
