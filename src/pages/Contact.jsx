import React from 'react';
import MainLayout from '../templates/MainLayout';
import { Heading1, Heading3, BodyText } from '../components/atoms/Typography';
import { Card, CardContent } from '../components/ui/card';
import { Mail, Twitter, Github, Linkedin, MessageCircle, Send } from 'lucide-react';
import AdsenseAd from '../components/AdsenseAd';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      description: 'For longer conversations and thoughtful exchanges',
      link: 'mailto:amin@mindofamin.com',
      linkText: 'amin@mindofamin.com'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      title: 'Twitter',
      description: 'Quick thoughts and real-time discussions',
      link: 'https://twitter.com/mindofamin',
      linkText: '@mindofamin'
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      description: 'Collaborative projects and code discussions',
      link: 'https://github.com/aminmind',
      linkText: 'github.com/aminmind'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      description: 'Professional connections and academic discussions',
      link: 'https://linkedin.com/in/aminmind',
      linkText: 'linkedin.com/in/aminmind'
    }
  ];

  const conversationStarters = [
    "Thoughts on digital minimalism and productivity",
    "Philosophy and its application to modern life",
    "Academic experiences and learning strategies",
    "Book recommendations and reading insights",
    "Technology's impact on learning and thinking",
    "Questions about any of my blog posts"
  ];

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Heading1 className="mb-6">Let's Start a Conversation</Heading1>
          <BodyText className="text-xl max-w-2xl mx-auto">
            I believe the best ideas emerge through dialogue. Whether you want to discuss 
            philosophy, share learning experiences, or simply connect with a fellow thinker, 
            I'd love to hear from you.
          </BodyText>
        </div>

        {/* Contact Methods */}
        <section className="mb-16">
          <Heading3 className="text-center mb-8">How to Reach Me</Heading3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border border-border hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{method.title}</h4>
                      <BodyText className="text-sm mb-3">
                        {method.description}
                      </BodyText>
                      <a 
                        href={method.link}
                        className="text-primary hover:underline text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.linkText}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conversation Starters */}
        <section className="mb-16">
          <Heading3 className="text-center mb-8">What We Could Discuss</Heading3>
          <Card className="bg-gradient-to-br from-muted/30 to-muted/10 border-border">
            <CardContent className="p-8">
              <div className="flex items-start mb-6">
                <MessageCircle className="w-6 h-6 text-primary mr-3 mt-1" />
                <BodyText>
                  Not sure where to start? Here are some topics I'm always excited to explore:
                </BodyText>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {conversationStarters.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <BodyText className="text-sm">
                      {topic}
                    </BodyText>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Response Time */}
        <section className="text-center mb-16">
          <Card className="max-w-2xl mx-auto border border-border">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-primary mr-3" />
                <Heading3>Response Time</Heading3>
              </div>
              <BodyText>
                I typically respond to emails within 2-3 days. For social media messages, 
                I aim to reply within 24-48 hours. I value thoughtful communication over 
                quick responses, so please don't hesitate to share your ideas in detail.
              </BodyText>
            </CardContent>
          </Card>
        </section>

        {/* Community Note */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <Heading3 className="mb-4">Building a Community of Thinkers</Heading3>
              <BodyText className="max-w-2xl mx-auto">
                My goal isn't just individual conversation, but contributing to a broader 
                community of people who value deep thinking, authentic dialogue, and 
                continuous learning. Every message, comment, or connection helps build 
                this community. Thank you for being part of it.
              </BodyText>
            </CardContent>
          </Card>
        </section>
      </div>
      <AdsenseAd />
    </MainLayout>
  );
};

export default Contact;