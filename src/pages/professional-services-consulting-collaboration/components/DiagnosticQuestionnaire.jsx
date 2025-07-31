import React, { useState } from 'react';

import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const DiagnosticQuestionnaire = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'challenges',
      title: 'What are your primary technical challenges?',
      type: 'multiple',
      options: [
        'System performance issues',
        'Scaling infrastructure',
        'Complex debugging scenarios',
        'Architecture optimization',
        'DevOps pipeline improvements',
        'Security vulnerabilities',
        'Database performance',
        'API optimization'
      ]
    },
    {
      id: 'urgency',
      title: 'What is the urgency level of your project?',
      type: 'single',
      options: [
        'Critical - Need immediate attention',
        'High - Within 2 weeks',
        'Medium - Within 1 month',
        'Low - Planning for future'
      ]
    },
    {
      id: 'team_size',
      title: 'What is your current team size?',
      type: 'single',
      options: [
        'Solo developer',
        '2-5 engineers',
        '6-15 engineers',
        '16+ engineers'
      ]
    },
    {
      id: 'budget',
      title: 'What is your estimated budget range?',
      type: 'single',
      options: [
        'Under $5,000',
        '$5,000 - $15,000',
        '$15,000 - $50,000',
        '$50,000+'
      ]
    }
  ];

  const handleAnswerChange = (questionId, value, isMultiple = false) => {
    if (isMultiple) {
      const currentAnswers = answers[questionId] || [];
      const updatedAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(answer => answer !== value)
        : [...currentAnswers, value];
      
      setAnswers(prev => ({
        ...prev,
        [questionId]: updatedAnswers
      }));
    } else {
      setAnswers(prev => ({
        ...prev,
        [questionId]: value
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;
  const hasAnswer = answers[currentQuestion.id] && 
    (Array.isArray(answers[currentQuestion.id]) 
      ? answers[currentQuestion.id].length > 0 
      : answers[currentQuestion.id]);

  return (
    <div className="bg-card rounded-technical border border-border shadow-elevation p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-heading font-semibold text-primary">
            Technical Needs Assessment
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary">
              {currentStep + 1} of {questions.length}
            </span>
            <div className="w-24 h-2 bg-surface rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
        
        <p className="text-text-secondary">
          Help us understand your specific needs to recommend the best service approach.
        </p>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-medium text-primary mb-4">
          {currentQuestion.title}
        </h4>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div key={index}>
              {currentQuestion.type === 'multiple' ? (
                <Checkbox
                  label={option}
                  checked={answers[currentQuestion.id]?.includes(option) || false}
                  onChange={(e) => handleAnswerChange(currentQuestion.id, option, true)}
                />
              ) : (
                <label className="flex items-center space-x-3 p-3 rounded-technical border border-border hover:bg-surface cursor-pointer transition-colors duration-200">
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={option}
                    checked={answers[currentQuestion.id] === option}
                    onChange={() => handleAnswerChange(currentQuestion.id, option)}
                    className="w-4 h-4 text-accent border-border focus:ring-accent"
                  />
                  <span className="text-text-secondary">{option}</span>
                </label>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          iconName="ChevronLeft"
          iconPosition="left"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          Previous
        </Button>

        <Button
          variant="default"
          iconName={isLastStep ? "CheckCircle" : "ChevronRight"}
          iconPosition="right"
          onClick={handleNext}
          disabled={!hasAnswer}
        >
          {isLastStep ? 'Complete Assessment' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

export default DiagnosticQuestionnaire;