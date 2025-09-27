'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, CheckCircle, ArrowLeft, Calculator } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { grade10MathematicsTopics, Topic, Lesson } from '@/data/grade10-mathematics-data';

export default function Grade10Mathematics() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);

  useEffect(() => {
    // Load completed lessons from localStorage
    const saved = localStorage.getItem('completedLessons-grade10-mathematics');
    if (saved) {
      setCompletedLessons(new Set(JSON.parse(saved)));
    }

    // Check if we should show a specific topic
    const topicId = localStorage.getItem('selectedTopic');
    if (topicId) {
      const topic = grade10MathematicsTopics.find(t => t.id === topicId);
      if (topic) {
        setCurrentTopic(topic);
        setSelectedTopic(topicId);
      }
    }
  }, []);

  const saveProgress = (updatedCompleted: Set<string>) => {
    localStorage.setItem('completedLessons-grade10-mathematics', JSON.stringify([...updatedCompleted]));
    setCompletedLessons(updatedCompleted);
  };

  const handleLessonComplete = (lessonId: string) => {
    const updatedCompleted = new Set(completedLessons);
    if (updatedCompleted.has(lessonId)) {
      updatedCompleted.delete(lessonId);
    } else {
      updatedCompleted.add(lessonId);
    }
    saveProgress(updatedCompleted);
  };

  const handleTopicSelect = (topicId: string) => {
    const topic = grade10MathematicsTopics.find(t => t.id === topicId);
    if (topic) {
      setCurrentTopic(topic);
      setSelectedTopic(topicId);
      localStorage.setItem('selectedTopic', topicId);
    }
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
    setCurrentTopic(null);
    localStorage.removeItem('selectedTopic');
  };

  const handleBackToGradeSelection = () => {
    localStorage.removeItem('selectedSubject');
    localStorage.removeItem('selectedGrade');
    window.location.href = '/grade-selection';
  };

  const calculateTopicProgress = (topic: Topic) => {
    const completedCount = topic.lessons.filter(lesson => 
      completedLessons.has(lesson.id)
    ).length;
    return (completedCount / topic.lessons.length) * 100;
  };

  const calculateOverallProgress = () => {
    const totalLessons = grade10MathematicsTopics.reduce((sum, topic) => sum + topic.lessons.length, 0);
    const completedCount = grade10MathematicsTopics.reduce((sum, topic) => 
      sum + topic.lessons.filter(lesson => completedLessons.has(lesson.id)).length, 0
    );
    return (completedCount / totalLessons) * 100;
  };

  const getTotalDuration = () => {
    return grade10MathematicsTopics.reduce((sum, topic) => sum + topic.totalDuration, 0);
  };

  const getCompletedDuration = () => {
    return grade10MathematicsTopics.reduce((sum, topic) => 
      sum + topic.lessons
        .filter(lesson => completedLessons.has(lesson.id))
        .reduce((lessonSum, lesson) => lessonSum + lesson.duration, 0), 0
    );
  };

  if (selectedTopic && currentTopic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <Navigation 
          currentPage="topics" 
          showBackButton={true}
          onBack={handleBackToTopics}
          subtitle={`Grade 10 Mathematics - ${currentTopic.title}`}
        />
        
        <div className="container mx-auto px-4 py-8">
          {/* Topic Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {currentTopic.title}
                  </h1>
                  <p className="text-slate-600 dark:text-slate-300">
                    {currentTopic.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {currentTopic.totalDuration} minutes
                    </span>
                  </div>
                  <Badge variant="secondary">
                    {currentTopic.lessons.length} lessons
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-300">Progress</span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {Math.round(calculateTopicProgress(currentTopic))}%
                  </span>
                </div>
                <Progress 
                  value={calculateTopicProgress(currentTopic)} 
                  className="h-2"
                />
              </div>
            </div>
          </div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {currentTopic.lessons.map((lesson, index) => {
              const isCompleted = completedLessons.has(lesson.id);
              return (
                <Card 
                  key={lesson.id} 
                  className={`transition-all duration-300 hover:shadow-lg cursor-pointer border-2 ${
                    isCompleted 
                      ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20' 
                      : 'hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                  onClick={() => {
                    localStorage.setItem('selectedLesson', lesson.id);
                    localStorage.setItem('selectedTopic', currentTopic.id);
                    window.location.href = '/lesson';
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            Lesson {index + 1}
                          </Badge>
                          {isCompleted && (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          )}
                        </div>
                        <CardTitle className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
                          {lesson.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-300">
                          {lesson.description}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <Clock className="w-3 h-3" />
                          {lesson.duration}m
                        </div>
                        <Button
                          size="sm"
                          variant={isCompleted ? "secondary" : "default"}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLessonComplete(lesson.id);
                          }}
                        >
                          {isCompleted ? "Completed" : "Mark Complete"}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        <strong>Key concepts:</strong>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {lesson.content.keyPoints.slice(0, 3).map((point, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {point.split(':')[0]}
                            </Badge>
                          ))}
                          {lesson.content.keyPoints.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{lesson.content.keyPoints.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Topic Summary */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                Topic Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {currentTopic.lessons.length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Total Lessons
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {currentTopic.lessons.filter(l => completedLessons.has(l.id)).length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {currentTopic.totalDuration}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation 
        currentPage="topics" 
        showBackButton={true}
        onBack={handleBackToGradeSelection}
        subtitle="Grade 10 Mathematics"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                  Grade 10 Mathematics
                </h1>
                <p className="text-slate-600 dark:text-slate-300">
                  CAPS-aligned curriculum covering algebra, trigonometry, geometry, and more
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {grade10MathematicsTopics.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Topics
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {grade10MathematicsTopics.reduce((sum, topic) => sum + topic.lessons.length, 0)}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Lessons
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {getTotalDuration()}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Total Minutes
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {Math.round(calculateOverallProgress())}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Complete
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">Overall Progress</span>
                <span className="text-slate-600 dark:text-slate-300">
                  {getCompletedDuration()}/{getTotalDuration()} minutes
                </span>
              </div>
              <Progress 
                value={calculateOverallProgress()} 
                className="h-3"
              />
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {grade10MathematicsTopics.map((topic, index) => (
            <Card 
              key={topic.id} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-slate-300 dark:hover:border-slate-600"
              onClick={() => handleTopicSelect(topic.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    Topic {index + 1}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Clock className="w-3 h-3" />
                    {topic.totalDuration}m
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  {topic.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {topic.lessons.length} lessons
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {Math.round(calculateTopicProgress(topic))}% complete
                    </span>
                  </div>
                  
                  <Progress 
                    value={calculateTopicProgress(topic)} 
                    className="h-2"
                  />
                  
                  <div className="flex flex-wrap gap-1">
                    {topic.lessons.slice(0, 3).map((lesson, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {lesson.title.split(' ')[0]}
                      </Badge>
                    ))}
                    {topic.lessons.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{topic.lessons.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    View Topic
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Features */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
              What You'll Learn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-800 dark:text-slate-100 mb-2">
                  📊 Number Systems & Algebra
                </h4>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Real numbers (rational & irrational)</li>
                  <li>• Surds and rounding</li>
                  <li>• Algebraic expressions & factorization</li>
                  <li>• Algebraic fractions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 dark:text-slate-100 mb-2">
                  ⚡ Exponents & Equations
                </h4>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Laws of exponents</li>
                  <li>• Linear & quadratic equations</li>
                  <li>• Simultaneous equations</li>
                  <li>• Linear inequalities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 dark:text-slate-100 mb-2">
                  📐 Trigonometry
                </h4>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Trigonometric ratios</li>
                  <li>• Extended definitions (0°-360°)</li>
                  <li>• Special angle values</li>
                  <li>• Basic trigonometric equations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 dark:text-slate-100 mb-2">
                  🎯 Skills Development
                </h4>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Problem-solving techniques</li>
                  <li>• Mathematical reasoning</li>
                  <li>• Real-world applications</li>
                  <li>• Exam preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}