import React from 'react';
import './Results.css';

const ScoreBreakdown = ({ scores }) => {
    // Normalize scores to percentages for the bar chart
    const calculatePercentage = (scoreObject) => {
        const total = Object.values(scoreObject).reduce((sum, val) => sum + val, 0);
        if (total === 0) return {};
        const percentages = {};
        for (const key in scoreObject) {
            percentages[key] = (scoreObject[key] / total) * 100;
        }
        return percentages;
    };

    const varkPercentages = calculatePercentage(scores.vark);

    return (
        <div className="result-card">
            <h3>VARK Score Breakdown</h3>
            <div className="chart">
                {Object.entries(varkPercentages).map(([key, value]) => (
                    <div className="bar-container" key={key}>
                        <div className="bar-label">{key}</div>
                        <div className="bar">
                            <div className="bar-fill" style={{ width: `${value}%` }}>
                                {Math.round(value)}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScoreBreakdown;