import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  title?: string;
  isModalOpen: boolean;
  setModalOpen: () => void;
};

export const Modal = ({
  title,
  isModalOpen,
  setModalOpen,
  children,
}: PropsWithChildren<Props>) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative rounded-lg p-6 w-4/5 max-w-3xl bg-[#171717] shadow-2xl">
        <div className="flex flex-col gap-6">
          <div className={title && "flex justify-between items-center"}>
            <h3 className="font-bold text-2xl">{title}</h3>
            <div className="flex justify-end">
              <Button onClick={setModalOpen}>Close</Button>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
