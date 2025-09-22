import { useState, useRef, useEffect } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Send, Bot, User, Sparkles, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
}

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Thom's AI assistant. I can help you learn more about his experience, skills, and availability for projects. What would you like to know?",
      type: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        type: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('experience') || lowerInput.includes('background')) {
      return "Thom has 10+ years of front-end development experience, with 260+ custom hotel websites built during his time at WIHP/Cendyn. He specializes in translating Figma designs into pixel-perfect, responsive websites using HTML5, CSS3, and JavaScript.";
    }
    
    if (lowerInput.includes('skills') || lowerInput.includes('tech') || lowerInput.includes('stack')) {
      return "Thom's core skills include HTML5, CSS3, JavaScript, custom sliders, multi-level navigation, and ADA compliance. He's currently expanding into React, TypeScript, and AI-enhanced development workflows. He has a deep appreciation for typography and craftsmanship.";
    }
    
    if (lowerInput.includes('available') || lowerInput.includes('hire') || lowerInput.includes('work')) {
      return "Yes! Thom is currently open to new opportunities after transitioning from WIHP/Cendyn. He's available for full-time remote positions, freelance projects, and contract work. He's particularly interested in roles that value craftsmanship and attention to detail.";
    }
    
    if (lowerInput.includes('hospitality') || lowerInput.includes('hotel')) {
      return "Thom has extensive experience in the hospitality industry, having built websites for boutique properties to global hotel brands. He understands the unique needs of hospitality websites - from booking systems to visual storytelling that captures the essence of each property.";
    }
    
    if (lowerInput.includes('portfolio') || lowerInput.includes('work') || lowerInput.includes('examples')) {
      return "You can see Thom's full portfolio at thomgriggs.com, which showcases his 260+ hotel website projects. The Archive page on this site also demonstrates his range of work across different property types and brands. Each project shows his attention to detail and craft.";
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email')) {
      return "The best way to reach Thom is via email at hello@thomgriggs.com. He typically responds within 24 hours. You can also connect with him on LinkedIn or schedule a call through his Calendly link. Check the Contact section for all his details!";
    }
    
    if (lowerInput.includes('react') || lowerInput.includes('typescript') || lowerInput.includes('modern')) {
      return "While Thom's foundation is in vanilla HTML/CSS/JS, he's actively expanding into modern frameworks like React and TypeScript. This portfolio site itself is built with React, TypeScript, and Tailwind - showing his commitment to evolving with the industry while maintaining his craft-focused approach.";
    }
    
    if (lowerInput.includes('remote') || lowerInput.includes('location')) {
      return "Thom is fully set up for remote work and has experience collaborating with distributed teams. His decade at WIHP/Cendyn included working with clients and teams across different time zones. He's available for remote opportunities worldwide.";
    }
    
    if (lowerInput.includes('figma') || lowerInput.includes('design')) {
      return "Thom excels at Figma-to-code translation - it's one of his core strengths. He can take a Figma design and create a pixel-perfect, responsive implementation. While he's not a Figma design expert, he's definitely a Figma-to-code expert who understands how to bridge design and development.";
    }
    
    // Default responses for various greeting patterns
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! Great to meet you. I'm here to help you learn more about Thom's background, skills, and availability. What specific aspects of his experience would you like to know about?";
    }
    
    // Default response
    return "That's an interesting question! Thom brings 10+ years of hospitality web development experience, with a focus on craftsmanship and detail. Is there something specific about his background, skills, or availability you'd like to know more about?";
  };

  const quickQuestions = [
    "What's Thom's experience?",
    "Is he available for work?",
    "What are his key skills?",
    "Tell me about his portfolio"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-serif-display font-medium text-foreground">
                  Let's Talk
                </h1>
                <p className="text-muted-foreground text-sm">
                  Chat with Thom's AI assistant about his experience and availability
                </p>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>AI Assistant Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col h-[calc(100vh-280px)]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-6 pb-6">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-primary text-primary-foreground ml-3' 
                      : 'bg-muted mr-3'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  
                  {/* Message Content */}
                  <Card className={`${
                    message.type === 'user' 
                      ? 'bg-primary text-primary-foreground border-primary/20' 
                      : 'bg-card border-border'
                  }`}>
                    <CardContent className="p-4">
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <div className={`text-xs mt-2 opacity-60 ${
                        message.type === 'user' ? 'text-primary-foreground/60' : 'text-muted-foreground'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <Card className="bg-card border-border">
                    <CardContent className="p-4">
                      <div className="flex space-x-1 items-center">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setInputValue(question)}
                    className="text-xs"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border bg-background/80 backdrop-blur-sm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pt-6">
            <div className="flex space-x-3">
              <div className="flex-1">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about Thom's experience, skills, or availability..."
                  className="bg-background border-border"
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  disabled={isTyping}
                />
              </div>
              <Button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="px-6"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Quick actions */}
            <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <Sparkles className="h-3 w-3" />
                  <span>AI-powered responses</span>
                </span>
                <span>Press Enter to send</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="mailto:hello@thomgriggs.com"
                  className="flex items-center space-x-1 hover:text-foreground transition-colors"
                >
                  <span>Direct email</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}