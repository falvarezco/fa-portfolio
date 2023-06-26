// import Image from 'next/image'
'use client';
// import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Card from '@/components/Card';
// import { MobileCheckContext } from '@/context/MobileCheckContext';
// TODO: Move text constants to shared strings file and consume here
const INTRO_TXT = `Hello, I'm UI developer and Product Designer. With a passion for creating seamless user experiences and visually captivating interfaces, I combine my technical expertise with a deep understanding of user-centered design principles.`;
const MORE_ABOUT_BUTTON_TXT = 'More About Me';
const NEXT_BUTTON_TXT = 'Next';
const MAIN_PAGE_CLASSES = 'flex flex-col justify-between h-full min-h-min pt-[200px] overflow-y-visible overflow-x-hidden';

export default function Landing() {
  const router = useRouter();
  const goToAbout = () => router.push('/about');
  const moveToNextCard = () => {}

  return (
    <main className={MAIN_PAGE_CLASSES}>
      <section className="container mx-auto">
        <p className="text-neutral-100 px-5 py-10">{INTRO_TXT}</p>
        <div className="flex justify-center">
          <Button label={MORE_ABOUT_BUTTON_TXT} onClick={goToAbout} />
        </div>
      </section>
      <section className="flex gap-10 py-10 pl-10">
        <Card />
        <Card />
        <Card />
      </section>
      <section className="flex px-10 pb-10 flex-row-reverse">
        <Button label={NEXT_BUTTON_TXT} onClick={moveToNextCard} />
      </section>  
    </main>
  )
}
