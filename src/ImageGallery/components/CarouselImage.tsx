import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "@/shared/components/Modal";

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
        <Modal
          isModalOpen={isModalOpen}
          setModalOpen={() => setIsModalOpen(!isModalOpen)}
        >
          <img src={imageSrc} alt="preview" className="w-full rounded-md" />
        </Modal>,
        document.getElementById("root")!,
      )}
    </>
  );
};
