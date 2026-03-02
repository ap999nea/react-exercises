import { Bold, Code, Heading1, Heading2, Heading3, Italic } from "lucide-react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@/components/ui/card";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Textarea } from "@/components/ui/textarea";
import { updateText } from "../state/slice";
import type { RootState } from "../state/store";

const wrappingElements = ["**", "*", "`"];
const headings = ["# ", "## ", "### "];

export const Editor = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaValue = useSelector((state: RootState) => state.editor.text);
  const dispatch = useDispatch();

  const editText = (signToInsert: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (!end) return;
    const selectedText = textareaValue.slice(start, end);
    const isHeading = headings.includes(signToInsert);

    const newText = `${textareaValue.slice(0, start)}${isHeading ? "\n" : ""}${signToInsert}${selectedText}${wrappingElements.includes(signToInsert) ? signToInsert : ""}${isHeading ? "\n" : ""}${textareaValue.slice(end)}`;
    dispatch(updateText(newText));
  };

  return (
    <Card className="p-0 flex flex-col gap-4">
      <div className="p-2 bg-[#171717] h-13 rounded-t-xl flex items-center">
        <p>Editor</p>
      </div>
      <div className="p-2 pb-4 flex flex-col gap-4">
        <KbdGroup className="p-2">
          <Kbd className="w-10 h-10" onClick={() => editText("# ")}>
            <Heading1 className="text-2xl" />
          </Kbd>
          <Kbd className="w-10 h-10" onClick={() => editText("## ")}>
            <Heading2 className="text-2xl" />
          </Kbd>
          <Kbd className="w-10 h-10" onClick={() => editText("### ")}>
            <Heading3 className="text-2xl" />
          </Kbd>
          <Kbd className="w-10 h-10" onClick={() => editText("**")}>
            <Bold className="text-2xl" />
          </Kbd>
          <Kbd className="w-10 h-10" onClick={() => editText("*")}>
            <Italic className="text-2xl" />
          </Kbd>
          {/* <Kbd className="w-10 h-10" onClick={() => editText("> ")}>
            <TextQuote className="text-2xl" />
          </Kbd> */}
          <Kbd className="w-10 h-10" onClick={() => editText("`")}>
            <Code className="text-2xl" />
          </Kbd>
        </KbdGroup>
        <Textarea
          ref={textareaRef}
          placeholder="Type here ..."
          value={textareaValue}
          onChange={(e) => dispatch(updateText(e.target.value))}
        />
      </div>
    </Card>
  );
};
