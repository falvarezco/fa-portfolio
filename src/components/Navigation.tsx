'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isMobile } from 'react-device-detect';
import {
  Linkedin,
  Behance,
  Twitter,
} from 'react-bootstrap-icons';
import ActionButton from './ActionButton';

const LINK_CLASS = 'whitespace-nowrap text-neutral-100 hover:text-yellow-300 hover:cursor-pointer ease-in-out duration-300';
const WRAPPER_CLASSES = 'w-full flex fixed justify-center top-7 z-10';
const PIC_CLASSES = 'rounded-full bg-yellow-300 w-[80px] h-[80px]';
const NAV_CLASSES_BASE = 'flex justify-between items-center py-2 px-2 pr-[18px] rounded-full backdrop-blur-md backdrop-opacity-90 bg-zinc-600/40 ease-in-out duration-300';
const NAV_CLASSES_OPEN = `sm:w-full md:w-[800px] md:h-[94px]`;
const NAV_CLASSES_CLOSED = `w-[328px] h-[94px]`;

type PageLink = {
  name: string,
  url: string,
}

const PAGE_LINKS:Array<PageLink> = [
  {
    name: 'Projects',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Contact',
    url: '/'
  },
];

const Navigation = () => {
  const [open, toggleNav] = useState(true);
  const router = useRouter();
  const navClasses = `${open ? NAV_CLASSES_OPEN : NAV_CLASSES_CLOSED} ${NAV_CLASSES_BASE}`;

  useEffect(() => {
    if (isMobile) {
      toggleNav(false);
    }
  }, []);

  const toggleState = () => {
    !isMobile && toggleNav(!open);
  }

  const goToLink:Function = (url: string) => router.push(url)

  return (
    <div className={WRAPPER_CLASSES}> 
      <nav className={navClasses}>
        <section className="flex gap-x-6 items-center cursor-pointer" onClick={() => goToLink('/')}>
          <figure className={PIC_CLASSES}>
          </figure>
          <h1 className="text-neutral-100 text-xl font-light whitespace-nowrap">Felipe Alvarez</h1>
        </section>
        {open &&
          <div className="flex gap-8">
            <ul className="flex gap-8 items-center">
              {PAGE_LINKS.map(({ name, url }, idx) => (
                <li 
                  key={`${name}-${idx}`}
                  className={LINK_CLASS}
                  onClick={() => goToLink(url)}
                >{name}</li>
              ))}
            </ul>
            <span className="text-neutral-100">|</span>
            <ul className="flex gap-8 items-center">
              <li>
                <Linkedin size={20} className={LINK_CLASS}/>
              </li>
              <li>
                <Behance size={20} className={LINK_CLASS}/>
              </li>
              <li>
                <Twitter size={20} className={LINK_CLASS}/>
              </li>
            </ul>
          </div>
        }
        <ActionButton open={open} onStateToggle={toggleState}/>
      </nav>
    </div>
  )
}

export default Navigation;