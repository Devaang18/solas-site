'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

export default function ThreePillars() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'smart-ingestion',
      title: 'Smart Ingestion',
      subtitle: 'Intelligent Marketing Review',
      description: 'Solas creates a bespoke model by ingesting diverse data sources, combining regulatory intelligence with your unique context to deliver highly accurate marketing compliance reviews.'
    },
    {
      id: 'workflow-engine',
      title: 'Workflow Engine',
      subtitle: 'Seamless Collaboration',
      description: 'Streamlined pipeline from design to deployment with real-time collaboration and integration across your existing tools.'
    },
    {
      id: 'audit-trail',
      title: 'Audit Trail',
      subtitle: 'Bulletproof Documentation',
      description: 'Complete, immutable records of every compliance decision with real-time tracking and performance analytics.'
    }
  ];

  const dataSources = [
    { name: 'Industry Regulations', icon: '📋' },
    { name: 'Previous Campaigns', icon: '📊' },
    { name: 'Brand Guidelines', icon: '🎨' },
    { name: 'Internal Policies', icon: '📜' },
    { name: 'Marketing Assets', icon: '🖼️' },
    { name: 'Jurisdictional Nuances', icon: '🌍' }
  ];

  const workflowSteps = [
    { name: 'Marketing Design', status: 'complete', icon: '🎨' },
    { name: 'Marketing Review', status: 'complete', icon: '👀' },
    { name: 'Compliance Review', status: 'active', icon: '🛡️' },
    { name: 'Marketing Goes Live', status: 'pending', icon: '🚀' }
  ];

  const teamMembers = [
    { name: 'Sarah Chen', role: 'Compliance Manager', avatar: '👩‍💼' },
    { name: 'Michael Brown', role: 'Marketing Director', avatar: '👨‍💻' },
    { name: 'Emma Wilson', role: 'Legal Counsel', avatar: '👩‍⚖️' },
    { name: 'David Kim', role: 'Brand Manager', avatar: '👨‍🎨' }
  ];

  const integrations = [
    { name: 'Slack', icon: '💬', status: 'active' },
    { name: 'Jira', icon: '📋', status: 'active' },
    { name: 'Teams', icon: '👥', status: 'inactive' },
    { name: 'Salesforce', icon: '☁️', status: 'active' },
    { name: 'ServiceNow', icon: '🔧', status: 'active' },
    { name: 'Confluence', icon: '📚', status: 'inactive' }
  ];

  const auditRecords = [
    {
      id: '001',
      code: 'MKT-2024-001',
      priority: 'High',
      type: 'Social Media Ad Review',
      confidence: 98,
      description: 'Instagram campaign for new slot game - compliance verified',
      reviewer: 'Sarah Chen',
      timestamp: '2024-01-15 14:32:15',
      status: 'Approved',
      assets: ['IG_Campaign_Assets.zip', 'Compliance_Report.pdf'],
      channel: 'Social Media',
      hash: '0x7f3b...9e21'
    },
    {
      id: '002',
      code: 'MKT-2024-002',
      priority: 'Medium',
      type: 'Email Campaign Review',
      confidence: 85,
      description: 'Weekly newsletter with bonus promotions - minor adjustments required',
      reviewer: 'Michael Brown',
      timestamp: '2024-01-15 13:45:22',
      status: 'Under Review',
      assets: [],
      channel: 'Email',
      hash: '0x8a4c...7f32'
    },
    {
      id: '003',
      code: 'MKT-2024-003',
      priority: 'High',
      type: 'TV Advertisement Review',
      confidence: 96,
      description: '30-second TV spot for responsible gambling message compliance',
      reviewer: 'Emma Wilson',
      timestamp: '2024-01-15 11:28:07',
      status: 'Approved',
      assets: ['TV_Spot_Assets.zip'],
      channel: 'Television',
      hash: '0x9b5d...8e43'
    },
    {
      id: '004',
      code: 'MKT-2024-004',
      priority: 'Medium',
      type: 'Website Banner Review',
      confidence: 92,
      description: 'Homepage banner for new customer welcome offer',
      reviewer: 'David Kim',
      timestamp: '2024-01-15 09:15:33',
      status: 'Approved',
      assets: ['Banner_Assets.zip'],
      channel: 'Website',
      hash: '0xac6e...9f54'
    }
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
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center border-4 border-blue-200 relative">
              <span className="text-4xl">🧠</span>
              {/* Learning animation - rotating rings */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-spin opacity-30" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-spin opacity-50" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-pulse opacity-40"></div>
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
                <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center mx-auto mb-3 border border-blue-200">
                  <span className="text-lg">{source.icon}</span>
                </div>
                <p className="text-sm font-medium text-slate-700 leading-tight">{source.name}</p>
              </div>
              
            </div>
          );
        })}
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
                {step.icon}
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
                <span className="text-2xl">{member.avatar}</span>
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
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Active Integrations</h4>
          <div className="grid grid-cols-2 gap-3">
            {integrations.map((integration, index) => (
              <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg border ${
                integration.status === 'active' 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <span className="text-xl">{integration.icon}</span>
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

  const renderAuditTrail = () => (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
          <div className="text-2xl font-bold text-green-600">98.7%</div>
          <div className="text-sm text-slate-600">Approval Rate</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
          <div className="text-2xl font-bold text-blue-600">1,247</div>
          <div className="text-sm text-slate-600">Reviews</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
          <div className="text-2xl font-bold text-purple-600">2.3h</div>
          <div className="text-sm text-slate-600">Avg Response</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
          <div className="text-2xl font-bold text-orange-600">24h</div>
          <div className="text-sm text-slate-600">Campaign Ready</div>
        </div>
      </div>

      {/* Audit Records */}
      <div className="space-y-4">
        {auditRecords.map((record, index) => (
          <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-mono text-slate-500">#{record.id}</span>
                      <span className="text-sm font-mono text-slate-500">{record.code}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        record.priority === 'High' ? 'bg-red-100 text-red-700' :
                        record.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {record.priority}
                      </span>
                    </div>
                    <h4 className="font-semibold text-slate-900">{record.type}</h4>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{record.confidence}%</div>
                  <div className="text-sm text-slate-600">Confidence</div>
                </div>
              </div>
              
              <p className="text-slate-600 mb-4">{record.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <span>👤</span>
                    <span className="text-slate-700">{record.reviewer}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>🕒</span>
                    <span className="text-slate-500">{record.timestamp}</span>
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  record.status === 'Approved' ? 'bg-green-100 text-green-700' :
                  record.status === 'Under Review' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {record.status}
                </span>
              </div>
              
              {record.assets.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-slate-600">Marketing Assets:</span>
                    {record.assets.map((asset, assetIndex) => (
                      <span key={assetIndex} className="flex items-center space-x-1 text-sm text-slate-600">
                        <span>📦</span>
                        <span>{asset}</span>
                        <span className="text-green-600">Reviewed</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
                <span>Marketing Channel: {record.channel}</span>
                <span>Review Hash: {record.hash}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">🏆 Excellence</h4>
            <p className="text-slate-600">Your marketing compliance exceeds industry standards across all channels</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-green-600">100%</div>
            <div className="text-sm text-slate-600">Coverage</div>
            <div className="text-sm text-green-600">0 Issues</div>
          </div>
        </div>
      </div>
    </div>
  );

  const getPillarBackground = (pillarIndex: number) => {
    switch (pillarIndex) {
      case 0: return 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50';
      case 1: return 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50';
      case 2: return 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50';
      default: return 'bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100';
    }
  };

  return (
    <section className={`py-20 transition-all duration-500 ${getPillarBackground(activePillar)}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Three Pillars of Solas Intelligence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience how Solas transforms compliance through intelligent data processing, seamless collaboration, and bulletproof audit trails.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="flex flex-col md:flex-row justify-center mb-12 bg-white rounded-lg p-2 border border-slate-200 shadow-sm">
          {pillars.map((pillar, index) => (
            <button
              key={index}
              onClick={() => setActivePillar(index)}
              className={`flex-1 px-6 py-4 rounded-md font-medium transition-all ${
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
        <Reveal>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            {activePillar === 0 && renderSmartIngestion()}
            {activePillar === 1 && renderWorkflowEngine()}
            {activePillar === 2 && renderAuditTrail()}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
