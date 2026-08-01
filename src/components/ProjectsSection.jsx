import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  ExternalLink, 
  Sparkles, 
  Bot, 
  Car, 
  CloudFog, 
  Utensils, 
  X, 
  CheckCircle2, 
  Play, 
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'fog',
      title: 'Fog Detection using Deep Learning',
      subtitle: 'Real-Time Computer Vision & Fog Classifier',
      category: 'Deep Learning & Vision',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Flask API'],
      icon: CloudFog,
      color: 'from-blue-500 to-cyan-500',
      heroMetric: '90% Test Accuracy',
      metrics: [
        { label: 'Accuracy Achieved', value: '90%' },
        { label: 'Preproc. Boost', value: '+15%' },
        { label: 'Deployment', value: 'Flask API' }
      ],
      bullets: [
        'Built a CNN-based deep learning model for fog and no-fog image classification, achieving 90% test accuracy.',
        'Executed comprehensive model evaluation using confusion matrix, precision-recall analysis, and accuracy metrics.',
        'Enhanced dataset preprocessing and fine-tuned CNN hyperparameters, improving classification accuracy by 15%.',
        'Deployed model using Flask API for real-time fog detection from live camera feeds.'
      ],
      demoType: 'fogSim'
    },
    {
      id: 'netra',
      title: 'NETRA - Intelligent Traffic Management System',
      subtitle: 'YOLOv8 Real-Time Traffic & Emergency Override',
      category: 'Computer Vision & AI Control',
      tech: ['Python', 'YOLOv8', 'OpenCV', 'Adaptive Control', 'Computer Vision'],
      icon: Car,
      color: 'from-purple-500 to-pink-500',
      heroMetric: '40% Congestion Cut',
      metrics: [
        { label: 'Frames Processed', value: '3,600+' },
        { label: 'Congestion Cut', value: '40%' },
        { label: 'Response Saved', value: '40%' }
      ],
      bullets: [
        'Designed a real-time computer vision pipeline using YOLOv8 and OpenCV for vehicle detection, traffic density estimation, and emergency vehicle recognition across 3,600+ video frames.',
        'Automated frame-wise vehicle counting and traffic density classification (Low, Medium, High).',
        'Created an adaptive signal control algorithm that reduced average traffic congestion by 40%.',
        'Integrated emergency vehicle detection with automated signal override, cutting emergency response time by 40%.',
        'Architected a modular traffic management system separating perception, decision, and control modules.'
      ],
      demoType: 'netraSim'
    },
    {
      id: 'food',
      title: 'AI-Powered Food Ordering Platform',
      subtitle: 'Full-Stack Scalable Backend & Conversational AI',
      category: 'Full-Stack & AI Agents',
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'AI Agents', 'JWT Auth', 'REST APIs'],
      icon: Utensils,
      color: 'from-orange-500 to-amber-500',
      heroMetric: '15+ PostgreSQL Tables',
      metrics: [
        { label: 'Query Intent Types', value: '50+' },
        { label: 'User Roles Secured', value: '3 Roles' },
        { label: 'DB Tables', value: '15+' }
      ],
      bullets: [
        'Engineered a full-stack AI-powered food ordering platform with RESTful APIs supporting authentication, menu management, cart, orders, user profiles, and live order tracking.',
        'Implemented AI-powered conversational agents capable of handling 50+ customer query types, recommending dishes, assisting with order placement, and providing real-time order updates.',
        'Applied role-based access control for 3 user roles (Admin, Restaurant, Customer) using JWT authentication, securing 100% of protected API endpoints.',
        'Architected a scalable backend with 15+ PostgreSQL tables, enabling low-latency API responses.'
      ],
      demoType: 'foodSim'
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb-purple top-1/4 right-0 w-[35rem] h-[35rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Production Projects & Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Production-grade AI models, computer vision pipelines, and full-stack cloud architectures built with precision.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl border border-slate-800 flex flex-col justify-between p-6 sm:p-8 relative group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${proj.color} p-[1px]`}>
                    <div className="w-full h-full bg-slate-950 p-2.5 rounded-[15px] flex items-center justify-center">
                      <proj.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono rounded-full font-bold">
                    {proj.heroMetric}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-4">{proj.subtitle}</p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 bg-slate-950/80 p-3 rounded-xl border border-slate-800 mb-6 text-center">
                  {proj.metrics.map((m, i) => (
                    <div key={i}>
                      <span className="block text-sm font-bold font-mono text-gradient-cyan">{m.value}</span>
                      <span className="text-[10px] text-slate-400 block truncate">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bullets Preview */}
                <ul className="space-y-2 mb-6">
                  {proj.bullets.slice(0, 2).map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-mono rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 border border-cyan-500/30 font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Project & Interactive Simulator</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <InteractiveProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// Modal Component with Interactive Simulators
function InteractiveProjectModal({ project, onClose }) {
  const [simState, setSimState] = useState({
    activeTab: 'overview',
    fogInput: 'clear',
    trafficCount: 42,
    emergencyActive: false,
    queryInput: 'Check recommended dishes and order status',
    queryResult: null
  });

  const handleSimQuery = () => {
    if (project.demoType === 'foodSim') {
      setSimState(prev => ({
        ...prev,
        queryResult: `[AI Agent Response]: Identified customer query intent: "RECOMMENDATION_AND_STATUS". Verified JWT Token role: Customer. Returning personalized top dishes & order #4092 live status: In Kitchen.`
      }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
            <project.icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-xs font-mono text-cyan-400">{project.subtitle}</p>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex gap-2 my-6 border-b border-slate-800 pb-3">
          <button
            onClick={() => setSimState(prev => ({ ...prev, activeTab: 'overview' }))}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono transition ${
              simState.activeTab === 'overview'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-300'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setSimState(prev => ({ ...prev, activeTab: 'simulator' }))}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono transition flex items-center gap-1.5 ${
              simState.activeTab === 'simulator'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'bg-slate-800 text-cyan-400 border border-cyan-500/30'
            }`}
          >
            <Play className="w-3 h-3" /> Interactive Simulator
          </button>
        </div>

        {simState.activeTab === 'overview' ? (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3">Key Technical Contributions</h4>
              <ul className="space-y-3">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-950 border border-slate-800 text-cyan-300 text-xs font-mono rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono space-y-4">
            <div className="flex items-center justify-between text-xs text-cyan-400 border-b border-slate-800 pb-2">
              <span>{project.title} • Live Interactive Simulator</span>
              <span className="animate-pulse">● ONLINE</span>
            </div>

            {project.demoType === 'fogSim' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300">Select simulated camera feed condition:</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSimState(prev => ({ ...prev, fogInput: 'clear' }))}
                    className={`px-4 py-2 rounded-xl text-xs ${simState.fogInput === 'clear' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'}`}
                  >
                    Clear Feed
                  </button>
                  <button
                    onClick={() => setSimState(prev => ({ ...prev, fogInput: 'dense' }))}
                    className={`px-4 py-2 rounded-xl text-xs ${simState.fogInput === 'dense' ? 'bg-purple-500 text-white font-bold' : 'bg-slate-800 text-slate-300'}`}
                  >
                    Dense Fog Feed
                  </button>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">CNN Model Inference Output:</span>
                    <span className={simState.fogInput === 'dense' ? 'text-purple-400 font-bold' : 'text-cyan-400 font-bold'}>
                      {simState.fogInput === 'dense' ? 'FOG DETECTED (Confidence: 94.8%)' : 'CLEAR VISION (Confidence: 98.2%)'}
                    </span>
                  </div>
                  <div className="text-slate-500">Evaluation Metric: Precision: 0.91 | Recall: 0.89 | F1-Score: 0.90</div>
                </div>
              </div>
            )}

            {project.demoType === 'netraSim' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300">Test YOLOv8 Frame Processing & Signal Override:</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSimState(prev => ({ ...prev, trafficCount: Math.floor(Math.random() * 80) + 10 }))}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-cyan-400 text-xs hover:bg-slate-700"
                  >
                    Simulate Next Frame Batch
                  </button>
                  <button
                    onClick={() => setSimState(prev => ({ ...prev, emergencyActive: !prev.emergencyActive }))}
                    className={`px-4 py-2 rounded-xl text-xs font-bold ${simState.emergencyActive ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-800 text-slate-300'}`}
                  >
                    {simState.emergencyActive ? 'Emergency Vehicle Override ACTIVE' : 'Trigger Emergency Vehicle'}
                  </button>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">YOLOv8 Detected Vehicles:</span>
                    <span className="text-cyan-400 font-bold">{simState.trafficCount} Vehicles</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Traffic Density Classification:</span>
                    <span className="text-amber-400 font-bold">
                      {simState.trafficCount > 50 ? 'HIGH (Adaptive Timing extended)' : 'MEDIUM (Optimal Timing)'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Emergency Override Status:</span>
                    <span className={simState.emergencyActive ? 'text-red-400 font-bold' : 'text-emerald-400'}>
                      {simState.emergencyActive ? 'GREEN CORRIDOR ENGAGED (Congestion reduced 40%)' : 'NORMAL OPERATING MODE'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {project.demoType === 'foodSim' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300">Test AI Agent Query Handler (50+ Intent Types Supported):</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={simState.queryInput}
                    onChange={(e) => setSimState(prev => ({ ...prev, queryInput: e.target.value }))}
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                  <button
                    onClick={handleSimQuery}
                    className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
                  >
                    Execute API
                  </button>
                </div>
                {simState.queryResult && (
                  <div className="p-4 bg-slate-900 rounded-xl border border-cyan-500/30 text-xs text-cyan-300 leading-relaxed">
                    {simState.queryResult}
                  </div>
                )}
              </div>
            )}

          </div>
        )}

      </motion.div>
    </motion.div>
  );
}
