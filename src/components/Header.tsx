'use client';

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [burgerOpened, setBurgerOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // const handleMenuClose = (event: MouseEvent) => menuRef.current !== event.target && setBurgerOpened(false);

  // useEffect(() => {
  //   if (!burgerOpened)
  //     return;

  //   window.addEventListener('click', handleMenuClose);

  //   return () => {
  //     window.removeEventListener('click', handleMenuClose);
  //   }
  // }, []);

  return (
    <header className="sticky top-0 z-30 shadow-md terracotta">
      <nav className="flexBetween max-container padding-container py-5">
        <Link className="flex gap-1 items-center" href={{ pathname: '/', hash: 'home' }}>
          <Image src="/ceramic.svg" alt="logo" width={30} height={30} />
          CeramicsPrint
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
            href={{ pathname: link.href, hash: link.key }}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <Image 
          src="/menu.png"
          alt="menu"
          width={32}
          height={32}
          onClick={() => setBurgerOpened(prev => !prev)}
          className="inline-block cursor-pointer lg:hidden"
        />
        {burgerOpened && <div ref={menuRef} className="absolute top-16 right-0 terracotta w-100 h-100 p-5">
          <ul className="h-full gap-12">
          {NAV_LINKS.map((link) => (
            <Link
            href={{ pathname: link.href, hash: link.key }}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            key={link.key}
            >
              {link.label}
            </Link>
          ))}
          </ul>
        </div>}
      </nav>
    </header>
  )
}

export default Header;