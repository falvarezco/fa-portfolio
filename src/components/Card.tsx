import Image from "next/image";
import { FC } from "react";

const CARD_CLASSES = 'w-[300px] h-[223px] md:w-[472px] md:h-[352px] lg:w-[554px] lg:h-[413px] shrink-0 bg-zinc-600 rounded-[12px] overflow-hidden';
const CARD_FOOTER_CLASSES = 'w-full h-[74px] gap-5 absolute bottom-0 flex items-center px-5 backdrop-blur-md backdrop-opacity-90 bg-zinc-900/50';

type ImageContent = {
  fields: {
    description: string,
    file: { url: string, fileName: string },
    title: string,
  }
}

type UrlContent = {
  content: string,
  url: string,
}

type CardProps = {
  projectImage: ImageContent,
  projectTitle: string,
  url: UrlContent,
}

const Card: FC<CardProps> = ({ projectImage, projectTitle }) => {
  const { file } = projectImage.fields;
  const imgPath = `https://${file.url}`;

  return (
    <div className={CARD_CLASSES}>
      <figure className="relative z-1">
        <Image
          priority
          width="554"
          height="413"
          src={imgPath}
          alt={file.fileName}
        />
        <figcaption className={CARD_FOOTER_CLASSES}>
          <h2 className="text-neutral-100">{projectTitle}</h2>
        </figcaption>
      </figure>
    </div>
  )
}

export default Card;