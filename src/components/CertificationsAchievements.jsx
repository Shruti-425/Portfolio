import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, Users, Star, CheckCircle, Sparkles } from 'lucide-react';

export default function CertificationsAchievements() {
  const certs = [
    { name: 'AWS Certified Solutions Architect – Associate (SAA-C03)', sub: 'Official AWS Practice Exam Completed', tag: 'Architect' },
    { name: 'AWS Cloud Architect', sub: 'Cloud Infrastructure Design', tag: 'Cloud' },
    { name: 'AWS Cloud Operations', sub: 'Systems Operations & Management', tag: 'SysOps' },
    { name: 'AWS Cloud Foundations', sub: 'Core AWS Services & Security', tag: 'Foundations' },
  ];

  const achievements = [
    { title: 'HackerRank Gold Badges', desc: 'Earned Gold Badges in C, C++, and Python for problem solving & coding mastery.', icon: Trophy },
    { title: 'Smart India Hackathon', desc: 'Participant in Smart India Hackathon (SIH) 2024 & 2025.', icon: Star },
    { title: 'Open Source Contributor', desc: 'Active contributor to open-source repositories and tech initiatives.', icon: Sparkles },
  ];

  const leadership = [
    {
      title: 'Batch Representative - ACM & ACM-W Chapter',
      impact: 'Represented 100+ students, facilitating seamless communication between student body and university faculty.'
    },
    {
      title: 'Event Lead - Distinguished Speaker Program (PRODIGY’24)',
      impact: 'Coordinated with 3+ industry speakers and managed an event attended by 150+ participants.'
    },
    {
      title: 'Active Member - Google Developer Groups (GDG)',
      impact: 'Participated in technical workshops, cloud study jams, and hackathons.'
    },
    {
      title: 'Campus Ambassador - Internshala',
      impact: 'Promoted 15+ internship opportunities to 200+ students.'
    },
    {
      title: 'Volunteer - Tech Community Events',
      impact: 'Mentored 20+ junior students in programming fundamentals, C++, and Python.'
    },
  ];

  return (
    <section id="achievements" className="relative py-24 bg-slate-900/40 border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="glow-orb-cyan top-1/2 left-0 w-96 h-96" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials, Awards & Community Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient-amber">Achievements</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Recognized for technical excellence in cloud architecture, competitive coding, and community engagement.
          </p>
        </div>

        {/* Top Grid: Certifications & Badges */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* AWS Certifications Block */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AWS Cloud Certifications</h3>
                  <p className="text-xs font-mono text-amber-400">Amazon Web Services Credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                {certs.map((c, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 flex items-center justify-between group hover:border-amber-500/40 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <div>
                        <h4 className="text-white font-bold text-sm group-hover:text-amber-300 transition-colors">{c.name}</h4>
                        <p className="text-slate-400 text-xs">{c.sub}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 text-[10px] font-mono rounded-md border border-amber-500/20">
                      {c.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Achievements Block */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Honors & Competitions</h3>
                  <p className="text-xs font-mono text-purple-400">Coding Badges & Hackathons</p>
                </div>
              </div>

              <div className="space-y-4">
                {achievements.map((ach, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 flex items-start gap-3 group hover:border-purple-500/40 transition"
                  >
                    <div className="p-2 bg-purple-500/10 text-purple-400 rounded-xl shrink-0">
                      <ach.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm group-hover:text-purple-300 transition-colors">{ach.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed mt-1">{ach.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Leadership & Involvement List */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Leadership & Campus Involvement</h3>
              <p className="text-xs font-mono text-cyan-400">Mentorship & Community Contributions</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {leadership.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-3 hover:border-cyan-500/40 transition"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
