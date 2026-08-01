import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Cpu, Sparkles } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      company: 'Xebia',
      role: 'Software Developer Intern (AI-Powered Applications)',
      period: 'June 2026 – July 2026',
      location: 'Agile Software Engineering',
      iconColor: 'from-orange-500 to-amber-500',
      badge: 'Agile Team (15 Members)',
      metrics: [
        { label: 'Employees Managed', value: '20+' },
        { label: 'Teams Coverage', value: '5+' },
        { label: 'REST APIs Built', value: '12+' },
      ],
      points: [
        'Collaborated in a 15-member Agile team to develop the Xebia Exam Platform with secure authentication and assessment features.',
        'Engineered the Skill Coverage Optimizer to manage 20+ employees across 5+ teams through an interactive dashboard.',
        'Applied Prompt Engineering to deliver AI-powered skill-gap analysis and personalized learning recommendations.',
        'Built 12+ RESTful APIs using Node.js, Express.js, and PostgreSQL.',
        'Participated in Agile ceremonies, Git-based code reviews, and sprint planning to ensure timely feature delivery.',
      ],
      techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'AI Agents', 'Prompt Eng.', 'Agile'],
    },
    {
      company: 'IIT Kanpur',
      role: 'AI/ML Computer Vision Intern',
      period: 'June 2025 – July 2025',
      location: 'Research & Development',
      iconColor: 'from-cyan-500 to-blue-500',
      badge: '6-Member Research Team',
      metrics: [
        { label: 'Model Reliability', value: '+20%' },
        { label: 'Object Detection', value: 'YOLOv8' },
        { label: 'Deep Learning', value: 'CNN & ResNet' },
      ],
      points: [
        'Trained, evaluated, and fine-tuned deep learning computer vision models using CNN, ResNet, YOLOv8, and OpenCV for real-world image classification and detection tasks.',
        'Collaborated with a 6-member research team to refine datasets and improve image preprocessing, increasing model reliability by 20%.',
        'Authored detailed technical documentation and delivered presentations on model performance (Precision, Recall, F1-Score) to faculty and peers.',
      ],
      techStack: ['Python', 'CNN', 'ResNet', 'YOLOv8', 'OpenCV', 'Model Evaluation'],
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-slate-950/80 border-t border-slate-800/80 overflow-hidden">
      {/* Glow orb */}
      <div className="glow-orb-cyan top-1/3 -left-20 w-[30rem] h-[30rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industry Experience & Research Internships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-orange">Experience</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Delivering high-impact AI models and full-stack software solutions across industry leaders and top research institutions.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-12 relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="relative md:pl-20"
            >
              {/* Timeline marker icon */}
              <div className="hidden md:flex absolute left-3 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
                <Briefcase className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Main Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800/90 relative group">
                
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.company}
                      </h3>
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono rounded-full">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-slate-200">{exp.role}</p>
                  </div>

                  <div className="flex flex-col items-end gap-1 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </span>
                  </div>
                </div>

                {/* Impact Metrics Pills */}
                <div className="grid grid-cols-3 gap-3 mb-6 bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800/80">
                  {exp.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <span className="block text-lg sm:text-xl font-extrabold font-mono text-gradient-cyan">
                        {m.value}
                      </span>
                      <span className="text-[11px] text-slate-400">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
