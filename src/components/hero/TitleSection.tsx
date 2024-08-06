import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const TitleSection = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.5 });
  const [subtitleRef, subtitleInView] = useInView({ threshold: 0.5 });
  const [sloganRef, sloganInView] = useInView({ threshold: 0.5 });

  return (
    <div className="relative w-full h-1/2 flex flex-col md:flex-row sm:my-5 justify-around items-center">
      <div>
        <h1
          ref={titleRef}
          className={`text-6xl font-extrabold uppercase leading-none transition-all duration-1000 ${titleInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
          Фото на кераміці
        </h1>
        <p
          ref={subtitleRef}
          className={`mt-2 text-lg font-medium text-gray-500 uppercase tracking-widest mb-4 transition-all duration-1000 ${
            subtitleInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          >
          Індивідуальний дизайн та виготовлення
        </p>
      </div>
      <div className="flex h-">
        <h2
        ref={sloganRef}
        className={`text-5xl md:text-6xl font-extrabold uppercase md:mt-60 leading-none transition-all duration-1000 ${
          sloganInView ? 'translate-y-0 opacity-40' : 'translate-y-8 opacity-0'
        }`}
      > {/* Removed line height */}
          <span className="absolute top-1 left-1 text-gray-300">ВЛАСНЕ ВИРОБНИЦТВО</span> 
          <span className="relative">ВЛАСНЕ <br /> ВИРОБНИЦТВО</span> 
        </h2>
      </div>
    </div>
  )
}

export default TitleSection;