// import Image from "next/image";
// import Button from './Button';

const CARD_CLASSES = 'w-[300px] h-[223px] md:w-[472px] md:h-[352px] lg:w-[554px] lg:h-[413px] shrink-0 bg-yellow-300 rounded-[12px] overflow-hidden';

const Card = () => {
  return (
    <div className={CARD_CLASSES}>
      <figure className="relative z-1">
        {/* <Image width="554" height="413" src="https://placehold.co/554x413" alt="test card"/> */}
        <img src="https://placehold.co/554x413" alt="test card" />
        <figcaption className="w-full h-[74px] gap-5 absolute bottom-0 flex items-center px-5 backdrop-blur-md backdrop-opacity-90 bg-zinc-900/50">
          <h2 className="text-neutral-100">Test Card Item</h2>
          {/* <Button label='See It On Behance' onClick={() => {}}/> */}
        </figcaption>
      </figure>
    </div>
  )
}

export default Card;