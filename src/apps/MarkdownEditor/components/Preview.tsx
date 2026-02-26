import { Trash } from "lucide-react";
import Markdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { eraseText } from "../state/slice";
import type { RootState } from "../state/store";

export const Preview = () => {
  const textareaValue = useSelector((state: RootState) => state.editor.text);
  const dispatch = useDispatch();

  const deleteText = () => {
    dispatch(eraseText());
  };

  return (
    <Card className="p-0 flex flex-col gap-4 pb-4">
      <div className="flex items-center justify-between p-2 bg-[#171717] rounded-t-xl">
        <p>Preview</p>
        <Button onClick={deleteText}>
          <Trash />
        </Button>
      </div>
      <div className="p-2 pb-4 markdown-preview">
        <Markdown>{textareaValue}</Markdown>
      </div>
    </Card>
  );
};
