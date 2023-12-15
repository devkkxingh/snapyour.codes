import React, { useState } from "react";
import CodeBox from "../Code/CodeBox";
import LeftSideBar from "../LeftSideBar/Index";
import RightSideBar from "../RightSideBar/Index";
import Header from "../Header";
import Footer from "../Footer/Index";

const Dashboard = () => {
  const codeBoxParent = React.useRef<HTMLDivElement>(null);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [downloadFlag, setDownload] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(true);

  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(!isLeftSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div className="h-screen db p-5 flex flex-col md:gap-5 gap-2.5">
      <div className="header content rounded-xl">
        <div className="w-full flex flex-row h-full">
          <Header setDownload={setDownload} />
        </div>
      </div>
      <div className="w-full view sm:mobile-view">
        <div className="dashboard-layout flex w-full gap-5 h-full">
          <div className="content hidden sidebar-left rounded-xl  md:w-3/12 md:block p-5 overflow-auto scroll-smooth scroll-custom ">
            <LeftSideBar />
          </div>

          <div
            ref={codeBoxParent}
            className="content w-full rounded-xl flex lg:m-0 sm:m-auto lg:justify-center snap-y scroll-smooth overflow-auto py-20 md:w-10/12 px-20 lg:px-0"
          >
            <CodeBox
              parent={codeBoxParent}
              downloadFlag={downloadFlag}
              setDownload={setDownload}
            />
          </div>

          <div className="content hidden sidebar-right rounded-xl  md:w-3/12 md:block p-5 overflow-auto scroll-smooth scroll-custom">
            <RightSideBar />
          </div>
        </div>
      </div>
      <div className="footer content rounded-xl block md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
