import React from 'react';
import ScoreBreakdown from './ScoreBreakdown';
import Recommendations from './Recommendations';
import './Results.css';

const ResultsPage = ({ result }) => {
    if (!result) {
        return <p>Loading results...</p>;
    }

    const { primaryStyle, recommendationText, detailedScores } = result;

    return (
        <div className="results-container">
            <h2>Assessment Complete!</h2>
            <p className="subtitle">Here is your preliminary learning style analysis.</p>
            
            <Recommendations 
                primaryStyle={primaryStyle}
                recommendationText={recommendationText} 
            />
            
            <ScoreBreakdown scores={detailedScores} />

        </div>
    );
};

export default ResultsPage;