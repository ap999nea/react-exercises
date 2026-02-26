import Markdown from "react-markdown";
import { useSelector } from "react-redux";
import { Card } from "@/components/ui/card";
import type { RootState } from "../state/store";

export const Preview = () => {
  const textareaValue = useSelector((state: RootState) => state.editor.text);

  return (
    <Card className="p-0 flex flex-col gap-4 pb-4">
      <div className="p-2 bg-[#171717]">Preview</div>
      <div className="p-2 pb-4 markdown-preview">
        <Markdown>{textareaValue}</Markdown>
      </div>
    </Card>
  );
};
