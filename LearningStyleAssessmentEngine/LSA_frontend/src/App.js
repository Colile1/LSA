import React, { useState } from 'react';
import api from './services/api';

// Import all assessment components
import VARKTest from './components/assessment/VARKTest';
import ProgrammingScenarioTest from './components/assessment/ProgrammingScenarioTest';
import LearningPreferenceSurvey from './components/assessment/LearningPreferenceSurvey';
import InteractiveExercise from './components/assessment/InteractiveExercise';
import BackgroundQuestionnaire from './components/assessment/BackgroundQuestionnaire';
import ProgressTracker from './components/common/ProgressTracker';

// Define the sequence of the assessment
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
            // Move to the next section
            setAssessmentStage(assessmentSequence[currentSectionIndex + 1]);
        } else {
            // Last section is complete, submit all answers
            submitAllAnswers(newAnswers);
        }
    };

    const submitAllAnswers = async (answers) => {
        setIsSubmitting(true);
        try {
            console.log('Submitting all answers:', answers);
            const response = await api.submitResults(answers);
            setFinalResult(response.data);
            setAssessmentStage('results');
        } catch (error) {
            console.error('Failed to submit assessment:', error);
            alert('There was an error submitting your assessment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderStage = () => {
        const currentSectionIndex = assessmentSequence.indexOf(assessmentStage);

        if (isSubmitting) {
            return <p>Calculating your results...</p>;
        }

        switch (assessmentStage) {
            case 'welcome':
                return (
                    <div className="welcome-container">
                        <h1>Welcome to the Learning Style Assessment</h1>
                        <p>This assessment will help us understand how you learn best.</p>
                        <p>It consists of {totalSections} short sections and should take about 10-15 minutes to complete.</p>
                        <button onClick={() => setAssessmentStage('vark')}>Start Assessment</button>
                    </div>
                );

            case 'vark':
                return (
                    <>
                        <ProgressTracker currentSection={currentSectionIndex + 1} totalSections={totalSections} />
                        <VARKTest onComplete={(answers) => handleSectionComplete('vark', answers)} />
                    </>
                );
            
            case 'scenarios':
                return (
                    <>
                        <ProgressTracker currentSection={currentSectionIndex + 1} totalSections={totalSections} />
                        <ProgrammingScenarioTest onComplete={(answers) => handleSectionComplete('scenarios', answers)} />
                    </>
                );

            case 'preferences':
                return (
                    <>
                        <ProgressTracker currentSection={currentSectionIndex + 1} totalSections={totalSections} />
                        <LearningPreferenceSurvey onComplete={(answers) => handleSectionComplete('preferences', answers)} />
                    </>
                );

            case 'interactive':
                 return (
                    <>
                        <ProgressTracker currentSection={currentSectionIndex + 1} totalSections={totalSections} />
                        <InteractiveExercise onComplete={(answers) => handleSectionComplete('interactive', answers)} />
                    </>
                );
            
            case 'background':
                return (
                    <>
                        <ProgressTracker currentSection={currentSectionIndex + 1} totalSections={totalSections} />
                        <BackgroundQuestionnaire onComplete={(answers) => handleSectionComplete('background', answers)} />
                    </>
                );

            case 'results':
                // Placeholder for the Results Page component
                return <div>Results will be displayed here. Data: {JSON.stringify(finalResult)}</div>;

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