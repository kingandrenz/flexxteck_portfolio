import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-padding text-center min-h-screen flex items-center justify-center bg-gradient-radial"
    >
      <div>
        <Image
          src="/flexteck.png"
          alt="Anthony Chibueze"
          width={400}
          height={400}
          priority
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-indigo-500 shadow-2xl object-cover"
        />
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
          Hi, I&apos;m <span className="text-indigo-400">Anthony Chibueze</span>
        </h1>
        <p className="text-xl sm:text-3xl text-slate-300 mb-8 font-light">
          A Passionate{" "}
          <span className="font-bold text-indigo-300">Full-Stack MERN Developer</span>
        </p>
        <p className="max-w-xl mx-auto text-slate-400 mb-10">
          I build modern, responsive, and high-performance web applications using the MERN stack.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-slate-700 hover:bg-slate-600 text-slate-200 py-3 px-8 rounded-lg shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
