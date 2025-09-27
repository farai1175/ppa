'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Clock, CheckCircle, ChevronRight } from 'lucide-react'
import { grade12ChemistryTopics, type Lesson as LessonType, type Topic as TopicType } from '@/data/grade12-chemistry-data'

interface Topic extends TopicType {
  completedLessons: number
}

interface Lesson extends LessonType {
  completed: boolean
}

export default function Grade12ChemistryPage() {
  const [topics, setTopics] = useState<Topic[]>(grade12ChemistryTopics.map(topic => ({
    ...topic,
    completedLessons: 0,
    lessons: topic.lessons.map(lesson => ({ ...lesson, completed: false }))
  })))

  const toggleLessonCompletion = (topicId: string, lessonId: string) => {
    setTopics(prevTopics => 
      prevTopics.map(topic => {
        if (topic.id === topicId) {
          const updatedLessons = topic.lessons.map(lesson =>
            lesson.id === lessonId ? { ...lesson, completed: !lesson.completed } : lesson
          )
          const completedCount = updatedLessons.filter(lesson => lesson.completed).length
          return { ...topic, lessons: updatedLessons, completedLessons: completedCount }
        }
        return topic
      })
    )
  }

  const totalLessons = topics.reduce((sum, topic) => sum + topic.lessons.length, 0)
  const completedLessons = topics.reduce((sum, topic) => sum + topic.completedLessons, 0)
  const overallProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Grade 12 Chemistry</h1>
          <p className="text-lg text-gray-600 mb-4">LearnSmart Academy - CAPS Curriculum</p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Course Progress</h2>
              <Badge variant="outline" className="text-sm">
                {completedLessons}/{totalLessons} Lessons Completed
              </Badge>
            </div>
            <Progress value={overallProgress} className="h-3" />
            <p className="text-sm text-gray-600 mt-2">
              {overallProgress.toFixed(1)}% Complete
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Card key={topic.id} className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{topic.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {topic.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    <Clock className="w-3 h-3 mr-1" />
                    {topic.totalDuration}m
                  </Badge>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{topic.completedLessons}/{topic.lessons.length}</span>
                  </div>
                  <Progress 
                    value={(topic.completedLessons / topic.lessons.length) * 100} 
                    className="h-2" 
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topic.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`p-3 rounded-lg border transition-colors ${
                        lesson.completed 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-sm">{lesson.title}</h4>
                            {lesson.completed && (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mt-1">
                            {lesson.description}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {lesson.duration}m
                            </Badge>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant={lesson.completed ? "outline" : "default"}
                          onClick={() => toggleLessonCompletion(topic.id, lesson.id)}
                          className="ml-2"
                        >
                          {lesson.completed ? "Review" : "Start"}
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Course Overview</h3>
            <p className="text-gray-600 mb-4">
              This Grade 12 Chemistry course covers 8 major topics with 20 lessons, 
              following the CAPS curriculum. You'll learn about chemical reactions, 
              quantitative aspects, intermolecular forces, organic chemistry, energy changes, 
              acids and bases, and electrochemical reactions.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>8 Topics</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>610 minutes total</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                <span>CAPS aligned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}