import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-400">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="CartOut"
          description="A shopping cart Frontend designed with React, Redux, and Tailwind CSS. Features include product listing, load more button, and responsive design."
          image="/project/cartout.png"
          demoLink="https://cartout.netlify.app/"
          githubLink="https://github.com/flexteck/mycart"
        />

        {/* Add more cards easily */}
        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion for smooth animations."
          image="/project/port-img.png"
          demoLink="https://flexxteck-portfolio.vercel.app/"
          githubLink="https://github.com/flexteck/portfolio"
        />

        <ProjectCard
        title="Robot Friend App"
        description="A fun app built with React and Tachyons. Includes a search functionality that filters robots by name based on the entered letter."
        image="/project/robotfriends.png"
        demoLink="https://kingandrenz.github.io/flexteck_react_practical/"
        githubLink="https://github.com/kingandrenz/flexteck_react_practical/tree/main/robotfriends"
        />

        <ProjectCard
        title="🍽️ Forkify Recipe App"
        description="The Forkify Recipe App is a modern React-based recipe finder that allows users to search, view, and favorite recipes. It utilizes the Forkify API to fetch real recipe data and demonstrates the use of React Context API for global state management."
        image="/project/food-recipe.png"
        demoLink="https://recipe-app-sigma-pied-22.vercel.app/"
        githubLink="https://github.com/kingandrenz/RECIPE-APP"
        />


      </div>
    </section>
  );
}
