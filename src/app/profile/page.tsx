'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, User, BookOpen, Trophy, Target, Calendar, TrendingUp, Award, Settings } from 'lucide-react';
import Navigation from '@/components/Navigation';

interface UserProfile {
  name: string;
  email: string;
  grade: string;
  joinDate: string;
  totalStudyTime: number;
  completedLessons: number;
  completedAssessments: number;
  averageScore: number;
  achievements: string[];
  subjectProgress: { [key: string]: number };
}

const subjectNames: { [key: string]: string } = {
  'mathematics': 'Mathematics',
  'mathematical-literacy': 'Mathematical Literacy',
  'chemistry': 'Chemistry',
  'physics': 'Physics',
  'life-sciences': 'Life Sciences',
  'geography': 'Geography'
};

const achievementsList = [
  { id: 'first-lesson', name: 'First Steps', description: 'Complete your first lesson', icon: '🎯' },
  { id: 'week-streak', name: 'Week Warrior', description: 'Study for 7 days in a row', icon: '🔥' },
  { id: 'perfect-score', name: 'Perfect Score', description: 'Get 100% on an assessment', icon: '💯' },
  { id: 'subject-master', name: 'Subject Master', description: 'Complete all topics in a subject', icon: '👑' },
  { id: 'quick-learner', name: 'Quick Learner', description: 'Complete 5 lessons in one day', icon: '⚡' },
  { id: 'assessment-pro', name: 'Assessment Pro', description: 'Complete 10 assessments', icon: '📊' }
];

