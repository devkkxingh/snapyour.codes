import React from "react";
import { Highlight } from "prism-react-renderer";
import "./Code.css";
import { exampleCode } from "../../constants/settings";
import { PrismTheme } from "../../themes/util/types";
import CodeEditor from "react-simple-code-editor";
import { format } from "prettier";
import parserBabel from "prettier/parser-babel";
import clsx from "clsx";

interface CodeSnippet {
  bg: string;
  theme: PrismTheme;
  name: string;
  editorBg: string;
  selected: boolean;
  value: string;
  onThemeChange: (value: string) => void;
}

const highlight = (code: string, theme: PrismTheme) => (
  <Highlight
    theme={theme}
    code={format(code, {
      bracketSpacing: true,
      trailingComma: "all",
      bracketSameLine: true,
      jsxBracketSameLine: true,
      endOfLine: "auto",
      parser: "babel",
      plugins: [parserBabel],
    })}
    language="jsx"
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            <span className="line-code">
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </span>
          </div>
        ))}
      </>
    )}
  </Highlight>
);

const CodeSnippet: React.FC<CodeSnippet> = ({
  bg,
  theme,
  name,
  editorBg,
  selected,
  value,
  onThemeChange,
}) => {
  return (
    <div
      onClick={() => onThemeChange(value)}
      className={clsx(
        "flex md:w-auto w-[200px] justify-center flex-col select-none rounded-md cursor-pointer",
        {
          "border-slate-100 border-2": selected,
        }
      )}
      style={{
        padding: "15px",
        background: bg,
      }}
    >
      <div
        className="code-snippet rounded-md flex justify-center items-center w-full relative"
        style={{ background: editorBg }}
      >
        <CodeEditor
          value={exampleCode}
          onValueChange={() => {}}
          disabled
          highlight={(exampleCode: any) => highlight(exampleCode, theme)}
          style={{
            fontFamily: "Fira code",
            fontSize: 11,
            height: "100%",
            fontWeight: "500",
            color: "#ffffff",
            width: "100%",
          }}
        />
        <div className="absolute w-full h-full pointer-events-none z-10 top-0 left-0 right-0 bottom-0 overflow-hidden">
          <div className="w-full h-full absolute left-0 top-0 z-20 -skew-y-12 reflection"></div>
        </div>
      </div>
      <div className="rounded-md transparent-bg p-2.5 w-full mt-2.5 text-slate-100 text-sm font-medium">
        {name}
      </div>
    </div>
  );
};

export default CodeSnippet;
