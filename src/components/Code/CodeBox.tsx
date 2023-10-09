import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import "./Code.css";
import { BiSolidXCircle } from "react-icons/bi";
import CodeEditor from "./CodeEditor";
import { useAppState } from "../../hooks/useAppState";

const CodeBox: React.FC<any> = ({ parent }) => {
  const boxBg = useAppState("boxBackground");
  const padding = useAppState("padding");
  const opacity = useAppState("opacity");
  const visible = useAppState("visible");
  const codeBoxRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(550);
  const [showStrip, setShowStrip] = React.useState(false);
  const [showAuto, setShowAuto] = React.useState(false);
  const [showResize, setShowResize] = React.useState(true);
  const resizeHandleWidth = 6; // Width of the resize handles

  const handleResize = (e: React.MouseEvent, handle: "left" | "right") => {
    const startX = e.clientX;
    const startWidth = codeBoxRef.current?.offsetWidth || 0;
    const child = codeBoxRef.current?.firstChild as HTMLElement;

    let isResizing = true; // Flag to track if resizing is happening

    const handleMouseMove = (e: MouseEvent) => {
      let newWidth = startWidth;
      if (handle === "left") {
        newWidth -= e.clientX - startX;
        if (newWidth < 550) newWidth = 550; // Minimum width constraint
        if (newWidth > parent.current.offsetWidth - 40)
          newWidth = parent.current.offsetWidth - 40;
      } else if (handle === "right") {
        newWidth += e.clientX - startX;
        if (newWidth < 550) newWidth = 550;
        if (newWidth > parent.current.offsetWidth - 40)
          newWidth = parent.current.offsetWidth - 40;
      }
      if (child) child.style.width = `${newWidth}px`;
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      // Reset the flag after resizing is done
      isResizing = false;
      setShowStrip(false);
      setShowAuto(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // Check the flag in a loop to update the showStrip state while resizing
    const checkResizing = () => {
      if (isResizing) {
        setShowStrip(true);
        setShowAuto(false);
        requestAnimationFrame(checkResizing);
      }
    };

    requestAnimationFrame(checkResizing);
  };

  const downloadAsPng = () => {
    if (codeBoxRef.current) {
      setShowResize(false);
      const fullWidth = codeBoxRef.current.offsetWidth;

      htmlToImage
        .toPng(codeBoxRef.current, {
          quality: 1,
          width: fullWidth,
        })
        .then(function (dataUrl) {
          download(dataUrl, "codebox.png");
          setShowResize(true);
        })
        .catch(function (error) {
          console.error("Error while generating screenshot", error);
          setShowResize(true);
        });
    }
  };

  const setAutoWidth = () => {
    if (codeBoxRef.current) {
      const child = codeBoxRef.current.firstChild as HTMLElement;
      child.style.width = "auto";
      if (child?.offsetWidth < 550) {
        child.style.width = `${550}px`;
      }
    }
    setShowAuto(false);
  };

  return (
    <div className="screenshot-wrapper flex justify-center bg-zinc-900 mt-auto mb-auto rounded-md">
      <div className="relative ">
        <div ref={codeBoxRef} className="z-10 relative rounded-md">
          <div
            className="code-wrapper flex justify-center flex-col select-none rounded-md relative"
            style={{
              padding: padding + "px",
              width: `auto`,
              minWidth: "550px",
              transition: "padding 0.3s ease",
            }}
          >
            {visible === "yes" && (
              <div
                className="absolute z-10 top-0 w-full left-0 h-full rounded-md"
                style={{
                  background: boxBg,
                  opacity: `${opacity}%`,
                }}
              ></div>
            )}
            <div className="z-20">
              <CodeEditor width={width} />
            </div>
            {/* <div className="scale-display">{width}px</div> */}

            <button onClick={downloadAsPng}></button>
          </div>
          {showStrip && (
            <div className="size-bar absolute flex w-full mt-4">
              <div className="rounded-xl text-xs text-cyan-50 z-10 m-auto content px-2 select-none">{`${width}px`}</div>
              <hr className="size-strip absolute " />
            </div>
          )}

          {showAuto && (
            <div
              className=" absolute flex w-full mt-4 cursor-pointer"
              onClick={() => setAutoWidth()}
            >
              <div className="text-md text-cyan-50 z-10 m-auto content px-2 !border-0">
                <BiSolidXCircle />
              </div>
              <div className="absolute text-xs text-slate-400 mt-5 w-full select-none text-center">
                Set to auto width
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="resize-handle left z-10 "
            onMouseDown={(e) => handleResize(e, "left")}
          >
            <div className="dot"></div>
          </div>

          <div
            className="resize-handle right z-10"
            onMouseDown={(e) => handleResize(e, "right")}
          >
            <div className="dot"></div>
          </div>
        </div>
        <div className="absolute no-bg w-full h-full top-0 rounded-md"></div>
      </div>
    </div>
  );
};

export default CodeBox;
