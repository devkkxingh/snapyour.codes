import { BiSolidWindowAlt } from "react-icons/bi";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { MdStyle } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../misc/Sheet";
import { useState } from "react";
import WindowFrame from "../misc/WindowFrame";
import Editor from "../misc/Editor";
import ThemesList from "../misc/ThemesList";

const Footer = () => {
  const [menuName, setMenuName] = useState("Window");

  const Menu = () => {
    const Content = () => {
      switch (menuName) {
        case "Window":
          return (
            <div>
              <WindowFrame />
            </div>
          );
        case "Editor":
          return (
            <div>
              <Editor />
            </div>
          );
        case "Themes":
          return (
            <div>
              <ThemesList direction="row" />
            </div>
          );
        default:
          return (
            <div>
              <WindowFrame />
            </div>
          );
      }
    };
    return (
      <div className="w-full overflow-auto">
        <Content />
      </div>
    );
  };
  return (
    <div className="flex w-full flex-row justify-between px-5 h-full items-center">
      <Sheet>
        <SheetTrigger onClick={() => setMenuName("Window")}>
          <div className="text-white text-2xl flex gap-2 justify-center items-center">
            <BiSolidWindowAlt />
            <span className="text-sm">Window</span>
          </div>
        </SheetTrigger>

        <SheetTrigger onClick={() => setMenuName("Editor")}>
          <div className="text-white text-2xl flex gap-2 justify-center items-center">
            <RiPencilRuler2Fill />
            <span className="text-sm">Editor</span>
          </div>
        </SheetTrigger>

        <SheetTrigger onClick={() => setMenuName("Themes")}>
          <div className="text-white text-2xl flex gap-2 justify-center items-center">
            <MdStyle />
            <span className="text-sm">Themes</span>
          </div>
        </SheetTrigger>

        <SheetContent
          side="bottom"
          className="text-white p-4 min-h-[200px] max-h-[400px] overflow-auto"
        >
          <Menu />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Footer;
