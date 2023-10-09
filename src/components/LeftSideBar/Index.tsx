import Editor from "../misc/Editor";
import WindowFrame from "../misc/WindowFrame";

const LeftSideBar = () => {
  return (
    <div className="left-sidebar flex flex-col gap-10 w-full">
      <WindowFrame />
      <Editor />
    </div>
  );
};

export default LeftSideBar;
