import { IoSearch } from "react-icons/io5";

interface CustomSearch {
  onChange: (e: string) => void;
}

const CustomSearch = ({ onChange }: CustomSearch) => {
  return (
    <div className="tabs-boxed rounded-md flex items-center h-9 w-full p-2 mb-5 ">
      <IoSearch className="text-white text-sm ml-2 mr-2 w-5" />
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search theme.."
        autoFocus={false}
        className="h-full bg-none outline-none text-white bg-transparent text-sm w-full"
      ></input>
    </div>
  );
};

export default CustomSearch;
