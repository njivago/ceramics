'use client';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import { useState } from 'react'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick} className="flex flex-col justify-center items-center">
        <span className={`bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
        <span className={`bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}/>
        <span className={`bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}/>
      </button>
      {isOpen && (
        <div className="absolute right-5 top-5 flex flex-col justify-center items-center h-full gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              href={{ pathname: link.href, hash: link.key }}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              key={link.key}
              >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default BurgerMenu;