/**
 * Preliminary Recommendation Engine
 *
 * This engine calculates the primary learning style based on weighted scores
 * from different assessment components and generates a preliminary recommendation.
 */

// Define weights for each assessment component
const weights = {
    vark: 0.40, // VARK is a strong indicator
    scenario: 0.30, // Scenarios show applied preference
    interactive: 0.30, // Interactive choices show behavioral preference
};

// Map component styles to a common VARK-style model
const styleMap = {
    Visual: 'V',
    Research: 'R',
    Experimental: 'K',
    Collaborative: 'A'
};

const generateRecommendation = (varkScores, scenarioScores, interactiveScores, preferenceScores) => {
    const finalScores = { V: 0, A: 0, R: 0, K: 0 };

    // 1. Calculate weighted score for VARK
    for (const style in varkScores) {
        finalScores[style] += varkScores[style] * weights.vark;
    }

    // 2. Map and calculate weighted score for Programming Scenarios
    for (const style in scenarioScores) {
        const mappedStyle = styleMap[style];
        if (mappedStyle) {
            finalScores[mappedStyle] += scenarioScores[style] * weights.scenario;
        }
    }

    // 3. Map and calculate weighted score for Interactive Exercises
    for (const style in interactiveScores) {
        const mappedStyle = styleMap[style];
        if (mappedStyle) {
            finalScores[mappedStyle] += interactiveScores[style] * weights.interactive;
        }
    }

    // 4. Determine the primary learning style
    let primaryStyle = 'Multimodal';
    let maxScore = -1;
    for (const style in finalScores) {
        if (finalScores[style] > maxScore) {
            maxScore = finalScores[style];
            primaryStyle = style;
        }
    }

    const styleDetails = {
        V: { name: 'Visual', description: 'You learn best from seeing information through diagrams, charts, and videos.' },
        A: { name: 'Aural/Auditory', description: 'You learn best from hearing information, through lectures, discussions, and podcasts.' },
        R: { name: 'Read/Write', description: 'You learn best from reading text, writing notes, and interacting with written information.' },
        K: { name: 'Kinesthetic', description: 'You learn best by doing, through hands-on practice, experiments, and real-world examples.' }
    };

    // 5. Generate recommendation text
    let recommendationText = `Your preliminary analysis suggests your primary learning style is **${styleDetails[primaryStyle].name}**. ${styleDetails[primaryStyle].description}`;

    // 6. Add nuance from preference survey
    if (preferenceScores.Practice > 3.5) {
        recommendationText += " You have a strong preference for hands-on projects.";
    }
    if (preferenceScores.Theory > 3.5) {
        recommendationText += " You also value understanding the underlying theory before diving in.";
    }
    if (preferenceScores.Collaboration > 3.5) {
        recommendationText += " You seem to be motivated by learning with others.";
    }

    return {
        primaryStyle: styleDetails[primaryStyle].name,
        finalScores,
        recommendationText
    };
};

module.exports = { generateRecommendation };
