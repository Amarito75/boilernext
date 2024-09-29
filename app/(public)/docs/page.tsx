import React from "react";
import CodeSnippet from "./components/code-snippet";

const DocsPage = () => {
  const documentationCode = [
    {
      title: "Installation",
      code: `git clone https://github.com/Amarito75/nextjs-boilerplate.git
cd nextjs-boilerplate
npm install`,
      fileTitle: "terminal",
    },
    {
      title: "Run the development server",
      code: "npm run dev",
      fileTitle: "terminal",
    },
    {
      title: "Rename the .env.example file to .env",
      code: "mv .env.example .env",
      fileTitle: "terminal",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">
          Hello, welcome to BoilerNext 👋
        </h1>

        {documentationCode.map((doc, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mt-6 mb-2">{doc.title}</h2>
            <CodeSnippet text={doc.code} title={doc.fileTitle} />
          </div>
        ))}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Open{" "}
          <code className="bg-card p-1 rounded-md">http://localhost:3000</code>{" "}
          in your browser to see the result.
        </h2>
      </div>
    </div>
  );
};

export default DocsPage;
