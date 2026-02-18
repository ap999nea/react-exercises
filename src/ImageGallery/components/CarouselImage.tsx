import { useState } from "react";
import { createPortal } from "react-dom";
import { ImageModal } from "./ImageModal";

type Props = {
  imageSrc: string;
};

export const CarouselImage = ({ imageSrc }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <img
        className="cursor-pointer rounded-md h-full"
        alt="landscape"
        src={imageSrc}
        onClick={() => setIsModalOpen(!isModalOpen)}
        onKeyUp={() => setIsModalOpen(!isModalOpen)}
        onKeyDown={() => setIsModalOpen(!isModalOpen)}
      />
      {createPortal(
        <ImageModal
          isModalOpen={isModalOpen}
          imageSrc={imageSrc}
          setModalOpen={() => setIsModalOpen(!isModalOpen)}
        />,
        document.getElementById("root")!,
      )}
    </>
  );
};
