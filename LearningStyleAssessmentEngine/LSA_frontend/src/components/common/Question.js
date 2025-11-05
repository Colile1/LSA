import React from 'react';
import './Question.css';

const Question = ({ question, onAnswer, selectedAnswer }) => {
    switch (question.type) {
        case 'likert':
            return (
                <div className="question-likert">
                    <p>{question.text}</p>
                    <div className="likert-scale">
                        <span>Strongly Disagree</span>
                        {[1, 2, 3, 4, 5].map(value => (
                            <label key={value}>
                                <input
                                    type="radio"
                                    name={question.id}
                                    value={value}
                                    checked={selectedAnswer === value}
                                    onChange={() => onAnswer(question.id, value)}
                                />
                            </label>
                        ))}
                        <span>Strongly Agree</span>
                    </div>
                </div>
            );
        case 'open-text':
             return (
                <div className="question-open-text">
                    <p>{question.text}</p>
                    <textarea
                        value={selectedAnswer || ''}
                        onChange={(e) => onAnswer(question.id, e.target.value)}
                        rows="3"
                    />
                </div>
            );
        case 'multiple-choice-multi':
            const handleMultiSelect = (option) => {
                const currentAnswers = selectedAnswer || [];
                const newAnswers = currentAnswers.includes(option)
                    ? currentAnswers.filter(item => item !== option)
                    : [...currentAnswers, option];
                onAnswer(question.id, newAnswers);
            };
            return (
                 <div className="question-multi-select">
                    <p>{question.text}</p>
                    {question.options.map(option => (
                        <label key={option} className="option-label checkbox">
                            <input
                                type="checkbox"
                                checked={(selectedAnswer || []).includes(option)}
                                onChange={() => handleMultiSelect(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            )
        // Default is multiple-choice
        default:
            return (
                <div className="question-mcq">
                    <p>{question.text}</p>
                    <div className="options-container">
                        {(question.options || []).map(option => (
                            <label key={option.id || option} className={`option-label radio ${selectedAnswer === (option.id || option) ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name={question.id}
                                    value={option.id || option}
                                    checked={selectedAnswer === (option.id || option)}
                                    onChange={() => onAnswer(question.id, option.id || option)}
                                />
                                {option.text || option}
                            </label>
                        ))}
                    </div>
                </div>
            );
    }
};

export default Question;