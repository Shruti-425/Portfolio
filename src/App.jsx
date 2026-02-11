import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
          <h1 className="text-2xl font-bold tracking-wide">Shruti</h1>

          <ul className="hidden md:flex gap-8 text-gray-400 font-medium">
            <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="#skills" className="hover:text-orange-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-orange-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>

          <button className="bg-orange-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
            Hire Me
          </button>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 md:px-12 py-28 gap-16"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 text-lg">Hi, I am</p>

          <h1 className="text-5xl md:text-6xl font-bold mt-2">
            Shruti
          </h1>

          <h2 className="text-3xl md:text-4xl mt-3 font-semibold">
            <span className="text-orange-400">Full Stack</span> Developer
          </h2>

          <p className="text-gray-400 mt-6 max-w-md leading-relaxed">
            Computer Science undergraduate focused on full stack development,
            cloud computing, and scalable systems.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-orange-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Hire Me
            </button>

            <button className="border border-orange-400 px-6 py-3 rounded-lg text-orange-400 hover:bg-orange-400 hover:text-black transition">
              Download CV
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Glow background */}
          <div className="absolute w-80 h-80 bg-orange-400/20 blur-3xl rounded-full"></div>

          {/* Dark circle */}
          <div className="absolute w-72 h-72 bg-[#1f1f1f] rounded-full"></div>

          {/* Profile Image */}
          <img
            src="/image.jpeg"
            alt="Shruti"
            className="relative z-10 w-56 h-56 object-cover rounded-full border-4 border-orange-400 shadow-lg"
          />
        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="bg-[#111111] py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-4xl font-semibold mb-16">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "C / C++ / Java / Python",
              "HTML / CSS / JS / MERN",
              "AWS / Docker / CI-CD",
              "DSA / OOPS / DBMS",
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1a1a1a] p-8 rounded-xl text-center text-gray-300 hover:bg-[#222222] transition"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-4xl font-semibold mb-16">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Fog Detection System",
              "Cloud Food Ordering System",
              "Portfolio Website",
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-[#151515] p-8 rounded-xl hover:bg-[#1f1f1f] transition"
              >
                <h3 className="text-xl font-semibold mb-4">{project}</h3>
                <p className="text-gray-400 text-sm">
                  Real-world project showcasing system design and problem solving.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="bg-[#111111] py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>

          <p className="text-gray-400 mb-6">
            ss.upes123@gmail.com
          </p>

          <div className="flex justify-center gap-8 text-orange-400 font-medium">
            <a href="https://github.com/Shruti-425" target="_blank" rel="noreferrer" className="hover:text-white transition">
              GitHub
            </a>
            <a href="https://leetcode.com/u/Shruti_12-34/" target="_blank" rel="noreferrer" className="hover:text-white transition">
              LeetCode
            </a>
            <a href="https://www.credly.com/users/shruti.57197566/badges" target="_blank" rel="noreferrer" className="hover:text-white transition">
              Credly
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

