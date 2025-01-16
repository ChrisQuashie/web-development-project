import chris from '../assets/images/chris.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP}  from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

function About() {
  const leftGridRef = useRef<HTMLDivElement | null>(null);
  const rightGridRef = useRef<HTMLDivElement | null >(null);

  useGSAP(() => {
    if (leftGridRef.current) {
      const elements = leftGridRef.current.querySelectorAll('div');
      gsap.from(elements, {
        x: -3,
        opacity: 0.5,
        stagger: 0.3,
        ease: 'circ.inOut',
        scrollTrigger: {
          trigger: leftGridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Right Grid Animation
    if (rightGridRef.current) {
      const elements = rightGridRef.current.querySelectorAll('h1, p');
      gsap.from(elements, {
        x: 3,
        opacity: 0.5,
        stagger: 0.3,
        ease: 'circ.inOut',
        scrollTrigger: {
          trigger: rightGridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);

  return (
    <section id="about" className="lg:h-screen relative py-10">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 left-0 w-28 h-28 rounded-full bg-purple-400 blur-3xl"></div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 grid-rows-auto h-full gap-10 lg:gap-0">
        {/* Hero Image Section */}
        <div ref={leftGridRef} className="flex items-center justify-center py-10">
          <div className="left-grid w-[300px] h-[400px] lg:w-[400px] lg:h-[550px] bg-gradient-to-tr from-purple-500 to-purple-400 via-purple-300 rounded-lg shadow-lg flex items-center justify-center px-6">
            <img className='lg:h-auto' src={chris} alt="Chris Quashie" />
          </div>
        </div>

        {/* Content Section */}
        <div ref={rightGridRef} className="flex flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-medium text-white">
            IT professional With a Passion For Cyber Security.
          </h1>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
            Hello, I'm Chris Quashie, a talented, ambitious, and hardworking individual with broad skills and experience
            in Information Technology and cybersecurity.
          </p>
          <div className="flex justify-center lg:justify-start w-full">
            <a href="tel:4047895939">
              <button
                className="w-36 lg:w-40 h-12 lg:h-14 bg-gradient-to-tr from-purple-600 to-purple-400 via-purple-500
                  rounded-md text-white font-semibold transition-transform duration-500 hover:scale-110 shadow-md"
              >
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
