import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Awwwards Winning Portfolio",
    className: "Web Development",
    description: "A highly interactive, WebGL-powered portfolio showcasing creative coding techniques smoothly integrated with React.",
    techStack: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "E-Commerce Experience",
    className: "Fullstack Architecture",
    description: "Next-gen headless e-commerce storefront with seamless micro-animations enhancing the shopping experience.",
    techStack: ["Next.js", "Shopify", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Financial Dashboard UI",
    className: "Data Visualization",
    description: "Complex financial data visualized through sleek, interactive charts with a strictly maintained dark-mode atomic design system.",
    techStack: ["Vue", "D3.js", "Sass"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "AI Prompt Generator",
    className: "Generative Tooling",
    description: "An AI-powered tool for copywriters to generate contextual prompts using OpenAI's API with streaming responses.",
    techStack: ["React", "Node.js", "OpenAI", "Redis"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(
        ".projects-header",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="flex items-center gap-6 mb-16 projects-header">
        <h3 className="text-brand-text whitespace-nowrap">Selected <span className="gold-gradient-text">Projects</span></h3>
        <div className="h-[1px] w-full max-w-2xl bg-brand-gold-border"></div>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
        {projects.map((project, index) => (
          <div key={index} className="project-card portfolio-card rounded-xl p-6 md:p-8 flex flex-col h-full group transition-transform duration-500 hover:-translate-y-2">
            
            {/* Image Placeholder */}
            <div className="w-full h-48 md:h-64 rounded-lg bg-gradient-to-br from-brand-bg to-[#111] border border-brand-gold/10 mb-6 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-brand-gold/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <span className="text-brand-text/20 font-stats opacity-50 group-hover:scale-110 transition-transform duration-700">Image Placeholder</span>
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-stats text-brand-surface text-sm mb-2">{project.className}</p>
                <h4 className="text-2xl text-brand-text group-hover:text-brand-gold transition-colors">{project.title}</h4>
              </div>
              <div className="flex gap-4">
                <a href={project.githubUrl} className="text-brand-text/70 hover:text-brand-gold transition-colors"><Github size={20} /></a>
                <a href={project.liveUrl} className="text-brand-text/70 hover:text-brand-gold transition-colors"><ExternalLink size={20} /></a>
              </div>
            </div>

            <p className="text-brand-text/80 mb-6 flex-grow">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-3 font-stats text-sm text-brand-text/60">
              {project.techStack.map((tech, i) => (
                <li key={i} className="px-3 py-1 rounded bg-white/5 border border-white/5 whitespace-nowrap">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
