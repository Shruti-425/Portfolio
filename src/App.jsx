import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsAchievements from './components/CertificationsAchievements';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AIAgentTerminal from './components/AIAgentTerminal';
import { Terminal } from 'lucide-react';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative">

      {/* Glassmorphic Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsAchievements />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Terminal Trigger Widget */}
      <button
        onClick={() => setTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 text-slate-950 shadow-2xl shadow-cyan-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center gap-2 border border-white/20"
        title="Launch Interactive AI Terminal"
      >
        <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-mono font-extrabold text-xs tracking-wider uppercase">
          AI Agent
        </span>
      </button>

      {/* AI Agent Terminal Simulator Modal */}
      <AIAgentTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

    </div>
  );
}