export default function Profile() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', email: '', grade: '' });
  const [studyStats, setStudyStats] = useState<any>({});

  useEffect(() => {
    loadUserProfile();
    loadStudyStats();
  }, []);

  const loadUserProfile = () => {
    const savedUser = localStorage.getItem('userProfile');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setEditForm(JSON.parse(savedUser));
    } else {
      // Create default user profile
      const defaultUser: UserProfile = {
        name: 'Student',
        email: 'student@example.com',
        grade: '8',
        joinDate: new Date().toISOString(),
        totalStudyTime: 0,
        completedLessons: 0,
        completedAssessments: 0,
        averageScore: 0,
        achievements: [],
        subjectProgress: {}
      };
      setUser(defaultUser);
      setEditForm(defaultUser);
      localStorage.setItem('userProfile', JSON.stringify(defaultUser));
    }
  };

  const loadStudyStats = () => {
    const stats = {
      totalLessons: 0,
      completedLessons: 0,
      totalAssessments: 0,
      assessmentScores: [] as number[],
      subjectProgress: {} as { [key: string]: { total: number; completed: number } },
      recentActivity: [] as any[],
      studyStreak: 0
    };

    // Calculate progress from localStorage
    const subjects = ['mathematics', 'mathematical-literacy', 'chemistry', 'physics', 'life-sciences', 'geography'];
    const grades = ['8', '9', '10', '11', '12'];

    subjects.forEach(subject => {
      stats.subjectProgress[subject] = { total: 0, completed: 0 };
      grades.forEach(grade => {
        // Get topics for this subject and grade
        const topicsKey = `topics_${subject}_${grade}`;
        const savedTopics = localStorage.getItem(topicsKey);
        if (savedTopics) {
          const topics = JSON.parse(savedTopics);
          topics.forEach((topic: any) => {
            stats.totalLessons += topic.lessons;
            stats.subjectProgress[subject].total += topic.lessons;
            
            const progressKey = `progress_${subject}_${grade}_${topic.id}`;
            const savedProgress = localStorage.getItem(progressKey);
            if (savedProgress) {
              const completed = parseInt(savedProgress);
              stats.completedLessons += completed;
              stats.subjectProgress[subject].completed += completed;
            }
          });
        }

        // Get assessment results
        const assessmentKey = `assessment_${subject}_${grade}`;
        const savedAssessment = localStorage.getItem(assessmentKey);
        if (savedAssessment) {
          const assessment = JSON.parse(savedAssessment);
          stats.totalAssessments++;
          const percentage = (assessment.score / assessment.totalQuestions) * 100;
          stats.assessmentScores.push(percentage);
        }
      });
    });

    setStudyStats(stats);
    updateUserStats(stats);
  };

  const updateUserStats = (stats: any) => {
    if (user) {
      const updatedUser = { ...user };
      updatedUser.completedLessons = stats.completedLessons;
      updatedUser.completedAssessments = stats.totalAssessments;
      updatedUser.averageScore = stats.assessmentScores.length > 0 
        ? Math.round(stats.assessmentScores.reduce((a: number, b: number) => a + b, 0) / stats.assessmentScores.length)
        : 0;
      
      // Update subject progress
      Object.keys(stats.subjectProgress).forEach(subject => {
        const progress = stats.subjectProgress[subject];
        updatedUser.subjectProgress[subject] = progress.total > 0 
          ? Math.round((progress.completed / progress.total) * 100)
          : 0;
      });

      // Check for achievements
      const newAchievements = [...updatedUser.achievements];
      
      if (stats.completedLessons >= 1 && !newAchievements.includes('first-lesson')) {
        newAchievements.push('first-lesson');
      }
      
      if (stats.totalAssessments >= 10 && !newAchievements.includes('assessment-pro')) {
        newAchievements.push('assessment-pro');
      }
      
      if (stats.assessmentScores.includes(100) && !newAchievements.includes('perfect-score')) {
        newAchievements.push('perfect-score');
      }

      // Check for subject master achievement
      const subjectMastery = Object.keys(updatedUser.subjectProgress).some(subject => 
        updatedUser.subjectProgress[subject] === 100
      );
      if (subjectMastery && !newAchievements.includes('subject-master')) {
        newAchievements.push('subject-master');
      }

      updatedUser.achievements = newAchievements;
      setUser(updatedUser);
      localStorage.setItem('userProfile', JSON.stringify(updatedUser));
    }
  };

  const handleSaveProfile = () => {
    if (user) {
      const updatedUser = { ...user, ...editForm };
      setUser(updatedUser);
      localStorage.setItem('userProfile', JSON.stringify(updatedUser));
      setIsEditing(false);
    }
  };

  const getOverallProgress = () => {
    if (studyStats.totalLessons === 0) return 0;
    return Math.round((studyStats.completedLessons / studyStats.totalLessons) * 100);
  };

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100 dark:bg-green-900/20';
    if (percentage >= 80) return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20';
    if (percentage >= 70) return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
    if (percentage >= 60) return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20';
    return 'text-red-600 bg-red-100 dark:bg-red-900/20';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (!user) {
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
      <Navigation currentPage="profile" />
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Profile Header */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="text-xl">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{user.name}</CardTitle>
                    <CardDescription>
                      Grade {user.grade} • Joined {formatDate(user.joinDate)}
                    </CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    <Settings className="w-4 h-4 mr-2" />
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                </div>
              </CardHeader>
              {isEditing && (
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={editForm.name}
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="grade">Grade</Label>
                      <select
                        id="grade"
                        className="w-full p-2 border rounded-md"
                        value={editForm.grade}
                        onChange={(e) => setEditForm({...editForm, grade: e.target.value})}
                      >
                        {[8, 9, 10, 11, 12].map(grade => (
                          <option key={grade} value={grade}>Grade {grade}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Button onClick={handleSaveProfile}>Save Changes</Button>
                </CardContent>
              )}
            </Card>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Lessons Completed</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.completedLessons}</div>
                  <p className="text-xs text-muted-foreground">
                    {studyStats.totalLessons} total lessons
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Assessments</CardTitle>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.completedAssessments}</div>
                  <p className="text-xs text-muted-foreground">
                    Average score: {user.averageScore}%
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{getOverallProgress()}%</div>
                  <Progress value={getOverallProgress()} className="h-2 mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.achievements.length}</div>
                  <p className="text-xs text-muted-foreground">
                    {achievementsList.length - user.achievements.length} to unlock
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest learning activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {user.completedLessons > 0 && (
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Completed lesson</p>
                        <p className="text-xs text-muted-foreground">Recently</p>
                      </div>
                    </div>
                  )}
                  {user.completedAssessments > 0 && (
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Completed assessment</p>
                        <p className="text-xs text-muted-foreground">Recently</p>
                      </div>
                    </div>
                  )}
                  {user.achievements.length > 0 && (
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Earned achievement</p>
                        <p className="text-xs text-muted-foreground">Recently</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            {/* Overall Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Overall Learning Progress</CardTitle>
                <CardDescription>Your progress across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Total Progress</span>
                      <span>{getOverallProgress()}%</span>
                    </div>
                    <Progress value={getOverallProgress()} className="h-3" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Lessons completed:</span>
                      <span className="ml-2 font-medium">{user.completedLessons}/{studyStats.totalLessons}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Assessments completed:</span>
                      <span className="ml-2 font-medium">{user.completedAssessments}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subject Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Subject Progress</CardTitle>
                <CardDescription>Progress breakdown by subject</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(user.subjectProgress).map(([subject, progress]) => (
                    <div key={subject} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{subjectNames[subject as keyof typeof subjectNames]}</span>
                        <Badge variant="outline" className={getGradeColor(progress)}>
                          {progress}%
                        </Badge>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Badges and milestones you've earned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievementsList.map(achievement => {
                    const isUnlocked = user.achievements.includes(achievement.id);
                    return (
                      <Card 
                        key={achievement.id} 
                        className={`transition-all duration-300 ${
                          isUnlocked 
                            ? 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20' 
                            : 'opacity-50'
                        }`}
                      >
                        <CardHeader className="text-center">
                          <div className="text-4xl mb-2">{achievement.icon}</div>
                          <CardTitle className="text-lg">{achievement.name}</CardTitle>
                          <CardDescription>{achievement.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                          {isUnlocked ? (
                            <Badge variant="default" className="bg-yellow-500">
                              Unlocked
                            </Badge>
                          ) : (
                            <Badge variant="secondary">Locked</Badge>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Clear Learning Data</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    This will reset all your progress, achievements, and learning data.
                  </p>
                  <Button 
                    variant="destructive" 
                    onClick={() => {
                      if (confirm('Are you sure you want to clear all learning data? This cannot be undone.')) {
                        localStorage.clear();
                        window.location.reload();
                      }
                    }}
                  >
                    Clear All Data
                  </Button>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Export Data</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Download your learning progress and achievements data.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const data = {
                        profile: user,
                        stats: studyStats,
                        exportDate: new Date().toISOString()
                      };
                      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'learning-data.json';
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                  >
                    Export Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}