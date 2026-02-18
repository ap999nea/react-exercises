import { Button } from "@/components/ui/button";

type Props = {
  isModalOpen: boolean;
  imageSrc: string;
  setModalOpen: () => void;
};

export const ImageModal = ({ isModalOpen, imageSrc, setModalOpen }: Props) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative rounded-lg p-6 w-4/5 max-w-3xl bg-gray-800 shadow-2xl">
        <div className="flex flex-col gap-6">
          <div className="flex justify-end">
            <Button onClick={setModalOpen}>Close</Button>
          </div>

          <img src={imageSrc} alt="preview" className="w-full rounded-md" />
        </div>
      </div>
    </div>
  );
};
