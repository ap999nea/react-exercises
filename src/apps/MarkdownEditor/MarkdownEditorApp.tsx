import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";

export const MarkdownEditorApp = () => {
  return (
    <div className="flex flex-col gap-6 w-5/6 md:w-4/6">
      <h1 className="text-3xl font-bold">Markdown Editor</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Editor />
        <Preview />
      </div>
    </div>
  );
};
