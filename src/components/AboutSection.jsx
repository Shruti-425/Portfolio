import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Layers, Terminal, Sparkles } from 'lucide-react';
import profileImg from '../assets/image.jpeg';

export default function AboutSection() {
  const highlights = [
    {
      title: 'B.Tech CS (CCVT)',
      institution: 'UPES Dehradun (2023 – 2027)',
      detail: 'CGPA: 7.6/10 • Specializing in Cloud Computing & Virtualization Tech',
      icon: GraduationCap,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'AI & Computer Vision Specialist',
      institution: 'IIT Kanpur Intern & ML Researcher',
      detail: 'Trained CNN, ResNet, YOLOv8 models for real-world image classification & object detection.',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Full-Stack & AI Agents Engineer',
      institution: 'Xebia Software Developer Intern',
      detail: 'Engineered Skill Coverage Optimizer, Exam Platform, and 12+ RESTful APIs with Node.js/PostgreSQL.',
      icon: Terminal,
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950/60 border-y border-slate-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="glow-orb-cyan -top-20 right-10 w-96 h-96" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Background & Engineering Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Shruti</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Passionately bridging the gap between theoretical Artificial Intelligence research and scalable, production-grade cloud architectures.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with 3D perspective wrapper */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md group perspective-1000">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 opacity-75 blur-xl group-hover:opacity-100 transition duration-700 animate-pulse-glow" />
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden p-3 shadow-2xl transition duration-500 group-hover:rotate-y-3 group-hover:rotate-x-2">
                <img
                  src={profileImg}
                  alt="Shruti"
                  className="w-full h-96 object-cover rounded-xl shadow-inner filter brightness-105 group-hover:scale-105 transition duration-500"
                />
                <div className="p-4 bg-slate-950/90 rounded-xl mt-3 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-base">Shruti</h4>
                      <p className="text-cyan-400 text-xs font-mono">B.Tech CS (CCVT) • UPES Dehradun</p>
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono rounded-md">
                      2023 - 2027
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Details & Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-cyan-400" />
                <span>Engineering Philosophy</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-base mb-4">
                I specialize in <strong className="text-cyan-300">Artificial Intelligence</strong> and <strong className="text-purple-300">Cloud Computing</strong> with hands-on expertise spanning Deep Learning (CNNs, ResNet, YOLOv8), Computer Vision, AI Agents, and full-stack API development.
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                Whether fine-tuning real-time object detection models at <strong className="text-cyan-400">IIT Kanpur</strong> or engineering high-throughput microservices and prompt-engineered recommendation pipelines at <strong className="text-cyan-400">Xebia</strong>, my focus is delivering clean, maintainable, and reliable software.
              </p>
            </div>

            {/* Highlights List */}
            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} p-[1px] mb-3`}>
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-cyan-400 text-xs font-mono mb-2">{item.institution}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
