'use client';
import React, { useState } from 'react';
import {
  Linkedin,
  Behance,
  Twitter,
  XLg,
  List,
} from 'react-bootstrap-icons';


const ACTION_BTN_CLASSES = 'w-[50px] h-[50px] bg-zinc-900 rounded-full flex items-center justify-center ease-in-out duration-300 delay-200';
const ACTION_ICON_CLASSES = 'text-neutral-100 hover:text-yellow-300 ease-in-out duration-300 delay-200';

type ActionButtonType = {
  closed: boolean;
  onStateToggle: () => {},
}

const ActionButton: React.FunctionComponent<ActionButtonType> = ({
  closed,
  onStateToggle,
}) => {
  return (
    <button className={ACTION_BTN_CLASSES}>
      {!closed ? 
        <XLg size={27} className={ACTION_ICON_CLASSES} onClick={onStateToggle}/> :
        <List size={27} className={ACTION_ICON_CLASSES} onClick={onStateToggle}/>
      }
    </button>
  )
}

const LINK_CLASS = 'whitespace-nowrap text-neutral-100 hover:text-yellow-300 hover:cursor-pointer ease-in-out duration-300';
const WRAPPER_CLASSES = 'fixed justify-center top-7 w-full flex';
const NAV_CLASSES = 'w-[800px] h-[94px] flex justify-between rounded-full items-center py-2 px-2 pr-[18px] gap-8 backdrop-blur-md backdrop-opacity-10 backdrop-invert ease-in-out duration-300';
const NAV_CLASSES_CLOSED = 'w-[328px] h-[94px] flex justify-between rounded-full items-center py-2 px-2 pr-[18px] gap-8 backdrop-blur-md backdrop-opacity-10 backdrop-invert ease-in-out duration-300'
const PIC_CLASSES = 'rounded-full bg-yellow-300 w-[80px] h-[80px]';


const Navigation = () => {
  // TODO: Add Correct typing here
  const [closed, toggleNav]:any = useState(false);

  return (
    <div className={WRAPPER_CLASSES}> 
      <nav className={!closed ? NAV_CLASSES : NAV_CLASSES_CLOSED}>
        <section className='flex gap-x-6 items-center'>
          <figure className={PIC_CLASSES}>
            {/* Include Image Here */}
          </figure>
          <h1 className='text-neutral-100 text-xl font-light whitespace-nowrap'>Felipe Alvarez</h1>
        </section>
        {!closed &&
          <div className={!closed ? 'flex gap-8' : 'flex gap-8'}>
            <ul className='flex gap-8 items-center'>
              <li className={LINK_CLASS}>Projects</li>
              <li className={LINK_CLASS}>About</li>
              <li className={LINK_CLASS}>Email Me</li>
            </ul>
            <span className='text-neutral-100'>|</span>
            <ul className='flex gap-8 items-center'>
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
        <ActionButton closed={closed} onStateToggle={() => toggleNav(!closed)}/>
      </nav>
    </div>
  )
}

export default Navigation;