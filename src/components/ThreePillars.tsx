'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, Package, X, MessageCircle, FileText, Clipboard, Settings, Shield, Rocket, MessageSquare, Brain, Search, Scale, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function ThreePillars() {
  const [activePillar, setActivePillar] = useState(0);


  const pillars = [
    {
      id: 'smart-ingestion',
      title: 'Smart Policy Ingestion',
      subtitle: 'Rules Extraction from Policies',
      description: 'Solas intelligently extracts and processes rules from your policies, brand guidelines, and regulatory requirements to create a comprehensive compliance framework.'
    },
    {
      id: 'marketing-review',
      title: 'Robust Marketing Review',
      subtitle: 'Ensure Marketing is Compliant',
      description: 'Advanced AI-powered review system that checks all marketing content against extracted rules with transparent, source-linked explanations. Every decision is traceable back to original policies and regulatory sources.'
    },
    {
      id: 'workflow-engine',
      title: 'Workflow Engine',
      subtitle: 'Seamless Collaboration',
      description: 'Enterprise-scale workflow management with centralised collaboration between compliance, legal, and marketing teams. Integrates seamlessly with your existing tools and processes for scalable operations.'
    },
    {
      id: 'audit-trail',
      title: 'Audit Trail',
      subtitle: 'Documented Timeline',
      description: 'Complete, immutable records of every compliance decision with real-time tracking and performance analytics. Built with best-in-class privacy and security practices, making Solas suitable for regulated industries and internal governance needs.'
    }
  ];

  const dataSources = [
    { name: 'Industry Regulations', icon: Clipboard },
    { name: 'Brand Guidelines', icon: FileText },
    { name: 'Internal Policies', icon: FileText },
    { name: 'Preferences', icon: Settings },
    { name: 'Social Media Guidelines', icon: MessageSquare },
    { name: 'Jurisdictional Nuances', icon: FileText }
  ];

  const workflowSteps = [
    { name: 'Marketing Design', status: 'complete', icon: FileText },
    { name: 'Marketing Review', status: 'complete', icon: Search },
    { name: 'Compliance Review', status: 'active', icon: Shield },
    { name: 'Marketing Goes Live', status: 'pending', icon: Rocket }
  ];

  const teamMembers = [
    { name: 'Sarah Chen', role: 'Compliance Manager', avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=6366f1&color=fff&size=40' },
    { name: 'Michael Brown', role: 'Marketing Director', avatar: 'https://ui-avatars.com/api/?name=Michael+Brown&background=8b5cf6&color=fff&size=40' },
    { name: 'Emma Wilson', role: 'Legal Counsel', avatar: 'https://ui-avatars.com/api/?name=Emma+Wilson&background=ef4444&color=fff&size=40' },
    { name: 'David Kim', role: 'Brand Manager', avatar: 'https://ui-avatars.com/api/?name=David+Kim&background=10b981&color=fff&size=40' }
  ];

  const integrations = [
    { name: 'Slack', logo: '/Slack.png', status: 'active' },
    { name: 'Jira', logo: '/Jira.png', status: 'active' },
    { name: 'Teams', logo: '/microsoft-teams.svg', status: 'inactive' },
    { name: 'Salesforce', logo: '/salesforce.svg', status: 'active' },
    { name: 'ServiceNow', logo: '/ServiceNow_logo.svg', status: 'active' },
    { name: 'Confluence', logo: '/Confluence.png', status: 'inactive' }
  ];


  const renderSmartIngestion = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Solas AI Brain</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">{pillars[0].description}</p>
      </div>
      
      {/* Circular arrangement of data sources */}
      <div className="relative w-[500px] h-[500px] mx-auto">
        {/* Center AI Brain */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative">
            {/* Brain Icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center border-4 border-blue-200 relative animate-pulse-glow">
              <Brain className="w-12 h-12 text-purple-600 animate-pulse" />
              {/* Learning animation - rotating rings */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-spin opacity-30" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-spin opacity-50" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-pulse opacity-40"></div>
              {/* Pulsating learning indicator */}
              <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-30"></div>
              <div className="absolute inset-0 rounded-full border border-green-300 animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
            </div>
            {/* Solas AI Tag - subtle and single line */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-600 text-white px-2 py-1 rounded text-xs font-normal opacity-80 whitespace-nowrap">
              Solas AI
            </div>
          </div>
        </div>
        
        {/* Data sources arranged in circle */}
        {dataSources.map((source, index) => {
          const angle = (index * 60) - 90; // Start from top, 60 degrees apart
          const radius = 180; // Reduced radius for better centering
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;
          
          return (
            <div key={index}>
              {/* Data source tile */}
              <div
                className="absolute bg-white p-4 rounded-xl border-2 border-slate-200 text-center hover:shadow-lg transition-all duration-300 hover:border-blue-300 w-32 z-10"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-3 border ${
                  index % 6 === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-200' :
                  index % 6 === 1 ? 'bg-gradient-to-br from-green-100 to-green-200 border-green-200' :
                  index % 6 === 2 ? 'bg-gradient-to-br from-purple-100 to-purple-200 border-purple-200' :
                  index % 6 === 3 ? 'bg-gradient-to-br from-orange-100 to-orange-200 border-orange-200' :
                  index % 6 === 4 ? 'bg-gradient-to-br from-pink-100 to-pink-200 border-pink-200' :
                  'bg-gradient-to-br from-indigo-100 to-indigo-200 border-indigo-200'
                }`}>
                  <source.icon className={`w-5 h-5 ${index % 6 === 0 ? 'text-blue-600' : index % 6 === 1 ? 'text-green-600' : index % 6 === 2 ? 'text-purple-600' : index % 6 === 3 ? 'text-orange-600' : index % 6 === 4 ? 'text-pink-600' : 'text-indigo-600'}`} />
                </div>
                <p className="text-sm font-medium text-slate-700 leading-tight">{source.name}</p>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderMarketingReview = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">AI-Powered Review Engine</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">{pillars[1].description}</p>
      </div>
      
      {/* Review Process Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-200">
            <Search className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 mb-3 text-center">Content Analysis</h4>
          <p className="text-slate-600 text-sm text-center">Deep analysis of text, images, and context against extracted rules and guidelines.</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-200">
            <Scale className="w-6 h-6 text-green-600" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 mb-3 text-center">Compliance Check</h4>
          <p className="text-slate-600 text-sm text-center">Real-time verification against regulatory requirements and brand standards.</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-200">
            <Search className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 mb-3 text-center">Transparent Decisions</h4>
          <p className="text-slate-600 text-sm text-center">Every decision includes source-linked explanations with traceable reasoning back to original policies and regulatory sources.</p>
        </div>
      </div>

      {/* Review Statistics */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h4 className="text-lg font-semibold text-slate-900 mb-4 text-center">Review Performance</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">99.2%</div>
            <div className="text-sm text-slate-600">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">2.1s</div>
            <div className="text-sm text-slate-600">Avg Review Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">15K+</div>
            <div className="text-sm text-slate-600">Content Reviewed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">0</div>
            <div className="text-sm text-slate-600">False Positives</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWorkflowEngine = () => (
    <div className="space-y-8">
      {/* Pipeline */}
      <div>
        <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">Marketing Pipeline</h3>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          {workflowSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2 ${
                step.status === 'complete' ? 'bg-green-100 border-2 border-green-400' :
                step.status === 'active' ? 'bg-blue-100 border-2 border-blue-400 animate-pulse' :
                'bg-gray-100 border-2 border-gray-300'
              }`}>
                <step.icon className={`w-5 h-5 ${step.status === 'complete' ? 'text-green-600' : step.status === 'active' ? 'text-blue-600' : 'text-gray-600'}`} />
              </div>
              <p className="text-sm font-medium text-slate-700 text-center">{step.name}</p>
              <span className={`text-xs px-2 py-1 rounded-full mt-1 ${
                step.status === 'complete' ? 'bg-green-100 text-green-700' :
                step.status === 'active' ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-600'
              }`}>
                {step.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Team Hub & Integrations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Team Hub */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Team Hub</h4>
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                <Image src={member.avatar} alt={member.name} width={40} height={40} className="w-10 h-10 rounded-full" unoptimized />
                <div>
                  <p className="font-medium text-slate-900 text-sm">{member.name}</p>
                  <p className="text-xs text-slate-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Integrations</h4>
          <div className="grid grid-cols-2 gap-3">
            {integrations.map((integration, index) => (
              <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg border ${
                integration.status === 'active' 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="relative w-6 h-6 flex-shrink-0">
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    fill
                    className={`object-contain ${integration.status === 'active' ? 'opacity-100' : 'opacity-50'}`}
                  />
                </div>
                <div className="flex-grow">
                  <p className="font-medium text-slate-900 text-sm">{integration.name}</p>
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${
                      integration.status === 'active' ? 'bg-green-400' : 'bg-gray-400'
                    }`}></div>
                    <p className={`text-xs ${
                      integration.status === 'active' ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {integration.status === 'active' ? 'Active' : 'Inactive'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAuditTrail = () => {
    const timelineEvents = [
      {
        id: '#101',
        status: 'Fixed with Upload',
        statusColor: 'bg-green-100 text-green-700',
        title: 'Restrict scene with better background control',
        description: 'Add overlay graphics to cover problematic signage',
        user: {
          name: 'Mike Rodriguez',
          avatar: 'https://ui-avatars.com/api/?name=Mike+Rodriguez&background=6366f1&color=fff&size=32',
          timestamp: '15 minutes ago'
        }
      },
      {
        id: 'v2',
        status: 'Version',
        statusColor: 'bg-purple-100 text-purple-700',
        title: 'New Version v2 Uploaded',
        description: 'Brand compliance fixes and logo updates',
        user: {
          name: 'Alex Thompson',
          avatar: 'https://ui-avatars.com/api/?name=Alex+Thompson&background=8b5cf6&color=fff&size=32',
          timestamp: '15 minutes ago'
        }
      },
      {
        id: '#104',
        status: 'Rejected',
        statusColor: 'bg-red-100 text-red-700',
        title: 'Restrict scene with better background control',
        description: 'Add overlay graphics to cover problematic signage',
        user: {
          name: 'Sarah Chen',
          avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=ef4444&color=fff&size=32',
          timestamp: '24 minutes ago'
        }
      },
      {
        id: '#104',
        status: 'Fixed with Upload',
        statusColor: 'bg-green-100 text-green-700',
        title: 'Restrict scene with better background control',
        description: 'Add overlay graphics to cover problematic signage',
        user: {
          name: 'Alex Thompson',
          avatar: 'https://ui-avatars.com/api/?name=Alex+Thompson&background=6366f1&color=fff&size=32',
          timestamp: '30 minutes ago'
        }
      },
      {
        id: '',
        status: 'Comment',
        statusColor: 'bg-gray-100 text-gray-700',
        title: 'Restrict scene with better background control',
        description: 'Add overlay graphics to cover problematic signage',
        user: {
          name: 'David Kim',
          avatar: 'https://ui-avatars.com/api/?name=David+Kim&background=6b7280&color=fff&size=32',
          timestamp: '1 day ago'
        }
      }
    ];

    const getStatusIcon = (status: string) => {
      switch (status) {
        case 'Fixed with Upload':
          return (
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
          );
        case 'Version':
          return (
            <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
              <Package className="w-3 h-3 text-white" strokeWidth={2} />
            </div>
          );
        case 'Rejected':
          return (
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <X className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
          );
        case 'Comment':
          return (
            <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-3 h-3 text-white" strokeWidth={2} />
            </div>
          );
        default:
          return (
            <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
              <FileText className="w-3 h-3 text-white" strokeWidth={2} />
            </div>
          );
      }
    };

    return (
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-slate-50 px-8 py-6 border-b border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Timeline</h3>
              <p className="text-slate-600">Activity log showing all actions performed in this review</p>
            </div>
            <button className="mt-4 md:mt-0 bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm">
              Download Audit Log
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="p-8">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

            {/* Timeline Events */}
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                      {getStatusIcon(event.status)}
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.statusColor}`}>
                        {event.status}
                      </span>
                      {event.id && (
                        <span className="text-sm font-mono text-slate-500">{event.id}</span>
                      )}
                    </div>

                    <div className="mb-3">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">
                        {event.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Image 
                        src={event.user.avatar} 
                        alt={event.user.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full"
                        unoptimized
                      />
                      <div className="text-sm">
                        <div className="font-medium text-slate-900">{event.user.name}</div>
                        <div className="text-slate-500">{event.user.timestamp}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Comments</h4>
            <div className="relative">
              <textarea 
                className="w-full h-32 p-4 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                placeholder="Share your analysis, recommendation or questions about this compliance issue.."
              />
              <div className="absolute bottom-4 right-4">
                <button className="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                  <Send className="w-4 h-4 text-white" />
                  <span>Add Comment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getPillarBackground = (pillarIndex: number) => {
    switch (pillarIndex) {
      case 0: return 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50';
      case 1: return 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50';
      case 2: return 'bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50';
      case 3: return 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50';
      default: return 'bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100';
    }
  };

  return (
    <div className={`h-full w-full flex flex-col justify-start transition-all duration-500 ${getPillarBackground(activePillar)} relative overflow-hidden matrix-bg py-16 pt-20`}>
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(14)].map((_, i) => {
          const positions = [
            { left: 4, top: 19, delay: 0.5, duration: 5.4 },
            { left: 24, top: 69, delay: 2.0, duration: 6.9 },
            { left: 64, top: 29, delay: 3.2, duration: 5.6 },
            { left: 84, top: 79, delay: 1.3, duration: 7.4 },
            { left: 14, top: 89, delay: 2.6, duration: 5.2 },
            { left: 54, top: 11, delay: 1.8, duration: 6.5 },
            { left: 34, top: 89, delay: 2.9, duration: 5.4 },
            { left: 74, top: 49, delay: 4.2, duration: 4.7 },
            { left: 9, top: 59, delay: 1.1, duration: 6.7 },
            { left: 69, top: 29, delay: 2.6, duration: 5.3 },
            { left: 29, top: 79, delay: 4.0, duration: 4.8 },
            { left: 79, top: 69, delay: 1.9, duration: 6.8 },
            { left: 19, top: 39, delay: 3.1, duration: 5.7 },
            { left: 59, top: 89, delay: 4.7, duration: 4.5 }
          ];
          const pos = positions[i] || { left: 50, top: 50, delay: 2, duration: 6 };
          
          return (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full floating-element"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${pos.delay}s`,
                animationDuration: `${pos.duration}s`
              }}
            />
          );
        })}
      </div>
      
      <div className="scrollable-content h-full w-full overflow-y-auto scrollbar-hide">
        <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative w-full py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-10 md:mb-12" style={{ paddingTop: 'var(--section-title-padding-top)' }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight leading-tight">
            Four Pillars of Solas Intelligence
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            Experience how Solas transforms compliance through intelligent data processing, seamless collaboration, and bulletproof audit trails.
          </p>
        </div>

        {/* Unified Container */}
        <Reveal>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Pillar Tabs */}
            <div className="flex flex-col md:flex-row justify-center bg-slate-50 border-b border-slate-200">
              {pillars.map((pillar, index) => (
                <button
                  key={index}
                  onClick={() => setActivePillar(index)}
                  className={`flex-1 px-6 py-4 font-medium transition-all ${
                    activePillar === index
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-lg font-semibold">{pillar.title}</div>
                    <div className="text-sm opacity-75">{pillar.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Pillar Content */}
            <div className="p-8">
              {activePillar === 0 && renderSmartIngestion()}
              {activePillar === 1 && renderMarketingReview()}
              {activePillar === 2 && renderWorkflowEngine()}
              {activePillar === 3 && renderAuditTrail()}
            </div>
          </div>
        </Reveal>
        </div>
      </div>
    </div>
  );
}

