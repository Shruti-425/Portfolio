import { ArrowUp, Cpu, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <span className="text-white font-bold tracking-wider">SHRUTI</span>
            <p className="text-[10px] text-slate-500">Computer Science (CCVT) • UPES Dehradun</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <span>Designed & Built with 3D WebGL, React & Tailwind</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition hover:scale-110 flex items-center gap-2 group"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          <span>Top</span>
        </button>

      </div>
    </footer>
  );
}
