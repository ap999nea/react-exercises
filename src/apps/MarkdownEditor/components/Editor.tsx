import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  TextQuote,
} from "lucide-react";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Textarea } from "@/components/ui/textarea";

const wrappingElements = ["**", "*", "`"];
const headings = ["# ", "## ", "### "];

export const Editor = () => {
  const [value, setValue] = useState(
    "Hi! Try editing me however you like. \nI'm just a simple textarea",
  );
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const editText = (signToInsert: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (!start || !end) return;
    const selectedText = value.slice(start, end);

    const newText = `${value.slice(0, start)}${signToInsert}${selectedText}${wrappingElements.includes(signToInsert) ? signToInsert : ""}${headings.includes(signToInsert) ? "\n" : ""}${value.slice(end)}`;
    setValue(newText);
  };

  return (
    <Card className="p-0 flex flex-col gap-4">
      <div className="p-2 bg-[#171717]">Editor</div>
      <div className="p-2 pb-4 flex flex-col gap-4">
        <KbdGroup className="p-2">
          <Kbd className="w-10 h-10" onClick={() => editText("# ")}>
            <Heading1 className="text-2xl" />
          </Kbd>
          <Kbd className="w-10 h-10" onClick={() => editText("##")}>
            <Heading2 className="text-2xl" />
          </Kbd>
          <Kbd className="w-10 h-10" onClick={() => editText("###")}>
            <Heading3 className="text-2xl" />
          </Kbd>
          <Kbd className="w-10 h-10" onClick={() => editText("**")}>
            <Bold className="text-2xl" />
          </Kbd>
          <Kbd className="w-10 h-10" onClick={() => editText("*")}>
            <Italic className="text-2xl" />
          </Kbd>
          <Kbd className="w-10 h-10" onClick={() => editText("> ")}>
            <TextQuote className="text-2xl" />
          </Kbd>
          <Kbd className="w-10 h-10" onClick={() => editText("`")}>
            <Code className="text-2xl" />
          </Kbd>
        </KbdGroup>
        <Textarea
          ref={textareaRef}
          placeholder="Type here ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </Card>
  );
};
