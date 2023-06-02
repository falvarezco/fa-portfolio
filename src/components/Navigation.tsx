'use client';
import React, { useState } from 'react';
import {
  Linkedin,
  Behance,
  Twitter,
} from 'react-bootstrap-icons';
import ActionButton from './ActionButton';

const LINK_CLASS = 'whitespace-nowrap text-neutral-100 hover:text-yellow-300 hover:cursor-pointer ease-in-out duration-300';
const WRAPPER_CLASSES = 'fixed justify-center top-7 w-full flex';
const NAV_CLASSES = 'w-[800px] h-[94px] flex justify-between rounded-full items-center py-2 px-2 pr-[18px] gap-8 backdrop-blur-md backdrop-opacity-10 backdrop-invert ease-in-out duration-300';
const NAV_CLASSES_CLOSED = 'w-[328px] h-[94px] flex justify-between rounded-full items-center py-2 px-2 pr-[18px] gap-8 backdrop-blur-md backdrop-opacity-10 backdrop-invert ease-in-out duration-300'
const PIC_CLASSES = 'rounded-full bg-yellow-300 w-[80px] h-[80px]';


const Navigation = () => {
  // TODO: Add Correct typing here
  const [open, toggleNav]:any = useState(false);

  return (
    <div className={WRAPPER_CLASSES}> 
      <nav className={open ? NAV_CLASSES : NAV_CLASSES_CLOSED}>
        <section className="flex gap-x-6 items-center">
          <figure className={PIC_CLASSES}>
            {/* Include Image Here */}
          </figure>
          <h1 className="text-neutral-100 text-xl font-light whitespace-nowrap">Felipe Alvarez</h1>
        </section>
        {open &&
          <div className="flex gap-8">
            <ul className="flex gap-8 items-center">
              <li className={LINK_CLASS}>Projects</li>
              <li className={LINK_CLASS}>About</li>
              <li className={LINK_CLASS}>Email Me</li>
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
        <ActionButton open={open} onStateToggle={() => toggleNav(!open)}/>
      </nav>
    </div>
  )
}

export default Navigation;