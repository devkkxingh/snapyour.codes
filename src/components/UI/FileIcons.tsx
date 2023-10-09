import {
  BiLogoCss3,
  BiLogoDocker,
  BiLogoHtml5,
  BiLogoTypescript,
  BiSolidFileJson,
  BiSolidImage,
} from "react-icons/bi";
import { RiCupFill, RiJavascriptFill } from "react-icons/ri";
import { SiCsharp, SiGnubash, SiSwift } from "react-icons/si";
import { TbBrandCpp, TbBrandReact } from "react-icons/tb";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";

export const JavaScriptIcon = () => (
  <div className="text-yellow-500 text-md mr-2">
    <RiJavascriptFill />
  </div>
);

export const TypeScriptIcon = () => (
  <div className="text-blue-500 text-md mr-2">
    <BiLogoTypescript />
  </div>
);

export const ReactJSIcon = () => (
  <div className="text-cyan-500 text-md mr-2">
    <TbBrandReact />
  </div>
);

export const ReactTSIcon = () => (
  <div className="text-blue-500 text-md mr-2">
    <TbBrandReact />
  </div>
);

export const HtmlIcon = () => (
  <div className="text-orange-500 text-md mr-2">
    <BiLogoHtml5 />
  </div>
);

export const CssIcon = () => (
  <div className="text-sky-500 text-md mr-2">
    <BiLogoCss3 />
  </div>
);

export const XmlIcon = () => (
  <div className="text-blue-700 text-md mr-2">
    <HiMiniCodeBracketSquare />
  </div>
);

export const SvgIcon = () => (
  <div className=" text-md mr-2.5 ml-0.5">
    <svg
      xmlns="http://www.w3.org/20001/svg"
      role="img"
      width="14px"
      height="14px"
      viewBox="0 0 512 512"
    >
      <rect width="512" height="512" rx="15%" fill="#f90" />

      <path d="M122 157h268v99H122" />

      <g id="a" fill="#ffffff" stroke="#000000" stroke-width="24">
        <circle cx="256" cy="120" r="44" />

        <circle cx="120" cy="256" r="44" />

        <circle cx="160" cy="160" r="44" />
      </g>

      <use href="#a" transform="matrix(-1 0 0 1 512 0)" />

      <path
        stroke="#ffffff"
        stroke-width="44"
        d="M396 256H256l96-96-96 96V120v136l-96-96 96 96H116"
      />

      <path d="M64.1 256h384v170a22 22 0 01-22 22h-340a22 22 0 01-22-22V256" />

      <path
        fill="none"
        stroke="#ffffff"
        stroke-width="30"
        d="M292 264l-36 172-36-172m-29 55a35 35 0 10-35 35 35 35 0 11-35 35m270-70a35 35 0 00-35-35 35 35 0 00-35 35v70a35 35 0 0035 35 35 35 0 0035-35v-35h-35"
      />

      <path d="M64 256h384v12H64" />
    </svg>
  </div>
);

export const JavaIcon = () => (
  <div className="text-blue-500 text-md mr-2">
    <RiCupFill />
  </div>
);

