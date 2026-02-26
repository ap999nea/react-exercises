import Markdown from "react-markdown";
import { Card } from "@/components/ui/card";

export const Preview = () => {
  return (
    <Card className="p-0 flex flex-col gap-4 pb-4">
      <div className="p-2 bg-[#171717]">Preview</div>
      <div className="p-2 pb-4 markdown-preview">
        <Markdown>
          {"# Hi! Try editing me however you like. I'm just a simple textarea"}
        </Markdown>
      </div>
    </Card>
  );
};
