import React, { useState, useEffect } from 'react';

const AnimatedQuestionSuggestions = () => {
  const questions = [
    "What was your research about?",
    "What AI architectures do you have experience with?",
    "What statistical tools do you use?",
    "Which data formats are you familiar with?",
    "What are you passionate about?",
    "What is your experience with NLP?",
    "What skills can you bring to our company?",
    "What are your strongest programming languages?",
    "What's your background in AI?"
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentQuestion(prevQuestion => {
          const currentIndex = questions.indexOf(prevQuestion);
          const nextIndex = (currentIndex + 1) % questions.length;
          return questions[nextIndex];
        });
        setFadeIn(true);
      }, 500); // Half of the interval for smooth transition
    }, 2000); // Change question every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="animated-question-container">
      <p className={`animated-question ${fadeIn ? 'fade-in' : 'fade-out'}`}>
        {currentQuestion}
      </p>
      <style>{`
        .animated-question-container {
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .animated-question {
          transition: opacity 0.5s ease-in-out;
          text-align: center;
          font-style: italic;
          color: #555;
        }
        .fade-in {
          opacity: 1;
        }
        .fade-out {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default AnimatedQuestionSuggestions;