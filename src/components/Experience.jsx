import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Teaching Assistant",
    company: "Dartmouth College",
    period: "September 2025 - March 2026",
    description: "I served as a teaching assistant for the Control Theory course (ENGS 26) at Dartmouth College and will also be TAing the Systems course (ENGS 20) during the Winter 2026 term. For Control Theory, I hosted regular in‑person office hours to tutor students on concepts such as feedback loops, system stability, and state‑space analysis. In both roles, I am responsible for providing one‑on‑one assistance and grading homework assignments, offering detailed feedback that helps students strengthen their problem‑solving skills and deepen their understanding of the material.",
    logo: "/images/Experiences/thayerLogo.png",
    logoScale: 0.72, // Numeric scale: 1 = default, 0.8 = smaller, 1.5 = bigger
  },
  {
    title: "Product Engineering Intern",
    company: "YourEDU",
    period: "June 2025 - September 2025",
    description: "As a Product Engineering Intern at YourEDU, I was responsible for developing and maintaining critical data infrastructure for \"Academic Paths\" and \"College Search\", leveraging Supabase to manage comprehensive academic and application requirements for over 300 universities and 50 states, which resulted in a robust and accurate backend. I also brainstormed and implemented front-end platform designs using HTML to visually present complex academic and application data, significantly enhancing user experience and data comprehension. Furthermore, I executed a high-volume email outreach campaign, facilitating the sending and tracking of over 1,000 communications to potential university partners, demonstrating strong operational efficiency and contributing to partnership development.",
    logo: "/images/Experiences/youredu_logo.jpg", // Replace with e.g. "/images/logos/digital-agency.png"
  },
  {
    title: "People Analytics Intern",
    company: "Genesys",
    period: "May 2024 - August 2024",
    description: "As a People Analytics Intern, I leveraged SQL to run complex queries, creating a centralized viewpoint for Workforce Analytics. I collaborated closely with the People Analytics team to problem-solve and develop innovative solutions for internal challenges. By analyzing data, I identified quantifiable trends that provided actionable HR insights, enabling evidence-based decision-making across the organization.",
    logo: "/images/Experiences/genesys.jpg", // Replace with e.g. "/images/logos/tech-startup.png"
  },
  {
    title: "Mentor",
    company: "Curious Cardinals",
    period: "January 2024 - May 2025",
    description: "As a Mentor, I fostered a spirit of inquiry and exploration in aspiring individuals aged 11-17 through a tailored matching process. I designed and delivered personalized lessons via Zoom, focusing on the unique interests and fields of each mentee. By creating individualized learning plans and managing a full schedule of mentees, I ensured seamless teaching and meaningful growth for every participant.",
    logo: "/images/Experiences/cc.jpeg",
  },
  {
    title: "Quantitative Reasoning Center Peer Tutor",
    company: "Vassar College",
    period: "September 2022 - May 2025",
    description: "As a Q-Tutor at Vassar College, I instructed and encouraged peers in Mathematics, Physics, and Economics, providing support with assignments and coursework. I dedicated 8 hours weekly to working with an average of 12 students, offering guidance and fostering their academic success. My role involved not only teaching but also motivating students to overcome challenges and achieve their goals.",
    logo: "/images/Experiences/qcenter.png",
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
        <h3 className="text-brand-text whitespace-nowrap">Professional <span className="rosewhite-gradient-text">Experience</span></h3>
        <div className="h-[1px] w-full bg-brand-rosewhite-border"></div>
      </div>

      <div ref={listRef} className="flex flex-col gap-12 border-l border-brand-rosewhite/30 ml-2 md:ml-4 pl-8 md:pl-12 relative">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item relative group">
            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-brand-bg border-2 border-brand-rosewhite group-hover:bg-brand-rosewhite group-hover:shadow-[0_0_10px_rgba(239,191,4,0.5)] transition-all duration-300"></div>

            <div className="flex items-center justify-between gap-6">
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl text-brand-text mb-1 group-hover:text-brand-rosewhite transition-colors duration-300">
                  {exp.title} <span className="text-brand-surface font-normal">@ {exp.company}</span>
                </h4>

                <p className="font-stats text-sm text-brand-text/50 mb-4">
                  {exp.period}
                </p>

                <p className="text-brand-text/80 md:text-lg">
                  {exp.description}
                </p>
              </div>

              {exp.logo ? (
                <div className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] rounded-full border border-brand-rosewhite/30 flex-shrink-0 bg-white overflow-hidden">
                  <img src={exp.logo} alt={exp.company} style={{ transform: `scale(${exp.logoScale || 1})` }} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] rounded-full bg-white border border-brand-rosewhite/30 flex items-center justify-center text-brand-bg font-bold text-xl flex-shrink-0">
                  {exp.company.charAt(0)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
