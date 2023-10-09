import clsx from "clsx";
import { useAppState } from "../../hooks/useAppState";

export const MacOsFrame = () => (
  <div className="window-buttons">
    <div className="window-button red"></div>
    <div className="window-button yellow"></div>
    <div className="window-button green"></div>
  </div>
);

export const WindowsFrame = () => {
  const theme = useAppState("theme");
  return (
    <div className="w-full flex text-xl items-center justify-center gap-3">
      <div
        className={clsx("col-span-1 w-2", {
          "text-white": theme.value !== "lighter",
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12">
          <line
            x1="0"
            x2="12"
            y1="6"
            y2="6"
            stroke="currentColor"
            stroke-width="2"
          ></line>
        </svg>
      </div>
      <div
        className={clsx("col-span-1 w-2 ", {
          "text-white": theme.value !== "lighter",
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12">
          <rect
            fill="transparent"
            width="100%"
            height="100%"
            stroke="currentColor"
            stroke-width="4"
          ></rect>
        </svg>
      </div>
      <div
        className={clsx("col-span-1 w-2 ", {
          "text-white": theme.value !== "lighter",
        })}
      >
        <svg
          viewBox="0 0 12 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="11"
            x2="11"
            y2="1"
            stroke="currentColor"
            stroke-width="2"
          ></line>
          <line
            x1="1"
            y1="1"
            x2="11"
            y2="11"
            stroke="currentColor"
            stroke-width="2"
          ></line>
        </svg>
      </div>
    </div>
  );
};
