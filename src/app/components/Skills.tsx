import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-400">My Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg text-center">
          <FaReact className="text-4xl text-sky-400 mb-3 mx-auto" />
          <h3 className="text-xl font-semibold">Frontend</h3>
          <p className="text-slate-400 text-sm mt-2">React, Redux, Tailwind</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-lg text-center">
          <FaNodeJs className="text-4xl text-green-500 mb-3 mx-auto" />
          <h3 className="text-xl font-semibold">Backend</h3>
          <p className="text-slate-400 text-sm mt-2">Node.js, Express</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-lg text-center">
          <FaDatabase className="text-4xl text-indigo-400 mb-3 mx-auto" />
          <h3 className="text-xl font-semibold">Databases</h3>
          <p className="text-slate-400 text-sm mt-2">MongoDB, PostgreSQL</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-lg text-center">
          <FaGitAlt className="text-4xl text-red-600 mb-3 mx-auto" />
          <h3 className="text-xl font-semibold">Tools</h3>
          <p className="text-slate-400 text-sm mt-2">Git, Docker, AWS</p>
        </div>

      </div>
    </section>
  );
}
