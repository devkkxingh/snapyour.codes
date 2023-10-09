import { BiSolidImage } from "react-icons/bi";

const Header = ({ setDownload }: any) => {
  return (
    <div className="flex w-full flex-row justify-between px-5 h-full items-center">
      <div className="logo text-white font-medium uppercase">SnapYourCode</div>
      <div>
        <button
          className="tab tab-active rounded  text-xs h-8 w-28 bg-[#1b55d9] flex items-center justify-center"
          onClick={() => setDownload(true)}
        >
          <span>
            <BiSolidImage className="w-4 h-4 mr-2" />
          </span>
          Export
        </button>
      </div>
    </div>
  );
};

export default Header;
