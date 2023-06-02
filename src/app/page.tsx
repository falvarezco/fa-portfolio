// import Image from 'next/image'
'use client';
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

const INTRO_TXT = `Hello, I'm UI developer and Product Designer. With a passion for creating seamless user experiences and visually captivating interfaces, I combine my technical expertise with a deep understanding of user-centered design principles.`;
const BUTTON_TXT = 'More About Me';

export default function Landing() {
  const router = useRouter();

  const goToAbout = () => router.push('/about');

  return (
    <main className="pt-[200px]">
      <section className="container mx-auto">
        <p className="text-neutral-100 py-10">{INTRO_TXT}</p>
        <div className="flex justify-center">
          <Button label={BUTTON_TXT} onClick={goToAbout} />
        </div>
      </section>
    </main>
  )
}
