'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock, CheckCircle, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { grade10MathematicsTopics } from '@/data/grade10-mathematics-data';
import { grade11MathematicsData } from '@/data/grade11-mathematics-data';
import { grade12MathematicsData } from '@/data/grade12-mathematics-data';
import { grade12ChemistryTopics } from '@/data/grade12-chemistry-data';

interface LessonContent {
  id: string;
  title: string;
  description: string;
  duration: number;
  content: any; // Can be object with introduction/keyPoints/examples/practice or string array
  exercises?: string[];
}

const subjectNames: { [key: string]: string } = {
  'mathematics': 'Mathematics',
  'mathematical-literacy': 'Mathematical Literacy',
  'chemistry': 'Chemistry',
  'physics': 'Physics',
  'life-sciences': 'Life Sciences',
  'geography': 'Geography'
};

export default function Lesson() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [currentLesson, setCurrentLesson] = useState<LessonContent | null>(null);
  const [currentTopic, setCurrentTopic] = useState<any>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  useEffect(() => {
    const subject = localStorage.getItem('selectedSubject');
    const grade = localStorage.getItem('selectedGrade');
    const topic = localStorage.getItem('selectedTopic');
    const lesson = localStorage.getItem('selectedLesson');
    
    if (subject && grade && topic && lesson) {
      setSelectedSubject(subject);
      setSelectedGrade(grade);
      setSelectedTopic(topic);
      setSelectedLesson(lesson);
      
      // Load completed lessons
      const saved = localStorage.getItem(`completedLessons-${subject}-${grade}`);
      if (saved) {
        setCompletedLessons(new Set(JSON.parse(saved)));
      }
      
      // Find the current topic and lesson
      let topics: any[] = [];
      
      if (subject === 'mathematics' && grade === '10') {
        topics = grade10MathematicsTopics;
      } else if (subject === 'mathematics' && grade === '11') {
        topics = grade11MathematicsData.topics;
      } else if (subject === 'mathematics' && grade === '12') {
        topics = grade12MathematicsData.topics;
      } else if (subject === 'chemistry' && grade === '12') {
        topics = grade12ChemistryTopics;
      }
      
      const topicData = topics.find(t => t.id === topic);
      if (topicData) {
        setCurrentTopic(topicData);
        const lessonData = topicData.lessons.find((l: LessonContent) => l.id === lesson);
        if (lessonData) {
          setCurrentLesson(lessonData);
        }
      }
    } else {
      // Redirect to topics if no selection
      window.location.href = '/topics';
    }
  }, []);

  const saveProgress = (updatedCompleted: Set<string>) => {
    if (selectedSubject && selectedGrade) {
      localStorage.setItem(`completedLessons-${selectedSubject}-${selectedGrade}`, JSON.stringify([...updatedCompleted]));
      setCompletedLessons(updatedCompleted);
    }
  };

  const handleLessonComplete = () => {
    if (selectedLesson) {
      const updatedCompleted = new Set(completedLessons);
      updatedCompleted.add(selectedLesson);
      saveProgress(updatedCompleted);
      
      // Find next lesson in the topic
      if (currentTopic) {
        const currentIndex = currentTopic.lessons.findIndex((l: LessonContent) => l.id === selectedLesson);
        if (currentIndex < currentTopic.lessons.length - 1) {
          const nextLesson = currentTopic.lessons[currentIndex + 1];
          localStorage.setItem('selectedLesson', nextLesson.id);
          setCurrentLesson(nextLesson);
          setSelectedLesson(nextLesson.id);
        } else {
          // All lessons completed, go back to topics
          window.location.href = '/topics';
        }
      }
    }
  };

  const handleBack = () => {
    window.location.href = '/topics';
  };

  const handlePreviousLesson = () => {
    if (currentTopic && selectedLesson) {
      const currentIndex = currentTopic.lessons.findIndex((l: LessonContent) => l.id === selectedLesson);
      if (currentIndex > 0) {
        const prevLesson = currentTopic.lessons[currentIndex - 1];
        localStorage.setItem('selectedLesson', prevLesson.id);
        setCurrentLesson(prevLesson);
        setSelectedLesson(prevLesson.id);
      }
    }
  };

  const handleNextLesson = () => {
    if (currentTopic && selectedLesson) {
      const currentIndex = currentTopic.lessons.findIndex((l: LessonContent) => l.id === selectedLesson);
      if (currentIndex < currentTopic.lessons.length - 1) {
        const nextLesson = currentTopic.lessons[currentIndex + 1];
        localStorage.setItem('selectedLesson', nextLesson.id);
        setCurrentLesson(nextLesson);
        setSelectedLesson(nextLesson.id);
      }
    }
  };

  if (!selectedSubject || !selectedGrade || !selectedTopic || !currentLesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const isCompleted = completedLessons.has(selectedLesson);
  const isFirstLesson = currentTopic.lessons[0].id === selectedLesson;
  const isLastLesson = currentTopic.lessons[currentTopic.lessons.length - 1].id === selectedLesson;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation 
        currentPage="lesson" 
        showBackButton={true}
        onBack={handleBack}
        title={currentLesson.title}
        subtitle={`${subjectNames[selectedSubject]} - Grade ${selectedGrade}`}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Lesson Progress */}
        <div className="mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-slate-500" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Lesson Progress
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {currentLesson.duration} minutes
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600 dark:text-slate-300">
                {currentTopic.lessons.findIndex((l: LessonContent) => l.id === selectedLesson) + 1} of {currentTopic.lessons.length}
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-300">
                {currentTopic.lessons.filter((l: LessonContent) => completedLessons.has(l.id)).length} completed
              </span>
            </div>
            
            <Progress 
              value={(currentTopic.lessons.filter((l: LessonContent) => completedLessons.has(l.id)).length / currentTopic.lessons.length) * 100} 
              className="h-2"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            onClick={handlePreviousLesson}
            disabled={isFirstLesson}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <div className="flex items-center gap-2">
            {isCompleted && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                Completed
              </Badge>
            )}
          </div>
          
          <Button
            variant="outline"
            onClick={handleNextLesson}
            disabled={isLastLesson}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Lesson Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {typeof currentLesson.content === 'object' && currentLesson.content.introduction 
                    ? currentLesson.content.introduction 
                    : currentLesson.description}
                </p>
              </CardContent>
            </Card>

            {/* Key Points */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Key Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {(typeof currentLesson.content === 'object' && currentLesson.content.keyPoints 
                    ? currentLesson.content.keyPoints 
                    : Array.isArray(currentLesson.content) 
                      ? currentLesson.content 
                      : []
                  ).map((point: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Examples */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Examples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(typeof currentLesson.content === 'object' && currentLesson.content.examples 
                    ? currentLesson.content.examples 
                    : currentLesson.exercises || []
                  ).map((example: string, index: number) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="font-medium text-slate-800 dark:text-slate-100 mb-1">
                        Example {index + 1}
                      </div>
                      <div className="text-slate-600 dark:text-slate-300 whitespace-pre-line font-mono text-sm bg-slate-50 dark:bg-slate-900 p-2 rounded">
                        {example}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Practice */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Practice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(typeof currentLesson.content === 'object' && currentLesson.content.practice 
                    ? currentLesson.content.practice 
                    : currentLesson.exercises || []
                  ).map((practice: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-300">{practice}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lesson Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  Lesson Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-300">Duration</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                      {currentLesson.duration} min
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-300">Status</span>
                    <Badge variant={isCompleted ? "secondary" : "outline"}>
                      {isCompleted ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-300">Topic</span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                      {currentTopic.title}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    onClick={handleLessonComplete}
                    disabled={isCompleted}
                    className="w-full"
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Mark Complete
                      </>
                    )}
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="w-full"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Topics
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  Topic Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {Math.round((currentTopic.lessons.filter((l: LessonContent) => completedLessons.has(l.id)).length / currentTopic.lessons.length) * 100)}%
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Complete
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    {currentTopic.lessons.map((lesson: LessonContent, index: number) => (
                      <div key={lesson.id} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          completedLessons.has(lesson.id) 
                            ? 'bg-green-500' 
                            : lesson.id === selectedLesson 
                              ? 'bg-blue-500' 
                              : 'bg-slate-300'
                        }`}></div>
                        <span className={`text-xs ${
                          lesson.id === selectedLesson 
                            ? 'font-medium text-blue-600 dark:text-blue-400' 
                            : 'text-slate-600 dark:text-slate-300'
                        }`}>
                          {index + 1}. {lesson.title.split(' ')[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}