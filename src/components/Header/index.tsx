import { FiDownload, FiImage, FiCode } from "react-icons/fi";
import LogoSvg from "../UI/LogoSvg";
import { FaGithub } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Header = ({ setDownload }: any) => {
  return (
    <div className="flex w-full flex-row justify-between px-5 h-full items-center">
      <div className="logo text-white font-bold italic uppercase flex items-center">
        <LogoSvg />

        <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-black py-1.5 px-3 font-sans text-xs font-normal lowercase text-white">
          <span className="">{"<YourCodes/>"}</span>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-between">
        <Menu as="div" className="relative inline-block text-left ">
          <Menu.Button className="tab tab-active rounded  text-xs h-8 w-28 bg-[#6C22D7] flex items-center justify-evenly">
            Export
            <FiDownload className="w-4 h-4 mr-2" aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() =>
                        setDownload({ enable: true, format: "png" })
                      }
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <FiImage className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <FiImage className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      PNG
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() =>
                        setDownload({ enable: true, format: "svg" })
                      }
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <FiCode className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <FiCode className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      SVG
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <a
          className="text-3xl"
          href="https://github.com/devkkxingh/snapyour.codes"
          target="_blank"
        >
          <FaGithub className="w-10 text-[#6C22D7]" />
        </a>
      </div>
    </div>
  );
};

export default Header;
