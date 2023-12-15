import ThemesList from "../misc/ThemesList";

const RightSideBar = () => {
  return (
    <div className="left-sidebar flex flex-col gap-10 w-full">
      <ThemesList direction="col" />
    </div>
  );
};

export default RightSideBar;
