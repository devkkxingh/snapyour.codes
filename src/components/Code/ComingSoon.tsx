import React from "react";
import "./Code.css";
import Lottie from "react-lottie";
import * as comingSoonAnimation from "../../animations/coming-soon.json";

const ComingSoon: React.FC = () => {
  return (
    <div
      className="flex justify-center flex-col select-none rounded-md tabs tabs-boxed"
      style={{
        padding: "20px",
      }}
    >
      <div className="rounded-md flex justify-center items-center w-full text-white py-4 border-dotted border-slate-400 border-2">
        <Lottie
          options={{
            animationData: comingSoonAnimation,
            loop: true,
            autoplay: true,
          }}
          // height={200}
          // width={200}
        />
      </div>
    </div>
  );
};

export default ComingSoon;
