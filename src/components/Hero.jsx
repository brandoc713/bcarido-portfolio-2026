import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LogoBackgroundAnimation from './bkgdAnimation.jsx';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const bkgdRef = useRef(null);
  const picRef = useRef(null);

  useEffect(() => {
    // Entrance Animation
    const ctx = gsap.context(() => {
      // Fade in background animation
      gsap.fromTo(
        bkgdRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power3.out", delay: 0.1 }
      );

      gsap.fromTo(
        picRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
      );

      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[70vh] scroll-mt-[88px] md:scroll-mt-[104px] flex flex-col justify-center items-start overflow-hidden pt-10">
      {/* <div ref={bkgdRef} className="absolute inset-0 z-0">
        <LogoBackgroundAnimation />
      </div> */}

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl z-10 mx-auto mt-0 gap-12">
        <div ref={textRef} className="max-w-2xl w-full">
          <p className="font-stats text-brand-rosewhite mb-2 tracking-wider uppercase text-sm md:text-base">
            Hi, my name is
          </p>

          <h1 className="text-brand-text mb-2 leading-tight">
            Brandon Carido.
          </h1>

          <p className="font-body text-brand-text/90 text-lg md:text-xl max-w-2xl mb-6">
            I'm a final-year Master's student at Dartmouth's Thayer School of Engineering studying Computer Engineering with a focus on <span className="rosewhite-gradient-text font-bold">Edge AI and embedded systems</span>. I am passionate about learning where the intersection of hardware and software meets in the context of the ever expanding post-AI world.
          </p> 

          <div className="flex w-full justify-center mt-4 gap-4">
            <a
              href="#experience"
              className="px-10 py-4 rounded-full border border-brand-rosewhite text-brand-rosewhite font-bold font-heading text-xl hover:scale-105 hover:bg-brand-rosewhite hover:text-brand-bg transition-all duration-300"
            >
              View Experiences
            </a>
            <a
              href="#projects"
              className="px-10 py-4 rounded-full border border-brand-rosewhite text-brand-rosewhite font-bold font-heading text-xl hover:scale-105 hover:bg-brand-rosewhite hover:text-brand-bg transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 relative pr-4 md:pr-12 lg:pr-20">
          <img
            ref={picRef}
            src="/images/websitePFP_Fixed.png"
            alt="Brandon Carido"
            className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full border-4 border-brand-rosewhite shadow-[0_0_30px_rgba(242,212,215,0.3)] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="w-full z-10 mt-10 border-t border-brand-rosewhite/30">
        <h2 className="w-full px-6 py-6 text-brand-text leading-tight font-body text-center">
            <span>
              "The tools for learning are abundant. It's the desire to learn that's scarce."
              <br />
              <span className="font-bold">- Naval Ravikant (Dartmouth '95)</span>
            </span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
