import { FC } from 'react';
import { PAGE_LINKS } from '@/constants/NavLinks';

const LINK_CLASS = 'whitespace-nowrap text-neutral-100 hover:text-yellow-300 hover:cursor-pointer ease-in-out duration-300 text-lg';

type MobileNavigationProps = {
  onNavigate: Function,
}

// Added Home in Mobile to enhance accesibility
const MOBILE_LINKS = [
  {
    name: 'Home',
    url: '/'
  },
  ...PAGE_LINKS
]

const MobileNavigation:FC<MobileNavigationProps> = ({ onNavigate }) => {
  return (
    <nav className="bg-zinc-900 absolute top-0 w-full h-full">
      <ul className="flex flex-col gap-20 items-center pt-[200px]">
        {MOBILE_LINKS.map(({ name, url }, idx) => (
          <li 
            key={`${name}-${url}`}
            className={LINK_CLASS}
            onClick={() => onNavigate(url)}
          >{name}</li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileNavigation;