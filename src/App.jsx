import { motion } from "framer-motion";
import profileImg from "./assets/image.jpeg";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
          <h1 className="text-2xl font-bold tracking-wider">Shruti Singh</h1>

          <ul className="hidden md:flex gap-8 text-gray-400 font-medium">
            <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-orange-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-orange-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 md:px-12 py-32 gap-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 text-lg">Hello, I’m</p>

          <h1 className="text-5xl md:text-6xl font-bold mt-2">
            Shruti Singh
          </h1>

          <h2 className="text-2xl md:text-3xl mt-4 font-semibold text-orange-400">
            AI/ML Engineer & Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
            I build intelligent, scalable, and cloud-ready applications.
            Passionate about solving real-world problems using Artificial Intelligence,
            modern web technologies, and optimized system architecture.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-orange-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-orange-400 px-6 py-3 rounded-lg text-orange-400 hover:bg-orange-400 hover:text-black transition"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profileImg}
            alt="Shruti"
            className="w-80 h-80 object-cover rounded-full border-4 border-orange-400 shadow-2xl hover:scale-105 transition duration-500"
          />
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="bg-[#111111] py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-10">About Me</h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            I am a Computer Science undergraduate with a strong foundation in
            Artificial Intelligence, Full Stack Development, and Cloud Computing.
            My focus lies in designing scalable systems, building production-ready
            applications, and implementing DevOps practices for efficient deployment.
            I value clean code, optimized performance, and structured architecture.
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-4xl font-semibold mb-16">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Programming: C, C++, Java, Python",
              "Web: React, Node.js, Express, MERN",
              "Cloud & DevOps: AWS, Docker, CI/CD",
              "Core CS: DSA, OOPS, DBMS",
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1a1a1a] p-8 rounded-xl text-center text-gray-300 hover:bg-[#222222] transition shadow-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="bg-[#111111] py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-4xl font-semibold mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Fog Detection System",
                desc: "AI-powered image processing system for real-time fog detection using machine learning.",
              },
              {
                title: "Cloud Food Ordering System",
                desc: "Scalable MERN-based application integrated with AWS services and secure backend APIs.",
              },
              {
                title: "Developer Portfolio",
                desc: "Modern responsive portfolio built using React, Tailwind CSS, and Framer Motion.",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222222] transition shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-orange-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-8">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 mb-2">
            📧 ss.upes123@gmail.com
          </p>

          <p className="text-gray-400 mb-8">
            📱 +91-9369748532
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
