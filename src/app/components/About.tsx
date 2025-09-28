export default function About() {
  return (
    <section id="about" className="section-padding">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-400">
        About Anthony
      </h2>
      <div className="max-w-4xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
        <p className="text-lg text-slate-300 mb-4">
          I am a dedicated <b>Full-Stack Engineer</b> specializing in the <b>MERN stack</b>.
        </p>
        <p className="text-lg text-slate-300">
          My core philosophy centers on <b>clean code, testing, and performance optimization</b>. 
          I reduced page load time by 40% on a recent project via lazy loading and code splitting.
        </p>
      </div>
    </section>
  );
}
