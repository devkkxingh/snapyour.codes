import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import { HiChevronDown } from "react-icons/hi";

interface SelectProps {
  value: string;
  label: string;
  postfix: string;
  icon: any; // Replace `any` with the appropriate props type for the icon component
}

interface SelectData {
  options: SelectProps[];
  label: string;
  value: string;
  onSelectChange: (value: string) => void;
}

const CustomSelect: React.FC<SelectData> = ({
  options,
  label,
  value,
  onSelectChange,
}) => {
  const [selected, setSelected] = useState(
    options.filter((o) => o.value === value)[0]
  );
  const parentRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [dropdownPos, setDropdownPos] = useState("");
  const dropdownHeight = 215; // height of the dropdown
  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetBottom, setOffsetBottom] = useState(0);
  const oneEleHeight = 32;

  const calculatePos = () => {
    if (parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      const spaceTop = rect.top;
      const spaceBottom = window.innerHeight - rect.bottom - 40;

      // checking if there is enough space below for the dropdown, else show it above
      if (spaceBottom >= dropdownHeight) {
        setDropdownPos("bottom");
      } else if (spaceTop > dropdownHeight) {
        setDropdownPos("top");
      }
    }
  };

  const calculateOffset = () => {
    if (parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      setOffsetTop(rect.top + rect.height + 6);
      setOffsetBottom(
        rect.bottom -
          rect.height -
          (options.length < 7 ? options.length : 7) * oneEleHeight -
          22
      );
    }
  };

  useEffect(() => {
    calculateOffset();
  }, [parentRef]);

  useEffect(() => {
    calculatePos();
    calculateOffset();
    window.addEventListener("resize", calculatePos);
    window.addEventListener("resize", calculateOffset);
    return () => {
      window.removeEventListener("resize", calculatePos);
      window.removeEventListener("resize", calculateOffset);
    };
  }, [selected]);

  useEffect(() => {
    calculatePos();
    window.addEventListener("resize", calculatePos);
    return () => {
      window.removeEventListener("resize", calculatePos);
    };
  }, []);

  const clickOnTab = () => {
    calculatePos();
    calculateOffset();
  };

  const setSelection = (selection: any) => {
    const selectedValue = options.filter((o) => o.label === selection);
    if (selectedValue) {
      const selectedObject = selectedValue[0];
      onSelectChange(selectedObject.value);
      setSelected(selectedObject);
    }
  };

  return (
    <div
      ref={parentRef}
      className="flex flex-col gap-2 w-full overflow-auto select-none"
    >
      <div className="grid items-center cursor-pointer grid-cols-3">
        <div className="col-span-1 relative text-xs text-gray-300 text-left">
          {label}
        </div>
        <div className="col-span-2 w-full flex tabs h-8 ">
          <Listbox value={selected} onChange={(e) => setSelection(e)}>
            <div className="w-full tabs-boxed rounded-md text-xs items-center text-gray-400 flex-col md:flex-row h-8">
              <Listbox.Button
                onClick={() => clickOnTab()}
                ref={btnRef}
                className="w-full relative cursor-default rounded-lg py-2 pl-2 pr-2 text-left shadow-md focus:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-xs h-8 flex items-center"
              >
                <span className="rounded-xl mr-2 text-xl">
                  {selected.icon()}
                </span>
                <span className="block truncate">{selected.label}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <HiChevronDown
                    className="h-5 w-5 text-gray-400 -translate-x-3"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                enterFrom={
                  dropdownPos === "top"
                    ? "opacity-0 -translate-y-3"
                    : "opacity-0 translate-y-3"
                }
                enterTo={"opacity-100 translate-y-0"}
                enter="transition ease-in duration-200"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className={`absolute select-custom z-20 max-h-60 rounded-md py-2 shadow-lg ring-2 ring-white ring-opacity-20 focus:outline-none sm:text-sm overflow-auto px-2`}
                  style={{
                    top:
                      dropdownPos === "top" || dropdownPos === ""
                        ? `${offsetBottom}px`
                        : `${offsetTop}px`,
                    width: btnRef.current?.offsetWidth,
                  }}
                >
                  {options.map((option, idx) => (
                    <Listbox.Option
                      key={option.label}
                      className={({ active }) =>
                        `cursor-pointer text-xs pl-2  h-8 flex text-white items-center w-full   ${
                          active ? "slider " : "text-gray-400"
                        }`
                      }
                      value={option.label}
                    >
                      {({ selected }) => (
                        <>
                          <div className="text-xl">{option.icon()}</div>
                          <div
                            className={`block truncate text-left cursor-pointer ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {option.label}
                          </div>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
