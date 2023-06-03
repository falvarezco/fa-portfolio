// import Image from "next/image";

const Card = () => {
  return (
    <div className="w-[554px] h-[413px] shrink-0 bg-yellow-300 rounded-[12px] overflow-hidden">
      <figure className="relative z-1">
        {/* <Image width="554" height="413" src="https://placehold.co/554x413" alt="test card"/> */}
        <img src="https://placehold.co/554x413" alt="test card" />
        <figcaption className="w-full h-[74px] absolute bottom-0 flex items-center px-5 backdrop-blur-md backdrop-opacity-90 bg-zinc-900/50">
          <h2 className="text-neutral-100">Test Card Item</h2>
        </figcaption>
      </figure>
    </div>
  )
}

export default Card;