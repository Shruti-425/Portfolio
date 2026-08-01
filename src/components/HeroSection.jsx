import { motion } from 'framer-motion';
import { 
  Code2, 
  Award, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  Bot, 
  BrainCircuit, 
  Cloud,
  CheckCircle2,
  Globe
} from 'lucide-react';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import profileImg from '../assets/image.jpeg';

// Custom SVG Icons for GitHub & LinkedIn
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function HeroSection({ onOpenTerminal }) {
  const quickStats = [
    { label: 'CGPA', value: '7.6/10', sub: 'UPES Dehradun' },
    { label: 'Model Accuracy', value: '90%', sub: 'Fog Detection AI' },
    { label: 'Traffic Congestion', value: '-40%', sub: 'NETRA System' },
    { label: 'RESTful APIs', value: '12+', sub: 'Xebia Exam Platform' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/Shruti-425', color: 'hover:text-cyan-400' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { name: 'LeetCode', icon: Code2, href: 'https://leetcode.com/u/Shruti_12-34/', color: 'hover:text-amber-400' },
    { name: 'Credly', icon: Award, href: 'https://www.credly.com/users/shruti.57197566/badges', color: 'hover:text-orange-400' },
    { name: 'MS Learn', icon: BookOpen, href: 'https://learn.microsoft.com', color: 'hover:text-purple-400' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Orbs */}
      <div className="glow-orb-cyan top-1/4 -left-20 w-96 h-96" />
      <div className="glow-orb-purple top-1/3 -right-20 w-[30rem] h-[30rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for AI / Software Engineering Internships & Roles</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
              Hi, I'm <span className="text-gradient-cyan">SHRUTI</span>
            </h1>

            {/* Tagline / Specialties */}
            <div className="flex flex-wrap items-center gap-3 text-lg sm:text-xl font-semibold mb-6">
              <span className="px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center gap-1.5">
                <BrainCircuit className="w-5 h-5 text-purple-400" /> AI & Computer Vision
              </span>
              <span className="px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
                <Cloud className="w-5 h-5 text-cyan-400" /> Cloud & DevOps
              </span>
              <span className="px-3 py-1 rounded-md bg-orange-950/60 border border-orange-500/30 text-orange-300 flex items-center gap-1.5">
                <Bot className="w-5 h-5 text-orange-400" /> Full-Stack & AI Agents
              </span>
            </div>

            {/* Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Computer Science undergraduate specializing in <strong className="text-cyan-300">Artificial Intelligence</strong> and <strong className="text-purple-300">Cloud Computing</strong>. Experienced in building production-oriented AI applications using <span className="font-mono text-cyan-400">YOLOv8</span>, <span className="font-mono text-cyan-400">TensorFlow</span>, <span className="font-mono text-cyan-400">OpenCV</span>, <span className="font-mono text-cyan-400">Node.js</span>, <span className="font-mono text-cyan-400">PostgreSQL</span>, and <span className="font-mono text-cyan-400">AWS</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore 3D Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-400 border border-cyan-500/40 font-mono text-sm font-semibold shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Launch Interactive AI</span>
              </button>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mr-2">Connect:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.name}
                    className={`p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 ${social.color} hover:border-cyan-500/40 hover:bg-slate-800 transition-all hover:scale-110`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Hero Canvas & Profile Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* 3D WebGL Canvas Layer */}
            <div className="w-full relative">
              <ThreeHeroCanvas />

              {/* Floating Profile Avatar Frame overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative group pointer-events-auto">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse-glow" />
                  <img
                    src={profileImg}
                    alt="Shruti"
                    className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-slate-950 shadow-2xl transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Shruti • UPES CS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Quick Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800/80 flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all" />
              <span className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan font-mono mb-1">
                {stat.value}
              </span>
              <span className="text-slate-200 font-medium text-sm mb-0.5">{stat.label}</span>
              <span className="text-slate-400 text-xs font-mono">{stat.sub}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
