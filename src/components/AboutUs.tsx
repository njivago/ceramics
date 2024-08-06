"use client";

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [headingRef, headingInView] = useInView({ threshold: 0.2 });

  return (
    <section id='about-us' className="container relative mx-auto pb-60 bg-feature-bg bg-no-repeat">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Про нас</h1>
    <div ref={aboutRef} className="flex flex-col md:flex-row justify-between gap-10 mb-40 ">
      <div className={`shadow-lg bg-white rounded-lg p-6 w-full md:w-1/2 border-solid transition-all duration-3000 border-2 border-gray duration-1000 md:hover:translate-y-10 ${aboutInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <Image 
          className={`mx-auto rounded-md transition-all duration-1000 mb-4 ${aboutInView ? 'opacity-100' : 'opacity-0'}`}
          src="/images/guaranty.png" // Replace with the correct path to your image
          alt="Гарантія" 
          width={360} 
          height={420} 
          priority
        />
        <h3 className={`text-xl font-semibold transition-all duration-1000 text-gray-800 mb-2 ${aboutInView ? 'translate-x-0 opacity-100' : 'translate-x-7 opacity-0'}`}>Гарантія</h3>
        <p className={`text-gray-600 transition-all duration-1000 ${aboutInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          Ми гарантуємо високу якість нашої продукції та послуг. Ваша задоволеність — наш пріоритет.
        </p>
      </div>
      <div className={`shadow-lg bg-white rounded-lg p-6 w-full transition-all duration-3000 md:w-1/2 border-solid border-2 border-gray duration-1000 md:hover:translate-y-0 ${aboutInView ? 'translate-y-10 opacity-100' : 'translate-y-0 opacity-0'}`}>
        <Image
          className={`mx-auto transition-all duration-1000 rounded-md mb-4 ${aboutInView ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
          src="/images/prod.png" // Replace with the correct path to your image
          alt="Власне виробництво" 
          width={360} 
          height={420}
          priority
        />
        <h3 className={`text-xl transition-all duration-1000 font-semibold text-gray-800 mb-2 ${aboutInView ? 'translate-x-0 opacity-100' : 'translate-x-7 opacity-0'}`}>Власне виробництво</h3>
        <p className={`text-gray-600 transition-all duration-1000 ${aboutInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          Завдяки власному виробництву ми забезпечуємо повний контроль якості на кожному етапі, від друку до упаковки.
        </p>
      </div>
    </div>
    <div className="absolute bg-white right-[-6.4%] bottom-30 w-screen py-8 text-center terracotta" style={{ boxShadow: "1px 0 6px 2px rgb(0 0 0 / 0.1)" }}> 
      <h2 ref={headingRef} className={`text-3xl font-extrabold uppercase text-gray-800 transition-all duration-[1.5s] ${headingInView ? 'opacity-100' : 'opacity-0'}`}>
        У справі вже 5 років
      </h2> 
    </div>
    </section>
  );
}

export default AboutUs;
