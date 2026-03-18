import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Terminal, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Computer & Electrical Engineering",
    icon: <Cpu size={24} className="text-brand-rosewhite" />,
    skills: ["C", "VHDL", "Microcontrollers", "FPGA Design", "Vivado", "MATLAB"]
  },
  {
    title: "Computer Science & Artificial Intelligence",
    icon: <Terminal size={24} className="text-brand-rosewhite" />,
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "SQL", "Jupyter Notebooks", "Git"]
  },
  {
    title: "Additional Knowledge",
    icon: <Layers size={24} className="text-brand-rosewhite" />,
    skills: ["Solidworks CAD", "Microeconomics", "Data Analysis", "Model Evaluation", "Linux Machines"]
  }
];

const Skills = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
      
      gsap.fromTo(
        ".skills-header",
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
    <section id="skills" ref={sectionRef} className="py-24 pb-32">
      <div className="flex items-center gap-6 mb-16 skills-header">
        <h3 className="text-brand-text whitespace-nowrap">Technical <span className="rosewhite-gradient-text">Skills</span></h3>
        <div className="h-[1px] w-full max-w-2xl bg-brand-rosewhite-border"></div>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card portfolio-card rounded-xl p-8 hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col">
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-brand-rosewhite/10 flex items-center justify-center border border-brand-rosewhite/20">
                {category.icon}
              </div>
              <h4 className="text-xl text-brand-text">{category.title}</h4>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 font-stats text-sm text-brand-text/80 hover:bg-brand-rosewhite hover:text-brand-bg hover:border-brand-rosewhite transition-colors duration-300 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
