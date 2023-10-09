import React, { useState, useEffect, useRef } from "react";
import CodeEditor from "react-simple-code-editor";
import { Highlight, themes } from "prism-react-renderer";
import "./Code.css";
import { useAppState } from "../../hooks/useAppState";
import clsx from "clsx";
import { customThemeSet } from "../../constants/settings";
import { MacOsFrame, WindowsFrame } from "../UI/Frame";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import { changeCode } from "../../store/reducers/settingReducer";
import { useDispatch } from "react-redux";
import { useResizeDetector } from "react-resize-detector";

const CodeEditorComponent: React.FC<any> = ({ width }) => {
  const dispatch = useDispatch();
  const theme = useAppState("theme");
  const fontFamily = useAppState("fontFamily");
  const fontWeight = useAppState("fontWeight");
  const headerVisible = useAppState("header");
  const reflection = useAppState("reflection");
  const style = useAppState("style");
  const os = useAppState("os");
  const language = useAppState("language");
  const lineNumber = useAppState("lineNumber");
  const code = useAppState("code");
  const [title, setTitle] = useState("Untitled - 1");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const resizeDiv = useRef<HTMLDivElement>(null);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const setHeaderTitle = (text: string) => {
    if (text === "") setTitle("Untitled - 1");
    setTitle(text);
  };

  const getLineNumbers = () => {
    const lines = code.split("\n");
    const lineCount = lines.length;

    return lines.map((_, index) => (
      <div className="line-number" key={index + 1}>
        {index + 1}
      </div>
    ));
  };

  const highlight = (code: string, theme: any) => (
    <Highlight
      theme={theme?.theme}
      code={
        //   prettier.format(code, {
        //   parser: "babel",
        //   plugins: [parserBabel],
        // })
        code
      }
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
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

  const setLineHeight = () => {
    const lineNumbers = lineNumbersRef.current;
    if (lineNumbers) {
      const codeLines = Array.from(
        lineNumbers.parentElement?.querySelectorAll(".token-line") || []
      );
      codeLines.forEach((line, index) => {
        const lineNumber = lineNumbers.children[index] as HTMLDivElement;
        if (line.clientHeight !== 23)
          lineNumber.style.height = `${line.clientHeight}px`;
        else lineNumber.style.height = "auto";
      });
    }
  };
  useResizeDetector({ targetRef: resizeDiv, onResize: setLineHeight });

  useEffect(() => {
    setLineHeight();
  }, [code, width]);

  const codeEditor = React.useMemo(
    () => (
      <CodeEditor
        value={code}
        onValueChange={(newCode) => dispatch(changeCode(newCode))}
        highlight={(code) => highlight(code, theme)}
        style={{
          fontFamily: fontFamily,
          fontSize: 16,
          fontWeight: fontWeight,
          lineHeight: 1.5,
          color: "#ffffff",
          width: "100%",
          borderRadius: 5,
          overflowX: "auto",
          paddingLeft: lineNumber === "hide" ? "10px" : "0px",
          paddingRight: "10px",
        }}
        textareaClassName={`h-full codeImage select-none ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      />
    ),
    [
      code,
      fontFamily,
      fontWeight,
      lineNumber,
      isDarkMode,
      dispatch,
      highlight,
      theme,
    ]
  );

  return (
    <div
      onResize={() => setLineHeight()}
      className={`h-full flex justify-center items-center opacity-100 relative ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="code-window">
        {headerVisible === "show" && (
          <div
            className="window-title-bar"
            style={{
              background: style === "default" ? theme?.bg : theme?.mergeStyle,
            }}
          >
            <div className="window-buttons">
              {os === "macos" && (
                <>
                  <MacOsFrame />
                </>
              )}
            </div>

            <div
              className="editable-heading text-center"
              style={{
                color: theme.value !== "lighter" ? "white" : "#000000a1",
              }}
            >
              <input
                type="text"
                value={title}
                onFocus={(e) => e.target.value !== "" && setTitle("")}
                onBlur={(e) =>
                  e.target.value !== "" && setTitle("Untitled - 1")
                }
                onChange={(e) => setTitle(e.target.value)}
                className="outline-none text-center bg-transparent font-normal text-sm"
              />
            </div>

            <div className="window-buttons">
              {os === "windows" && (
                <>
                  <WindowsFrame />
                </>
              )}
            </div>
          </div>
        )}
        <div
          className={clsx("code-container pt-1", {
            "rounded-t-[8px] pt-5": headerVisible === "hide",
          })}
          style={{
            background: style === "default" ? theme?.bg : theme?.mergeStyle,
            // borderTopLeftRadius: headerVisible === "no" ? "8px" : "0px",
            // borderTopRightRadius: headerVisible === "no" ? "8px" : "0px",
          }}
        >
          <div
            className={clsx("line-numbers", {
              hidden: lineNumber === "hide",
              flex: lineNumber === "show",
            })}
            style={{
              color: theme.lineColor,
            }}
            ref={lineNumbersRef}
          >
            <>{getLineNumbers()}</>
          </div>
          <div ref={resizeDiv}>{codeEditor}</div>
        </div>
      </div>

      <div className="absolute w-full h-full pointer-events-none z-10 top-0 left-0 right-0 bottom-0 overflow-hidden rounded-[8px]">
        {reflection === "show" && (
          <div className="w-full h-full absolute left-0 top-0 z-20 -skew-y-12 reflection"></div>
        )}
      </div>
    </div>
  );
};

export default CodeEditorComponent;
