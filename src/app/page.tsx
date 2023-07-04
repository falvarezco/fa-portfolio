'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { fetchEntry } from '@/contentful-config';

const HOME_ENTRY_ID = '6sWX2Wp51UGH7m8Nv8VWBV';
const CARDS_ENTRY_ID = '2p1Eos2wm26Vpjfa1te0NL';
const MAIN_PAGE_CLASSES = 'flex flex-col justify-between h-full min-h-min pt-[200px] overflow-y-visible overflow-x-hidden';

export default function Landing() {
  const router = useRouter();
  const [pageData, setPageData]: any = useState(null);
  const [cardData, setCardData]: any = useState(null);
  const slideTo = (type: string) => {}

  useEffect(() => {
    fetchEntry(HOME_ENTRY_ID).then(({ fields }: any) => {
      setPageData(fields);
    });

    fetchEntry(CARDS_ENTRY_ID).then(({ fields }: any) => {
      setCardData(fields);
    });
  }, [])

  if (!pageData && !cardData) {
    return <p>Loading...</p>;
  } else {
    const {
      introParagraph,
      moreAboutButton,
      sliderButtons,
    } = pageData;

    return (
      <main className={MAIN_PAGE_CLASSES}>
        <section className="container mx-auto">
          <p className="text-neutral-100 px-5 py-10">{introParagraph}</p>
          <div className="flex justify-center">
          <Button
            label={moreAboutButton.text}
            onClick={() => router.push(moreAboutButton.url)}
          />
          </div>
        </section>
        <section className="flex gap-10 py-10 justify-center">
          <Card {...cardData} />
        </section>
        <section className="flex px-10 pb-10 flex-row-reverse justify-between">
        {sliderButtons.map(({ text }: any) => (
          <Button 
            key={text} 
            label={text} 
            onClick={() => slideTo(text)}
          />
        ))}
      </section>  
      </main>
    )
  }
}
