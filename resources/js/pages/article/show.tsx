"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import php from "react-syntax-highlighter/dist/cjs/languages/prism/php";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

import AppLayout from "@/layouts/app-layout";
import { Article } from "@/types/article";
import { Container } from "@/components/ui/container";

// Register languages
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("php", php);
SyntaxHighlighter.registerLanguage("javascript", javascript);

type PageProps = {
  article: Article;
};

function Show({ article }: PageProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000); // reset feedback setelah 2 detik
    });
  };

  return (
    <Container>
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-gray-100 leading-tight">
          {article.title}
        </h1>
        {article.topic && (
          <p className="text-sm text-indigo-600 font-semibold mb-1 tracking-wide uppercase">
            {article.topic.name}
          </p>
        )}
        <time
          dateTime={article.created_at}
          className="text-xs text-gray-500 dark:text-gray-400"
        >
          {new Date(article.created_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>

      <article className="prose prose-indigo max-w-none dark:prose-invert leading-relaxed break-words">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const code = String(children).replace(/\n$/, "");

              if (inline) {
                return (
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                    {code}
                  </code>
                );
              }

              // Block code with copy button
              return match ? (
                <div className="relative group rounded-lg">
                  {/* Tombol copy */}
                  <button
                    onClick={() => handleCopy(code)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded select-none"
                    aria-label="Copy code"
                    type="button"
                  >
                    {copiedCode === code ? "Copied!" : "Copy"}
                  </button>

                  {code}
                </div>
              ) : (
                <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                  <code>{code}</code>
                </pre>
              );
            },
          }}
        >
          {article.content}
        </ReactMarkdown>
      </article>
    </Container>
  );
}

export default Show;

Show.layout = (page: any) => <AppLayout>{page}</AppLayout>;
