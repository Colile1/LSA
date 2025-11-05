import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Question from '../common/Question';
import './AssessmentComponent.css';

const BackgroundQuestionnaire = ({ onComplete }) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await api.getBackgroundQuestions();
                setQuestions(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load questions. Please try again later.');
                setLoading(false);
            }
        };
        fetchQuestions();
    }, []);

    const handleAnswer = (questionId, answer) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
    };
    
    const handleSubmit = () => {
        // Validation: ensure all questions are answered
        if (Object.keys(answers).length !== questions.length) {
            alert('Please answer all questions before proceeding.');
            return;
        }
        
        // Format answers into the required array structure for the backend
        const formattedAnswers = Object.entries(answers).map(([questionId, answer]) => ({
            questionId,
            answer
        }));
        
        onComplete(formattedAnswers);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="assessment-component">
            <h2>Your Background</h2>
            {questions.map(q => (
                <Question 
                    key={q.id}
                    question={q}
                    onAnswer={handleAnswer}
                    selectedAnswer={answers[q.id]}
                />
            ))}
            <button onClick={handleSubmit}>Next Section</button>
        </div>
    );
};

export default BackgroundQuestionnaire;