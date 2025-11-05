import React from 'react';
import './Results.css';

const Recommendations = ({ primaryStyle, recommendationText }) => {
    return (
        <div className="result-card recommendations">
            <h3>Your Primary Learning Style: {primaryStyle}</h3>
            <p>{recommendationText}</p>
            <h4>Next Steps:</h4>
            <ul>
                <li>Look for course materials tagged with your learning style.</li>
                <li>Explore the personalized learning path that will be generated for you.</li>
                <li>Remember, this is a preliminary analysis. A more detailed recommendation will be available on your dashboard.</li>
            </ul>
        </div>
    );
};

export default Recommendations;