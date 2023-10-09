import { useState, FC, useEffect } from "react";
import clsx from "clsx";
import { Tab } from "@headlessui/react";

interface CustomTab {
  value: string;
  label: string | any;
}

interface TabsProps {
  defaultValue: string;
  tabTitle: string;
  tabsData: CustomTab[];
  onTabChange: (value: string) => void;
}

export const CustomTabs: FC<TabsProps> = ({
  defaultValue,
  tabsData,
  tabTitle,
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const [activeIndex, setActiveIndex] = useState(
    tabsData.findIndex((tab) => tab.value === defaultValue)
  );

  const handleTabClick = (value: string, index: number) => {
    setActiveTab(value);
    setActiveIndex(index);
    onTabChange(value); // Invoke the callback prop with the current tab value
  };

  useEffect(() => {
    const defaultIndex = tabsData.findIndex(
      (tab) => tab.value === defaultValue
    );
    if (defaultIndex !== -1) {
      setActiveIndex(defaultIndex);
    }
  }, [defaultValue, tabsData]);

  return (
    <div className="grid items-center cursor-pointer grid-cols-3  select-none">
      {tabTitle !== "" && (
        <div className="col-span-1 relative text-xs text-gray-300 text-left">
          {tabTitle}
        </div>
      )}

      <div
        className={clsx("w-full flex tabs h-8", {
          "col-span-3": tabTitle === "",
          "col-span-2": tabTitle !== "",
        })}
      >
        <Tab.Group>
          <Tab.List className="tabs-boxed rounded-md flex w-full text-xs items-center text-gray-400 flex-col md:flex-row relative">
            <span
              className="slider absolute h-6 transition-all duration-300"
              style={{
                left: `calc(calc(100% / ${tabsData.length}) * ${activeIndex} + 4px)`,
                width: `calc(100% / ${tabsData.length} - 8px)`,
              }}
            />
            {tabsData.map((tab, idx) => (
              <Tab
                key={idx}
                className={clsx(
                  "tab relative outline-none z-10 flex justify-center items-center w-1 flex-grow h-full",
                  {
                    "tab-active": tab.value === activeTab,
                  }
                )}
                onClick={() => handleTabClick(tab.value, idx)}
                data-value={tab.value}
              >
                {tab.label}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    </div>
  );
};
