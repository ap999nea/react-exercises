import type { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  isModalOpen: boolean;
  setModalOpen: () => void;
};

export const Modal = ({
  isModalOpen,
  setModalOpen,
  children,
}: PropsWithChildren<Props>) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative rounded-lg p-6 w-4/5 max-w-3xl bg-gray-800 shadow-2xl">
        <div className="flex flex-col gap-6">
          <div className="flex justify-end">
            <Button onClick={setModalOpen}>Close</Button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
