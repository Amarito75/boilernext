import CopyButton from "@/components/ui/copy-button";
import React from "react";

interface CodeSnippetProps {
  text: string;
  title: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ text, title }) => {
  const lines = text.split("\n");

  return (
    <div className="flex flex-col items-start justify-between border border-border rounded-md bg-card w-full">
      <div className="flex items-center justify-between w-full border-b border-border px-3 py-1">
        <p className="text-md text-black dark:text-white">{title}</p>
        <CopyButton text={text} />
      </div>
      <div className="p-4 w-full overflow-x-auto">
        <pre className="flex">
          <div className="text-sm text-muted-foreground pr-4 select-none">
            {lines.map((_, index) => (
              <div key={index} className="text-right">
                {index + 1}
              </div>
            ))}
          </div>
          <code className="text-sm text-black dark:text-white">
            {lines.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
