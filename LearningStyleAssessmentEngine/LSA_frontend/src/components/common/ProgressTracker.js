import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ currentSection, totalSections }) => {
    return (
        <div className="progress-container">
            <p>Section {currentSection} of {totalSections}</p>
            <div className="progress-bar-background">
                <div 
                    className="progress-bar-foreground" 
                    style={{ width: `${(currentSection / totalSections) * 100}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressTracker;