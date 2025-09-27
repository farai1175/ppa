'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calculator, Atom, Globe, Microscope, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';

const subjects = [
  {
    id: 'mathematics',
    title: 'Mathematics',
    description: 'Advanced mathematical concepts and problem-solving',
    icon: Calculator,
    color: 'bg-blue-500'
  },
  {
    id: 'mathematical-literacy',
    title: 'Mathematical Literacy',
    description: 'Practical mathematics for everyday life',
    icon: FileText,
    color: 'bg-green-500'
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    description: 'Chemical reactions, elements, and compounds',
    icon: Atom,
    color: 'bg-purple-500'
  },
  {
    id: 'physics',
    title: 'Physics',
    description: 'Forces, energy, and the laws of nature',
    icon: Microscope,
    color: 'bg-red-500'
  },
  {
    id: 'life-sciences',
    title: 'Life Sciences',
    description: 'Biology, ecology, and living organisms',
    icon: Microscope,
    color: 'bg-emerald-500'
  },
  {
    id: 'geography',
    title: 'Geography',
    description: 'Earth\'s physical features and human geography',
    icon: Globe,
    color: 'bg-amber-500'
  }
];

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    // Store selected subject in localStorage for persistence
    localStorage.setItem('selectedSubject', subjectId);
    // Navigate to grade selection page
    window.location.href = '/grade-selection';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation currentPage="home" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Subject Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
          {subjects.map((subject) => {
            const IconComponent = subject.icon;
            return (
              <Card 
                key={subject.id} 
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-slate-300 dark:hover:border-slate-600"
                onClick={() => handleSubjectSelect(subject.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full ${subject.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                    {subject.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {subject.description}
                  </CardDescription>
                  <Button className="mt-4 w-full" variant="outline">
                    Select Subject
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">
            Why Choose LearnSmart?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Short Lessons</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Learn in bite-sized chunks perfect for quick study sessions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Track Progress</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Monitor your learning journey and see your improvement</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Atom className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Varied Assessments</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Test your knowledge with different question types</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}