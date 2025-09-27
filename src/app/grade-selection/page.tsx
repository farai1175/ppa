'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import Navigation from '@/components/Navigation';

const grades = [
  { id: '8', title: 'Grade 8', description: 'Foundation level concepts' },
  { id: '9', title: 'Grade 9', description: 'Intermediate level concepts' },
  { id: '10', title: 'Grade 10', description: 'Advanced foundation' },
  { id: '11', title: 'Grade 11', description: 'Senior level preparation' },
  { id: '12', title: 'Grade 12', description: 'Matriculation level' }
];

const subjectNames: { [key: string]: string } = {
  'mathematics': 'Mathematics',
  'mathematical-literacy': 'Mathematical Literacy',
  'chemistry': 'Chemistry',
  'physics': 'Physics',
  'life-sciences': 'Life Sciences',
  'geography': 'Geography'
};

export default function GradeSelection() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  useEffect(() => {
    // Get selected subject from localStorage
    const subject = localStorage.getItem('selectedSubject');
    if (subject) {
      setSelectedSubject(subject);
    } else {
      // If no subject selected, redirect to home
      window.location.href = '/';
    }
  }, []);

  const handleGradeSelect = (gradeId: string) => {
    setSelectedGrade(gradeId);
    // Store selected grade in localStorage
    localStorage.setItem('selectedGrade', gradeId);
    // Navigate to topics page
    window.location.href = '/topics';
  };

  const handleBack = () => {
    localStorage.removeItem('selectedSubject');
    window.location.href = '/';
  };

  if (!selectedSubject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation 
        currentPage="grade-selection" 
        showBackButton={true}
        onBack={handleBack}
        subtitle={`Subject: ${subjectNames[selectedSubject]}`}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Grade Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto mt-8">
          {grades.map((grade) => (
            <Card 
              key={grade.id} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-slate-300 dark:hover:border-slate-600"
              onClick={() => handleGradeSelect(grade.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  {grade.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-slate-600 dark:text-slate-300 mb-4">
                  {grade.description}
                </CardDescription>
                <Button className="w-full" variant="outline">
                  Select Grade
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  📚 Structured Learning
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Each grade follows a carefully designed curriculum that builds upon previous knowledge
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  🎯 Grade-Specific Content
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Lessons and assessments are tailored to your grade level and academic requirements
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  📊 Progress Tracking
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Monitor your progress through each topic and see your improvement over time
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  🏆 Achievement System
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Earn certificates and badges as you complete topics and master concepts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}