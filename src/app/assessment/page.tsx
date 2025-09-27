'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CheckCircle, XCircle, Clock, Trophy, RotateCcw } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Sample assessment data for different topics
const assessmentsData: { [key: string]: any } = {
  'algebra-basics': {
    title: 'Algebra Basics Assessment',
    description: 'Test your understanding of variables, expressions, and equations',
    timeLimit: 15, // minutes
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is a variable in algebra?',
        options: [
          'A fixed number that never changes',
          'A symbol that represents an unknown value',
          'The result of a calculation',
          'A type of equation'
        ],
        correctAnswer: 1,
        explanation: 'A variable is a symbol (usually a letter) that represents an unknown or changing value in algebraic expressions and equations.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Which of the following is an algebraic expression?',
        options: [
          'x + 5 = 10',
          '2x + 3',
          'y = 7',
          '4 - 2 = 2'
        ],
        correctAnswer: 1,
        explanation: 'An algebraic expression contains variables, numbers, and operations but does not have an equals sign. 2x + 3 is an expression, while the others are equations.'
      },
      {
        id: 3,
        type: 'short-answer',
        question: 'Solve for x: x + 7 = 15',
        correctAnswer: '8',
        explanation: 'To solve x + 7 = 15, subtract 7 from both sides: x = 15 - 7 = 8'
      },
      {
        id: 4,
        type: 'matching',
        question: 'Match the following terms with their definitions:',
        pairs: [
          { term: 'Variable', definition: 'A symbol representing an unknown value' },
          { term: 'Expression', definition: 'Combination of variables, numbers, and operations' },
          { term: 'Equation', definition: 'Mathematical statement with an equals sign' },
          { term: 'Coefficient', definition: 'Number multiplied by a variable' }
        ],
        correctMatches: [0, 1, 2, 3],
        explanation: 'Understanding these basic terms is essential for algebra success.'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'In the expression 3x + 2, what is the coefficient of x?',
        options: ['x', '2', '3', '5'],
        correctAnswer: 2,
        explanation: 'The coefficient is the number multiplied by the variable. In 3x + 2, the coefficient of x is 3.'
      },
      {
        id: 6,
        type: 'terminology',
        question: 'Define what it means to "solve an equation":',
        correctAnswer: 'To find the value(s) of the variable(s) that make the equation true',
        explanation: 'Solving an equation means finding the value(s) of the variable(s) that satisfy the equation, making both sides equal.'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Which equation represents "5 more than twice a number equals 17"?',
        options: [
          '5x + 2 = 17',
          '2x + 5 = 17',
          '2(x + 5) = 17',
          'x + 10 = 17'
        ],
        correctAnswer: 1,
        explanation: '"Twice a number" is 2x, and "5 more than" that is 2x + 5. Set equal to 17: 2x + 5 = 17'
      },
      {
        id: 8,
        type: 'short-answer',
        question: 'If x = 4, what is the value of 2x + 3?',
        correctAnswer: '11',
        explanation: 'Substitute x = 4 into the expression: 2(4) + 3 = 8 + 3 = 11'
      }
    ]
  },
  'geometry-intro': {
    title: 'Geometry Basics Assessment',
    description: 'Test your knowledge of basic shapes, properties, and measurements',
    timeLimit: 20,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How many sides does a triangle have?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'A triangle is defined as a polygon with exactly three sides and three angles.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'What is the sum of angles in a triangle?',
        options: ['90°', '180°', '270°', '360°'],
        correctAnswer: 1,
        explanation: 'The sum of the three interior angles in any triangle is always 180 degrees.'
      },
      {
        id: 3,
        type: 'short-answer',
        question: 'What is the perimeter of a rectangle with length 8 and width 5?',
        correctAnswer: '26',
        explanation: 'Perimeter of rectangle = 2(length + width) = 2(8 + 5) = 2(13) = 26'
      },
      {
        id: 4,
        type: 'matching',
        question: 'Match each shape with its description:',
        pairs: [
          { term: 'Circle', definition: 'Round shape with all points equal distance from center' },
          { term: 'Rectangle', definition: 'Four-sided shape with four right angles' },
          { term: 'Triangle', definition: 'Three-sided polygon' },
          { term: 'Square', definition: 'Four equal sides and four right angles' }
        ],
        correctMatches: [0, 1, 2, 3],
        explanation: 'These are basic geometric shapes and their fundamental properties.'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'What is the area of a rectangle with length 6 and width 4?',
        options: ['10', '20', '24', '48'],
        correctAnswer: 2,
        explanation: 'Area of rectangle = length × width = 6 × 4 = 24 square units'
      },
      {
        id: 6,
        type: 'terminology',
        question: 'Define "perimeter":',
        correctAnswer: 'The distance around the outside of a shape',
        explanation: 'Perimeter is the total distance around the boundary of a two-dimensional shape.'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Which of the following has the most sides?',
        options: ['Triangle', 'Pentagon', 'Hexagon', 'Quadrilateral'],
        correctAnswer: 2,
        explanation: 'Triangle (3), Quadrilateral (4), Pentagon (5), Hexagon (6). Hexagon has the most sides.'
      },
      {
        id: 8,
        type: 'short-answer',
        question: 'What is the area of a square with side length 7?',
        correctAnswer: '49',
        explanation: 'Area of square = side × side = 7 × 7 = 49 square units'
      }
    ]
  },
  'cell-structure': {
    title: 'Cell Structure Assessment',
    description: 'Test your understanding of cell biology and organelles',
    timeLimit: 18,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is the basic unit of life?',
        options: ['Atom', 'Molecule', 'Cell', 'Tissue'],
        correctAnswer: 2,
        explanation: 'The cell is the basic structural and functional unit of all living organisms.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Which organelle is known as the "powerhouse" of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Cell membrane'],
        correctAnswer: 1,
        explanation: 'Mitochondria are called the powerhouse of the cell because they produce energy through cellular respiration.'
      },
      {
        id: 3,
        type: 'short-answer',
        question: 'What is the function of the cell nucleus?',
        correctAnswer: 'Controls cell activities and contains DNA',
        explanation: 'The nucleus controls all cellular activities and contains the cell\'s genetic material (DNA).'
      },
      {
        id: 4,
        type: 'matching',
        question: 'Match each organelle with its primary function:',
        pairs: [
          { term: 'Nucleus', definition: 'Controls cell activities and contains DNA' },
          { term: 'Mitochondria', definition: 'Produces energy for the cell' },
          { term: 'Ribosomes', definition: 'Produces proteins' },
          { term: 'Cell membrane', definition: 'Controls what enters and exits the cell' }
        ],
        correctMatches: [0, 1, 2, 3],
        explanation: 'Each organelle has a specific function that contributes to the overall functioning of the cell.'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Which of the following is found in plant cells but not in animal cells?',
        options: ['Mitochondria', 'Cell membrane', 'Cell wall', 'Nucleus'],
        correctAnswer: 2,
        explanation: 'Plant cells have a rigid cell wall that provides structural support, which is not found in animal cells.'
      },
      {
        id: 6,
        type: 'terminology',
        question: 'Define "organelle":',
        correctAnswer: 'A specialized structure within a cell that performs a specific function',
        explanation: 'Organelles are tiny structures within cells that carry out specific functions necessary for the cell to survive and function properly.'
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'What process do cells use to create new cells?',
        options: ['Photosynthesis', 'Mitosis', 'Respiration', 'Diffusion'],
        correctAnswer: 1,
        explanation: 'Mitosis is the process by which cells divide to create new cells for growth and repair.'
      },
      {
        id: 8,
        type: 'short-answer',
        question: 'Name one difference between plant and animal cells:',
        correctAnswer: 'Plant cells have cell walls, chloroplasts, and large vacuoles',
        explanation: 'Plant cells have cell walls for support, chloroplasts for photosynthesis, and large central vacuoles for water storage, which are not typically found in animal cells.'
      }
    ]
  }
};

