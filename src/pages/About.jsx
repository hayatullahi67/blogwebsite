import React from 'react';
import MainLayout from '../templates/MainLayout';
import { Heading1, Heading3, BodyText } from '../components/atoms/Typography';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { BookOpen, Coffee, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const interests = [
    'Philosophy', 'Technology', 'Digital Minimalism', 'Literature', 
    'Academic Writing', 'Critical Thinking', 'Mindfulness', 'Personal Growth'
  ];

  const values = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Lifelong Learning',
      description: 'Embracing curiosity and the continuous pursuit of knowledge across diverse disciplines.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Critical Thinking',
      description: 'Questioning assumptions, analyzing ideas deeply, and fostering intellectual honesty.'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Thoughtful Living',
      description: 'Making intentional choices and finding meaning in the balance between simplicity and complexity.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Authentic Expression',
      description: 'Sharing genuine insights and experiences to connect with others on meaningful levels.'
    }
  ];

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-2xl font-bold">
                A
              </div>
            </div>
          </div>
          <Heading1 className="mb-6">Hello, I'm Amin</Heading1>
          <BodyText className="text-xl max-w-2xl mx-auto">
            A university student passionate about exploring the intersection of philosophy, 
            technology, and the art of thoughtful living.
          </BodyText>
        </div>

        {/* About Content */}
        <div className="space-y-12">
          <section>
            <Heading3 className="mb-6">My Journey</Heading3>
            <div className="space-y-4">
              <BodyText>
                As a university student navigating the complexities of modern academia, I've discovered 
                that the most profound insights often emerge from the quiet spaces between formal learning—in 
                conversations with strangers, in moments of reflection, and in the synthesis of seemingly 
                unrelated ideas.
              </BodyText>
              <BodyText>
                This blog serves as my digital commonplace book, a space where I document thoughts on 
                philosophy, share discoveries about productivity and focus, and reflect on what it means 
                to live intentionally in our hyperconnected world. My writing is driven by curiosity 
                rather than expertise, questions rather than answers.
              </BodyText>
              <BodyText>
                I believe that university isn't just about acquiring knowledge—it's about developing 
                the capacity for lifelong learning, critical thinking, and meaningful contribution to 
                the conversations that shape our world.
              </BodyText>
            </div>
          </section>

          {/* Values */}
          <section>
            <Heading3 className="mb-6">What I Value</Heading3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{value.title}</h4>
                        <BodyText className="text-sm">
                          {value.description}
                        </BodyText>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Interests */}
          <section>
            <Heading3 className="mb-6">Areas of Interest</Heading3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                  {interest}
                </Badge>
              ))}
            </div>
          </section>

          {/* Mission */}
          <section>
            <Heading3 className="mb-6">Mission</Heading3>
            <Card className="bg-gradient-to-br from-muted/50 to-muted/20 border-border">
              <CardContent className="p-8">
                <BodyText className="text-lg leading-relaxed">
                  "To explore ideas deeply, question assumptions thoughtfully, and share insights 
                  authentically. Through writing, I aim to contribute to meaningful conversations 
                  about how we learn, think, and live in our rapidly changing world—always as a 
                  fellow traveler rather than a guide, a student rather than a teacher."
                </BodyText>
              </CardContent>
            </Card>
          </section>

          {/* Connect */}
          <section className="text-center">
            <Heading3 className="mb-4">Let's Connect</Heading3>
            <BodyText className="mb-6">
              I'd love to hear your thoughts on the ideas I explore. Feel free to reach out 
              if you're interested in continuing any of these conversations.
            </BodyText>
            <div className="flex justify-center">
              <a href="/contact" className="text-primary hover:underline">
                Get in touch →
              </a>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;