export const PythonIcon = () => (
  <div className="mr-2.5 ml-0.5">
    <svg
      width="15px"
      height="15px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z"
        fill="url(#paint0_linear_87_8204)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z"
        fill="url(#paint1_linear_87_8204)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_87_8204"
          x1="12.4809"
          y1="2"
          x2="12.4809"
          y2="22.7407"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#327EBD" />
          <stop offset="1" stop-color="#1565A7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_87_8204"
          x1="19.519"
          y1="9.25928"
          x2="19.519"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFDA4B" />
          <stop offset="1" stop-color="#F9C600" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export const KotlinIcon = () => (
  <div className=" text-sm mr-2 ml-1">
    <svg
      width="14px"
      height="14px"
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <linearGradient
          x1="26.599%"
          y1="146.559136%"
          x2="73.8446667%"
          y2="52.3813953%"
          id="linearGradient-1"
        >
          <stop stop-color="#0095D5" offset="9.677%"></stop>
          <stop stop-color="#238AD9" offset="30.07%"></stop>
          <stop stop-color="#557BDE" offset="62.11%"></stop>
          <stop stop-color="#7472E2" offset="86.43%"></stop>
          <stop stop-color="#806EE3" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="13.9840532%"
          y1="37.1049231%"
          x2="68.682392%"
          y2="-13.5538462%"
          id="linearGradient-2"
        >
          <stop stop-color="#0095D5" offset="11.83%"></stop>
          <stop stop-color="#3C83DC" offset="41.78%"></stop>
          <stop stop-color="#6D74E1" offset="69.62%"></stop>
          <stop stop-color="#806EE3" offset="83.33%"></stop>
        </linearGradient>
        <linearGradient
          x1="-16.8361667%"
          y1="91.9396667%"
          x2="76.2191667%"
          y2="-1.11566667%"
          id="linearGradient-3"
        >
          <stop stop-color="#C757BC" offset="10.75%"></stop>
          <stop stop-color="#D0609A" offset="21.38%"></stop>
          <stop stop-color="#E1725C" offset="42.54%"></stop>
          <stop stop-color="#EE7E2F" offset="60.48%"></stop>
          <stop stop-color="#F58613" offset="74.3%"></stop>
          <stop stop-color="#F88909" offset="82.32%"></stop>
        </linearGradient>
      </defs>
      <g>
        <polygon
          fill="url(#linearGradient-1)"
          points="0 256 128.426667 127.573333 256 256"
        ></polygon>
        <polygon
          fill="url(#linearGradient-2)"
          points="0 0 128.426667 0 0 138.666667"
        ></polygon>
        <polygon
          fill="url(#linearGradient-3)"
          points="128.426667 0 0 135.253333 0 256 128.426667 127.573333 256 0"
        ></polygon>
      </g>
    </svg>
  </div>
);

export const JsonIcon = () => (
  <div className="text-yellow-500 text-md mr-2">
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#DBD700"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <rect width="24" height="24" fill="none" />{" "}
        <path d="M5,3H7V5H5v5a2,2,0,0,1-2,2,2,2,0,0,1,2,2v5H7v2H5c-1.07-.27-2-.9-2-2V15a2,2,0,0,0-2-2H0V11H1A2,2,0,0,0,3,9V5A2,2,0,0,1,5,3M19,3a2,2,0,0,1,2,2V9a2,2,0,0,0,2,2h1v2H23a2,2,0,0,0-2,2v4a2,2,0,0,1-2,2H17V19h2V14a2,2,0,0,1,2-2,2,2,0,0,1-2-2V5H17V3h2M12,15a1,1,0,1,1-1,1,1,1,0,0,1,1-1M8,15a1,1,0,1,1-1,1,1,1,0,0,1,1-1m8,0a1,1,0,1,1-1,1A1,1,0,0,1,16,15Z" />{" "}
      </g>
    </svg>
  </div>
);

export const SwiftIcon = () => (
  <div className="text-orange-600 text-base mr-2.5">
    <SiSwift />
  </div>
);

export const DockerIcon = () => (
  <div className="text-blue-400 text-md mr-2.5">
    <BiLogoDocker />
  </div>
);

export const CsharpIcon = () => (
  <div className="text-yellow-500 text-base mr-2.5">
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.6947 22.9999C27.883 22.6617 28 22.2807 28 21.9385V10.0613C28 9.71913 27.8831 9.33818 27.6947 9L16 16L27.6947 22.9999Z"
        fill="#7F3A86"
      />
      <path
        d="M17.0395 29.7433L26.9611 23.8047C27.2469 23.6336 27.5067 23.3382 27.695 23L16.0003 16L4.30566 23C4.49398 23.3382 4.75382 23.6337 5.03955 23.8047L14.9611 29.7433C15.5326 30.0855 16.468 30.0855 17.0395 29.7433Z"
        fill="#662579"
      />
      <path
        d="M27.6947 8.99996C27.5064 8.6617 27.2465 8.36629 26.9608 8.19521L17.0392 2.25662C16.4677 1.91446 15.5323 1.91446 14.9608 2.25662L5.03922 8.19521C4.46761 8.53729 4 9.37709 4 10.0613V21.9386C4 22.2807 4.11694 22.6618 4.30533 23L16 16L27.6947 8.99996Z"
        fill="#9A5196"
      />
      <path
        d="M16.0385 24C11.6061 24 8 20.4112 8 16C8 11.5888 11.6061 8 16.0385 8C18.8458 8 21.4674 9.47569 22.919 11.8618L19.4765 13.9265C18.7492 12.736 17.4399 12 16.0385 12C13.8222 12 12.0193 13.7944 12.0193 16C12.0193 18.2056 13.8222 20 16.0385 20C17.4362 20 18.7421 19.2681 19.4707 18.0832L22.9205 20.1359C21.4692 22.5234 18.8467 24 16.0385 24Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.0001 13V13.9974H22.9999V13H22.0001V13.9974H21V15H22.0001V16.9948H21V18H22.0001V19H22.9999L23 18H25.0001V19H25.9999V18H27V17H25.9999V15H27V13.9974H25.9999V13H25.0001ZM25.0001 17V15H22.9999V16.9948L25.0001 17Z"
        fill="white"
      />
    </svg>
  </div>
);

export const CIcon = () => (
  <div className="text-blue-600 text-base mr-2">
    <TbBrandCpp />
  </div>
);

export const BashIcon = () => (
  <div className="text-white text-base mr-2">
    <SiGnubash />
  </div>
);
