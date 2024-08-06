'use client';
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2 });

  return (
    <section id="services" className="container mx-auto md:px-40 py-20">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Наші послуги</h1>
      <div ref={servicesRef} className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div className={`shadow-lg bg-white flex md:flex-col flex-row gap-5 rounded-lg p-6 w-full md:w-1/2 border-solid border-2 border-gray duration-1000  ${servicesInView ? 'translate-x-0 opacity-100' : 'translate-x-[-2rem] opacity-0'}`}>
            <Image 
              className={`mx-auto rounded-md transition-all duration-1000 mb-4`}
              src="/ceramics/images/ceramics.png" // Replace with the correct path to your image
              alt="Гарантія"
              width={360}
              height={420}
              priority
            />
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl font-semibold transition-all duration-1000 text-gray-800 mb-2 `}>Друк на кераміці</h3>
              <p className={`text-gray-600 transition-all duration-1000 `}>
                Унікальний друк фото, малюнків та логотипів на кераміці. Збережіть спогади назавжди!
              </p>
            </div>
          </div>
        <div className={`shadow-lg bg-white rounded-lg md:flex-col flex-row p-6 w-full flex md:w-1/2 border-solid border-2 border-gray gap-5 duration-1000  ${servicesInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          <div className="flex flex-col justify-center">
            <h3 className={`text-xl transition-all duration-1000 font-semibold text-gray-800 mb-2 `}>Преміальний друк на мармурі та граніті</h3>
            <p className={`text-gray-600 transition-all duration-1000 `}>
              Розкіш у деталях. Ексклюзивний друк на італійському мармурі та граніті.
            </p>
          </div>
          <Image
            className={`mx-auto transition-all duration-1000 rounded-md mb-4`}
            src="/ceramics/images/marmour.png" // Replace with the correct path to your image
            alt="Власне виробництво" 
            width={360} 
            height={420}
            priority
          />
        </div>
      </div>
      <div className={`shadow-lg bg-white rounded-lg p-6 md:w-[80%] border-solid border-2 border-gray flex justify-evenly duration-1000 terracotta ${servicesInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="flex flex-col justify-center">
          <h3 className={`text-xl font-semibold transition-all duration-1000 text-gray-800 mb-2 `}>Професійна ретуш фото</h3>
          <p className={`text-gray-600 transition-all duration-1000 `}>
            Підготуємо ваші фото до ідеального друку. Експертна ретуш для бездоганного результату.
          </p>
        </div>
        <div className="aspect-[16/9]">
          <Image 
            className={`mx-auto rounded-md transition-all duration-1000 mb-4 `}
            src="/ceramics/images/retouch.png" // Replace with the correct path to your image
            alt="Гарантія" 
            width={360}
            height={420} 
            priority
          />
        </div>
      </div>
    </div>
    </section>
  )
}

export default Services;