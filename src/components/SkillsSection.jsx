import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, 
  Code, 
  Cloud, 
  Database, 
  Terminal, 
  Cpu, 
  CheckCircle, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers },
    { id: 'ai', name: 'AI & Computer Vision', icon: BrainCircuit },
    { id: 'web', name: 'Web & Full-Stack', icon: Code },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'db', name: 'Databases & Tools', icon: Database },
    { id: 'core', name: 'Core CS & Languages', icon: Cpu },
  ];

  const skillItems = [
    // AI & Computer Vision
    { name: 'Computer Vision & OpenCV', category: 'ai', level: 92, tag: 'High Proficiency' },
    { name: 'YOLOv8 & ResNet', category: 'ai', level: 90, tag: 'Deep Learning' },
    { name: 'TensorFlow & CNNs', category: 'ai', level: 88, tag: 'Model Training' },
    { name: 'AI Agents & Prompt Eng.', category: 'ai', level: 90, tag: 'LLM & Workflows' },
    { name: 'Model Evaluation (Precision/Recall)', category: 'ai', level: 92, tag: 'F1-Score Metrics' },
    { name: 'NumPy & Pandas', category: 'ai', level: 90, tag: 'Data Science' },

    // Web & Full-Stack
    { name: 'Node.js & Express.js', category: 'web', level: 92, tag: 'Backend REST APIs' },
    { name: 'React.js & JavaScript (ES6+)', category: 'web', level: 88, tag: 'Frontend SPA' },
    { name: 'RESTful API Architecture', category: 'web', level: 94, tag: '12+ APIs Built' },
    { name: 'MERN Stack Development', category: 'web', level: 90, tag: 'Full-Stack' },
    { name: 'HTML5 & CSS3 / Tailwind', category: 'web', level: 90, tag: 'UI Styling' },

    // Cloud & DevOps
    { name: 'AWS (EC2, S3, Lambda, IAM)', category: 'cloud', level: 88, tag: 'Certified Associate' },
    { name: 'AWS (RDS, DynamoDB, Cognito)', category: 'cloud', level: 85, tag: 'Cloud DB & Auth' },
    { name: 'Docker & Containerization', category: 'cloud', level: 86, tag: 'DevOps' },
    { name: 'Kubernetes & Serverless', category: 'cloud', level: 82, tag: 'Orchestration' },
    { name: 'Git, GitHub Actions & Jenkins', category: 'cloud', level: 90, tag: 'CI/CD Pipelines' },

    // Databases & Tools
    { name: 'PostgreSQL & MySQL', category: 'db', level: 90, tag: '15+ Relational Tables' },
    { name: 'MongoDB & DynamoDB', category: 'db', level: 86, tag: 'NoSQL' },
    { name: 'Linux Command Line', category: 'db', level: 88, tag: 'SysAdmin & Terminal' },
    { name: 'Figma, Canva & MS Excel', category: 'db', level: 85, tag: 'Design & Analytics' },

    // Core CS & Languages
    { name: 'C++ & C', category: 'core', level: 92, tag: 'HackerRank Gold Badge' },
    { name: 'Python', category: 'core', level: 95, tag: 'HackerRank Gold Badge' },
    { name: 'Data Structures & Algorithms', category: 'core', level: 90, tag: 'Core CS' },
    { name: 'Object-Oriented Programming', category: 'core', level: 92, tag: 'OOP Design' },
    { name: 'Operating Systems & Networks', category: 'core', level: 88, tag: 'CS Fundamentals' },
    { name: 'Database Management Systems', category: 'core', level: 90, tag: 'DBMS Architecture' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-slate-900/30 overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb-purple bottom-10 left-10 w-96 h-96" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Tech Stack Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-cyan">Skills & Expertise</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Hover over cards for 3D perspective feedback. Filter by category to explore specific proficiencies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* 3D Skill Cards Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between group relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-xs font-mono text-cyan-400/80">{skill.tag}</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="mt-2 space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>Proficiency</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
