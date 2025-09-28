import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-400">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
          <Image src="https://placehold.co/600x400/15803d/ffffff?text=EvoTracker+App" alt="EvoTracker" className="w-full h-48 object-cover" />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-indigo-300 mb-3">EvoTracker</h3>
            <p className="text-slate-400 mb-4 flex-grow">
              Fitness and nutrition tracker with authentication and D3.js visualizations.
            </p>
            <div className="mt-auto flex gap-3">
              <a href="#" className="flex-1 text-center bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg">Live Demo</a>
              <a href="#" className="flex-1 text-center bg-slate-600 hover:bg-slate-500 text-white py-2 rounded-lg">GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
