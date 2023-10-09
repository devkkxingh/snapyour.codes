import React from "react";
import { Transition } from "@headlessui/react";
import { CustomTabs } from "./CustomTabs";
import { useDispatch } from "react-redux";
import { changeBoxBackground } from "../../store/reducers/settingReducer";
import {
  BackgroundColor,
  colors,
  gradientColors,
} from "../../constants/settings";

interface CustomColorSelectProps {
  title: string;
  bg: string;
}

export const CustomColorSelect: React.FC<CustomColorSelectProps> = ({
  title,
  bg,
}) => {
  const dispatch = useDispatch();
  const [isShowing, setIsShowing] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("gradient");

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    console.log(value);
  };

  return (
    <div className="flex flex-col gap-2 w-full ">
      <div className="grid items-center cursor-pointer grid-cols-3">
        <div className="col-span-1 relative text-xs text-gray-300 text-left">
          {title}
        </div>
        <div className="col-span-2 w-full flex tabs h-8">
          <div className="tabs-boxed rounded-md flex text-xs items-center flex-col md:flex-row relative h-8 w-full p-2">
            <div
              className="w-full h-full rounded-sm cursor-pointer"
              onClick={() => setIsShowing((isShowing) => !isShowing)}
              style={{
                background: bg,
              }}
            ></div>
          </div>
        </div>
      </div>
      <Transition
        show={isShowing}
        enter="transition-all duration-500"
        enterFrom="max-h-0 opacity-0"
        enterTo="max-h-96 opacity-100"
        leave="transition-all duration-500 delay-500"
        leaveFrom="max-h-96 opacity-100"
        leaveTo="max-h-0 opacity-0"
      >
        <div className="tabs-boxed max-h-full rounded-md p-2 ">
          <Transition.Child
            enter="transition-all duration-500 delay-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all duration-500 delay-300"
            leaveFrom="opacity-100 max-h-full"
            leaveTo="opacity-0 max-h-0"
          >
            <div className="flex flex-col gap-2 w-full">
              <div>
                <CustomTabs
                  defaultValue={"gradient"}
                  tabTitle={""}
                  tabsData={BackgroundColor}
                  onTabChange={handleTabChange}
                />
              </div>
              <div className="p-2 overflow-y-auto overflow-x-hidden">
                {currentTab === "gradient" ? (
                  <div className="tab-gradient grid grid-cols-5 gap-2">
                    {gradientColors.map((item: any) => (
                      <div
                        key={item.key}
                        onClick={() =>
                          dispatch(changeBoxBackground(item.color))
                        }
                        className="w-8 h-8 rounded-full hover:border-2 hover:border-zinc-100 cursor-pointer"
                        style={{ background: item.color }}
                      ></div>
                    ))}
                  </div>
                ) : (
                  <div className="tab-colors grid grid-cols-5 gap-2">
                    {colors.map((color: string, index: number) => (
                      <div
                        key={index}
                        onClick={() => dispatch(changeBoxBackground(color))}
                        className="w-8 h-8 rounded-full hover:border-2 hover:border-zinc-100 cursor-pointer"
                        style={{ background: color }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </div>
  );
};