const subjectNames: { [key: string]: string } = {
  'mathematics': 'Mathematics',
  'mathematical-literacy': 'Mathematical Literacy',
  'chemistry': 'Chemistry',
  'physics': 'Physics',
  'life-sciences': 'Life Sciences',
  'geography': 'Geography'
};

export default function Assessment() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [assessment, setAssessment] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    const subject = localStorage.getItem('selectedSubject');
    const grade = localStorage.getItem('selectedGrade');
    const topic = localStorage.getItem('selectedTopic');
    
    if (subject && grade && topic) {
      setSelectedSubject(subject);
      setSelectedGrade(grade);
      setSelectedTopic(topic);
      
      // Get assessment for selected topic
      const topicAssessment = assessmentsData[topic as keyof typeof assessmentsData];
      if (topicAssessment) {
        setAssessment(topicAssessment);
        setTimeRemaining(topicAssessment.timeLimit * 60); // Convert to seconds
        setTimerActive(true);
      }
    } else {
      // Redirect to topics if no selection
      window.location.href = '/topics';
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerActive && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0 && timerActive) {
      setTimerActive(false);
      handleSubmitAssessment();
    }
    return () => clearTimeout(timer);
  }, [timerActive, timeRemaining]);

  const handleAnswerChange = (questionId: number, answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < assessment.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitAssessment = () => {
    setTimerActive(false);
    setShowResults(true);
    
    // Save assessment results
    if (selectedSubject && selectedGrade && selectedTopic) {
      const score = calculateScore();
      const results = {
        score,
        totalQuestions: assessment.questions.length,
        completedAt: new Date().toISOString(),
        answers
      };
      localStorage.setItem(`assessment_${selectedSubject}_${selectedGrade}_${selectedTopic}`, JSON.stringify(results));
    }
  };

  const calculateScore = () => {
    let correct = 0;
    assessment.questions.forEach((question: any) => {
      const userAnswer = answers[question.id];
      if (userAnswer !== undefined) {
        switch (question.type) {
          case 'multiple-choice':
            if (userAnswer === question.correctAnswer) correct++;
            break;
          case 'short-answer':
          case 'terminology':
            if (userAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim()) correct++;
            break;
          case 'matching':
            if (JSON.stringify(userAnswer) === JSON.stringify(question.correctMatches)) correct++;
            break;
        }
      }
    });
    return correct;
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setTimeRemaining(assessment.timeLimit * 60);
    setTimerActive(true);
  };

  const handleBackToTopics = () => {
    window.location.href = '/topics';
  };

  if (!selectedSubject || !selectedGrade || !selectedTopic || !assessment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = assessment.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / assessment.questions.length) * 100;

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / assessment.questions.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <Navigation 
          currentPage="assessment" 
          showBackButton={true}
          onBack={handleBackToTopics}
          title="Assessment Results"
          subtitle={`${subjectNames[selectedSubject]} - Grade ${selectedGrade}`}
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Results Card */}
            <Card className="mb-8">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  Your Score: <span className={getScoreColor(score, assessment.questions.length)}>{score}/{assessment.questions.length}</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  {percentage}% Correct
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <Badge 
                      variant={percentage >= 80 ? "default" : percentage >= 60 ? "secondary" : "destructive"}
                      className="text-lg px-4 py-2"
                    >
                      {percentage >= 80 ? "Excellent!" : percentage >= 60 ? "Good Job!" : "Keep Practicing!"}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">{score}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Correct</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-600">{assessment.questions.length - score}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Incorrect</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600">{assessment.questions.length}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Total Questions</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Question Review */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Question Review</CardTitle>
                <CardDescription>Review your answers and learn from explanations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {assessment.questions.map((question: any, index: number) => {
                    const userAnswer = answers[question.id];
                    let isCorrect = false;
                    
                    if (userAnswer !== undefined) {
                      switch (question.type) {
                        case 'multiple-choice':
                          isCorrect = userAnswer === question.correctAnswer;
                          break;
                        case 'short-answer':
                        case 'terminology':
                          isCorrect = userAnswer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
                          break;
                        case 'matching':
                          isCorrect = JSON.stringify(userAnswer) === JSON.stringify(question.correctMatches);
                          break;
                      }
                    }
                    
                    return (
                      <div key={question.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                            Question {index + 1}
                          </h4>
                          {isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                        
                        <p className="text-slate-700 dark:text-slate-300 mb-3">{question.question}</p>
                        
                        {question.type === 'multiple-choice' && (
                          <div className="space-y-2 mb-3">
                            {question.options.map((option: string, optionIndex: number) => (
                              <div 
                                key={optionIndex}
                                className={`p-2 rounded border ${
                                  optionIndex === question.correctAnswer 
                                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                                    : userAnswer === optionIndex 
                                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                      : 'border-gray-200'
                                }`}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {(question.type === 'short-answer' || question.type === 'terminology') && (
                          <div className="space-y-2 mb-3">
                            <div>
                              <span className="text-sm text-slate-600 dark:text-slate-300">Your answer:</span>
                              <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded border">
                                {userAnswer || 'No answer provided'}
                              </div>
                            </div>
                            <div>
                              <span className="text-sm text-slate-600 dark:text-slate-300">Correct answer:</span>
                              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-500">
                                {question.correctAnswer}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3">
                          <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Explanation:</span>
                          <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">{question.explanation}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleRetake} variant="outline" className="flex-1 sm:flex-none">
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Assessment
              </Button>
              <Button onClick={handleBackToTopics} className="flex-1 sm:flex-none">
                Back to Topics
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation 
        currentPage="assessment" 
        showBackButton={true}
        onBack={handleBackToTopics}
        title={assessment.title}
        subtitle={`${subjectNames[selectedSubject]} - Grade ${selectedGrade}`}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Timer and Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Timer */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
            <div className="text-center">
              <div className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                Time Remaining
              </div>
              <div className={`text-2xl font-mono font-semibold ${
                timeRemaining < 300 ? 'text-red-600' : 'text-slate-800 dark:text-slate-100'
              }`}>
                {formatTime(timeRemaining)}
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
            <div className="text-center">
              <div className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                Question {currentQuestionIndex + 1} of {assessment.questions.length}
              </div>
              <div className="text-2xl font-mono font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {Math.round(progress)}%
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>

        {/* Question */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">
              {currentQuestion.question}
            </CardTitle>
            <CardDescription>
              Question Type: {currentQuestion.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentQuestion.type === 'multiple-choice' && (
              <RadioGroup
                value={answers[currentQuestion.id] || ''}
                onValueChange={(value) => handleAnswerChange(currentQuestion.id, parseInt(value))}
              >
                {currentQuestion.options.map((option: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {currentQuestion.type === 'short-answer' && (
              <Input
                placeholder="Enter your answer..."
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
              />
            )}

            {currentQuestion.type === 'terminology' && (
              <Textarea
                placeholder="Enter your definition..."
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                rows={3}
              />
            )}

            {currentQuestion.type === 'matching' && (
              <div className="space-y-3">
                {currentQuestion.pairs.map((pair: any, index: number) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="font-medium min-w-[120px]">{pair.term}</span>
                    <span className="text-slate-400">→</span>
                    <select
                      className="flex-1 p-2 border rounded-md"
                      value={answers[currentQuestion.id]?.[index] || ''}
                      onChange={(e) => {
                        const currentMatches = answers[currentQuestion.id] || [];
                        const newMatches = [...currentMatches];
                        newMatches[index] = parseInt(e.target.value);
                        handleAnswerChange(currentQuestion.id, newMatches);
                      }}
                    >
                      <option value="">Select definition...</option>
                      {currentQuestion.pairs.map((pair: any, defIndex: number) => (
                        <option key={defIndex} value={defIndex}>
                          {pair.definition}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          <div className="text-sm text-slate-600 dark:text-slate-300">
            {Object.keys(answers).length} of {assessment.questions.length} questions answered
          </div>
          
          {currentQuestionIndex === assessment.questions.length - 1 ? (
            <Button onClick={handleSubmitAssessment}>
              Submit Assessment
            </Button>
          ) : (
            <Button onClick={handleNextQuestion}>
              Next Question
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}