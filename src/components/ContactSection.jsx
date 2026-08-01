import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Code2, Award, BookOpen, Sparkles, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const contactInfo = [
    { label: 'Phone', value: '+91-9369748532', icon: Phone, field: 'phone' },
    { label: 'Email', value: 'ss.ups123@gmail.com', icon: Mail, field: 'email' },
    { label: 'Location', value: 'Dehradun / India', icon: MapPin, field: 'loc' },
  ];

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(null), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb-cyan top-1/3 -right-20 w-96 h-96" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build <span className="text-gradient-cyan">Something Intelligent</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Whether you have an internship offer, full-time role opportunity, research proposal, or technical query, feel free to drop a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">Direct Contact Information</h3>
              <p className="text-slate-400 text-sm">Click to copy email or phone number to your clipboard instantly.</p>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.field}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 block">{info.label}</span>
                        <span className="text-white font-bold text-sm">{info.value}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy(info.value, info.field)}
                      className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 transition"
                      title="Copy to Clipboard"
                    >
                      {copiedField === info.field ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Profile Links */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">Official Platform Links</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/Shruti-425"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition flex items-center gap-2 text-xs font-mono"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" /> GitHub Profile
                </a>
                <a
                  href="https://leetcode.com/u/Shruti_12-34/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition flex items-center gap-2 text-xs font-mono"
                >
                  <Code2 className="w-4 h-4 text-amber-400" /> LeetCode Profile
                </a>
                <a
                  href="https://www.credly.com/users/shruti.57197566/badges"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-orange-400 hover:border-orange-500/40 transition flex items-center gap-2 text-xs font-mono"
                >
                  <Award className="w-4 h-4 text-orange-400" /> Credly Badges
                </a>
                <a
                  href="https://learn.microsoft.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/40 transition flex items-center gap-2 text-xs font-mono"
                >
                  <BookOpen className="w-4 h-4 text-purple-400" /> Microsoft Learn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="e.g. AI Internship Opportunity / Technical Collaboration"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Message</label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Write your message details here..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-slate-950 font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{formStatus === 'sending' ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>

                {formStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center animate-bounce">
                    ✓ Message successfully transmitted! Thank you for reaching out.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
