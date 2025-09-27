'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  User, 
  BookOpen, 
  Trophy, 
  ArrowLeft, 
  Menu,
  X
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  showBackButton?: boolean;
  onBack?: () => void;
  title?: string;
  subtitle?: string;
}

export default function Navigation({ 
  currentPage, 
  showBackButton = false, 
  onBack, 
  title, 
  subtitle 
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedLessons: 0,
    completedAssessments: 0,
    achievements: 0
  });

  useEffect(() => {
    // Load user progress for display
    const userProfile = localStorage.getItem('userProfile');
    if (userProfile) {
      const profile = JSON.parse(userProfile);
      setUserProgress({
        completedLessons: profile.completedLessons || 0,
        completedAssessments: profile.completedAssessments || 0,
        achievements: profile.achievements?.length || 0
      });
    }
  }, []);

  const navigationItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      href: '/',
      description: 'Return to main page'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      href: '/profile',
      description: 'View your profile and progress'
    }
  ];

  const handleNavigation = (href: string) => {
    window.location.href = href;
    setIsMenuOpen(false);
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'home':
        return 'LearnSmart Academy';
      case 'grade-selection':
        return 'Select Your Grade';
      case 'topics':
        return 'Learning Topics';
      case 'lesson':
        return 'Lesson';
      case 'assessment':
        return 'Assessment';
      case 'profile':
        return 'Student Profile';
      default:
        return title || 'LearnSmart Academy';
    }
  };

  const getPageSubtitle = () => {
    switch (currentPage) {
      case 'home':
        return 'Choose your subject and start your learning journey';
      case 'grade-selection':
        return subtitle || 'Select your grade level';
      case 'topics':
        return subtitle || 'Choose a topic to continue learning';
      case 'lesson':
        return 'Interactive lesson content';
      case 'assessment':
        return 'Test your knowledge';
      case 'profile':
        return 'Track your learning journey and achievements';
      default:
        return subtitle || '';
    }
  };

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Back button and Title */}
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="mr-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {getPageTitle()}
              </h1>
              {getPageSubtitle() && (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {getPageSubtitle()}
                </p>
              )}
            </div>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.id === 'profile' && (
                      <div className="flex items-center space-x-1">
                        {userProgress.completedLessons > 0 && (
                          <Badge variant="secondary" className="text-xs">
                            {userProgress.completedLessons}
                          </Badge>
                        )}
                      </div>
                    )}
                  </Button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 py-4">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleNavigation(item.href)}
                    className="w-full justify-start space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.id === 'profile' && userProgress.completedLessons > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {userProgress.completedLessons}
                      </Badge>
                    )}
                  </Button>
                );
              })}
            </div>
            
            {/* Mobile title display */}
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {getPageTitle()}
              </h2>
              {getPageSubtitle() && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {getPageSubtitle()}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}