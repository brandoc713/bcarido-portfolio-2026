import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Senior Creative Developer",
    company: "Studio Design",
    period: "2023 - Present",
    description: "Lead developer for Awwwards-winning interactive websites. Spearheaded the transition to modern tech stacks including React, GSAP, and WebGL tailored for high-end client portfolios.",
  },
  {
    title: "UI/UX Engineer",
    company: "Digital Agency Inc",
    period: "2020 - 2023",
    description: "Designed and implemented comprehensive design systems. Bridged the gap between design and engineering, ensuring pixel-perfect execution of complex animated interfaces.",
  },
  {
    title: "Frontend Developer",
    company: "Tech Startup",
    period: "2018 - 2020",
    description: "Developed responsive web applications focused on performance and accessibility. Collaborated closely with product managers to iterate on core user flows.",
  }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
      
      gsap.fromTo(
        ".section-header",
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
    <section id="experience" ref={sectionRef} className="py-24 max-w-4xl">
      <div className="flex items-center gap-6 mb-16 section-header">
        <h3 className="text-brand-text whitespace-nowrap">Professional <span className="gold-gradient-text">Experience</span></h3>
        <div className="h-[1px] w-full bg-brand-gold-border"></div>
      </div>

      <div ref={listRef} className="flex flex-col gap-12 border-l border-brand-gold/30 ml-2 md:ml-4 pl-8 md:pl-12 relative">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item relative group">
            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-brand-bg border-2 border-brand-gold group-hover:bg-brand-gold group-hover:shadow-[0_0_10px_rgba(239,191,4,0.5)] transition-all duration-300"></div>
            
            <h4 className="text-xl md:text-2xl text-brand-text mb-1 group-hover:text-brand-gold transition-colors duration-300">
              {exp.title} <span className="text-brand-surface font-normal">@ {exp.company}</span>
            </h4>
            
            <p className="font-stats text-sm text-brand-text/50 mb-4">
              {exp.period}
            </p>
            
            <p className="text-brand-text/80 md:text-lg">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
