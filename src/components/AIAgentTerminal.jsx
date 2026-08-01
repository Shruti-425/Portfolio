import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles, RefreshCw, Cpu } from 'lucide-react';

export default function AIAgentTerminal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: '🤖 Welcome to Shruti-AI Agent v2.4 Terminal Interface.'
    },
    {
      type: 'system',
      text: 'Type "help" or click any prompt chip below to query Shruti\'s profile, resume, skills, or projects.'
    }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickPrompts = [
    'help',
    'skills',
    'projects',
    'experience',
    'education',
    'contact'
  ];

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    // Add user command log
    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({
          type: 'agent',
          text: `AVAILABLE COMMANDS:
  - skills       : Inspect full technical stack & AI expertise
  - projects     : View key AI & Full-Stack projects (NETRA, Fog Detection, Food Ordering)
  - experience   : Detailed internship summary (Xebia, IIT Kanpur)
  - education    : B.Tech CS (CCVT) at UPES Dehradun & CGPA
  - certs        : AWS Certifications & HackerRank Gold Badges
  - contact      : Phone, Email, GitHub, LinkedIn, LeetCode links
  - clear        : Clear terminal screen`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'agent',
          text: `TECHNICAL SKILLS OVERVIEW:
  • Languages: C++, Python, C
  • Web & Full-Stack: HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, MERN Stack
  • Cloud & DevOps: AWS (EC2, S3, IAM, Lambda, Cognito, RDS, DynamoDB), Docker, Kubernetes, Git, GitHub Actions, Jenkins, Serverless Architecture
  • Artificial Intelligence: Machine Learning, Deep Learning (CNN), Computer Vision, OpenCV, YOLOv8, TensorFlow, AI Agents, Prompt Engineering, Model Evaluation, Image Processing, NumPy, Pandas
  • Databases: PostgreSQL, MySQL, SQLite, MongoDB, DynamoDB
  • Tools & Platforms: Linux, Figma, Canva, MS Excel`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'agent',
          text: `FEATURED PROJECTS:
  1. Fog Detection using Deep Learning (Python, TensorFlow, OpenCV, CNN)
     - 90% Test Accuracy achieved in fog vs no-fog classification.
     - Deployed via Flask API for real-time camera feed inference.

  2. NETRA - Intelligent Traffic Management System (Python, YOLOv8, OpenCV)
     - Computer vision pipeline across 3,600+ video frames.
     - Reduced traffic congestion by 40% with adaptive signal control & emergency override.

  3. AI-Powered Food Ordering Platform (Node.js, Express.js, PostgreSQL, AI Agents)
     - Conversational AI agent handling 50+ customer query types.
     - Scalable backend with 15+ PostgreSQL tables & JWT security.`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'agent',
          text: `WORK EXPERIENCE SUMMARY:
  • Xebia | Software Developer Intern (AI-Powered Applications) [June 2026 – July 2026]
    - Built Skill Coverage Optimizer (20+ employees, 5+ teams).
    - Applied Prompt Engineering for AI skill-gap analysis & learning recs.
    - Built 12+ RESTful APIs with Node.js, Express, & PostgreSQL.

  • IIT Kanpur | AI/ML Computer Vision Intern [June 2025 – July 2025]
    - Fine-tuned CNN, ResNet, YOLOv8, and OpenCV computer vision models.
    - Increased dataset reliability by 20% in 6-member research team.`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'agent',
          text: `EDUCATION CREDENTIALS:
  • Degree: B.Tech in Computer Science (CCVT)
  • Institution: UPES Dehradun
  • Duration: 2023 – 2027
  • CGPA: 7.6 / 10`
        });
        break;

      case 'certs':
      case 'certifications':
        newHistory.push({
          type: 'agent',
          text: `CERTIFICATIONS & HONORS:
  • AWS Certified Solutions Architect – Associate (SAA-C03) Practice Exam
  • AWS Cloud Architect | AWS Cloud Operations | AWS Cloud Foundations
  • HackerRank Gold Badges in C, C++, and Python
  • Smart India Hackathon (SIH) 2024 & 2025 Participant`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'agent',
          text: `CONTACT & PROFILES:
  • Phone: +91-9369748532
  • Email: ss.ups123@gmail.com
  • GitHub: https://github.com/Shruti-425
  • LeetCode: https://leetcode.com/u/Shruti_12-34/
  • Credly: https://www.credly.com/users/shruti.57197566/badges`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'agent',
          text: `Command "${cmd}" not recognized. Type "help" for valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-slate-950 border border-cyan-500/40 rounded-3xl max-w-3xl w-full h-[550px] flex flex-col shadow-2xl shadow-cyan-500/20 overflow-hidden relative"
      >
        {/* Terminal Header */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5 ml-2">
              <TerminalIcon className="w-4 h-4 text-cyan-400" />
              shruti-ai-agent:~ (bash)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Prompts Bar */}
        <div className="bg-slate-900/60 px-6 py-2 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest shrink-0">Quick Queries:</span>
          {quickPrompts.map((p) => (
            <button
              key={p}
              onClick={() => handleCommand(p)}
              className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-cyan-500/20 text-cyan-300 border border-slate-700 text-xs font-mono shrink-0 transition"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Output Window */}
        <div className="flex-1 p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'user' && (
                <span className="text-cyan-400 font-bold">{item.text}</span>
              )}
              {item.type === 'system' && (
                <span className="text-purple-400 font-semibold">{item.text}</span>
              )}
              {item.type === 'agent' && (
                <pre className="text-slate-200 whitespace-pre-wrap font-mono leading-relaxed bg-slate-900/70 p-3 rounded-xl border border-slate-800/80">
                  {item.text}
                </pre>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="p-4 bg-slate-900 border-t border-slate-800 flex items-center gap-3"
        >
          <span className="text-cyan-400 font-mono font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command ('help', 'skills', 'projects')..."
            className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none placeholder-slate-500"
            autoFocus
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition font-bold"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>

      </motion.div>
    </motion.div>
  );
}
