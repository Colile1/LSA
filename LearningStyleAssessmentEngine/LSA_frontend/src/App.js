import React, { useState } from 'react';
import api from './services/api';

// Import all components
import VARKTest from './components/assessment/VARKTest';
import ProgrammingScenarioTest from './components/assessment/ProgrammingScenarioTest';
import LearningPreferenceSurvey from './components/assessment/LearningPreferenceSurvey';
import InteractiveExercise from './components/assessment/InteractiveExercise';
import BackgroundQuestionnaire from './components/assessment/BackgroundQuestionnaire';
import ProgressTracker from './components/common/ProgressTracker';
import ResultsPage from './components/results/ResultsPage'; // Import the new ResultsPage

const assessmentSequence = ['vark', 'scenarios', 'preferences', 'interactive', 'background'];
const totalSections = assessmentSequence.length;

function App() {
    const [assessmentStage, setAssessmentStage] = useState('welcome');
    const [allAnswers, setAllAnswers] = useState({});
    const [finalResult, setFinalResult] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSectionComplete = (sectionKey, answers) => {
        const newAnswers = { ...allAnswers, [sectionKey]: answers };
        setAllAnswers(newAnswers);

        const currentSectionIndex = assessmentSequence.indexOf(sectionKey);
        
        if (currentSectionIndex < totalSections - 1) {
            setAssessmentStage(assessmentSequence[currentSectionIndex + 1]);
        } else {
            submitAllAnswers(newAnswers);
        }
    };

    const submitAllAnswers = async (answers) => {
        setIsSubmitting(true);
        try {
            const response = await api.submitResults(answers);
            setFinalResult(response.data);
            setAssessmentStage('results');
        } catch (error) {
            console.error('Failed to submit assessment:', error);
            alert('There was an error submitting your assessment. Please try again.');
            setIsSubmitting(false); // Reset on error
        }
    };

    const renderStage = () => {
        const currentSectionIndex = assessmentSequence.indexOf(assessmentStage);

        if (isSubmitting) return <p>Calculating your results...</p>;
        
        const componentProps = (key) => ({
            onComplete: (answers) => handleSectionComplete(key, answers)
        });

        switch (assessmentStage) {
            case 'welcome':
                return (
                    <div className="welcome-container">
                        <h1>Welcome to the Learning Style Assessment</h1>
                        <p>This assessment will help us understand how you learn best.</p>
                        <button onClick={() => setAssessmentStage('vark')}>Start Assessment</button>
                    </div>
                );
            case 'vark':
            case 'scenarios':
            case 'preferences':
            case 'interactive':
            case 'background':
                const components = {
                    vark: <VARKTest {...componentProps('vark')} />,
                    scenarios: <ProgrammingScenarioTest {...componentProps('scenarios')} />,
                    preferences: <LearningPreferenceSurvey {...componentProps('preferences')} />,
                    interactive: <InteractiveExercise {...componentProps('interactive')} />,
                    background: <BackgroundQuestionnaire {...componentProps('background')} />
                };
                return (
                    <>
                        <ProgressTracker currentSection={currentSectionIndex + 1} totalSections={totalSections} />
                        {components[assessmentStage]}
                    </>
                );
            case 'results':
                return <ResultsPage result={finalResult} />;
            default:
                return <p>Loading...</p>;
        }
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>4C Learning System</h1>
            </header>
            <main className="assessment-content">
                {renderStage()}
            </main>
            <footer className="app-footer">
                <p>&copy; 2025 4C Learning System</p>
            </footer>
        </div>
    );
}

export default App;