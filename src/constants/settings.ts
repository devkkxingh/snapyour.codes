//  value: string;
import { themes } from "prism-react-renderer";
import {
  BashIcon,
  CIcon,
  CsharpIcon,
  CssIcon,
  DockerIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  JsonIcon,
  KotlinIcon,
  PythonIcon,
  ReactJSIcon,
  ReactTSIcon,
  SvgIcon,
  SwiftIcon,
  TypeScriptIcon,
  XmlIcon,
} from "../components/UI/FileIcons";
import { MacOsFrame, WindowsFrame } from "../components/UI/Frame";
import jetwave from "../themes/jetwave";
import purple from "../themes/purple";
import {
  BoldFont,
  Fira,
  JetBrains,
  MediumFont,
  Monaco,
  RegularFont,
  Source,
  Ubuntu,
} from "../components/UI/FontIcon";
import light from "../themes/light";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

//  label: string;
export const PaddingTab = [
  { value: "16", label: "16" },
  { value: "32", label: "32" },
  { value: "64", label: "64" },
  { value: "128", label: "128" },
];

export const VisibleTab = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

export const BackgroundTab = [
  { value: "default", label: "Default" },
  { value: "alternative", label: "Alternative" },
];

export const BackgroundColor = [
  { value: "gradient", label: "Gradient" },
  { value: "color", label: "Color" },
];

export const EditorStyle = [
  { value: "default", label: "Default" },
  { value: "merge", label: "Merge" },
];

export const EditorHeader = [
  { value: "macos", label: MacOsFrame },
  { value: "windows", label: WindowsFrame },
];

export const ShareLogo = [
  { value: "twitter", label: FaTwitter },
  { value: "linkedin", label: FaLinkedinIn },
];

export const EditorReflection = [
  { value: "show", label: "Show" },
  { value: "hide", label: "Hide" },
];

export const EditorBadge = [
  { value: "show", label: "Show" },
  { value: "hide", label: "Hide" },
];

export const EditorLineNumbers = [
  { value: "show", label: "Show" },
  { value: "hide", label: "Hide" },
];

export const languages = [
  {
    value: "typescript",
    label: "TypeScript",
    postfix: ".ts",
    icon: TypeScriptIcon,
  },
  {
    value: "javascript",
    label: "JavaScript",
    postfix: ".js",
    icon: JavaScriptIcon,
  },

  { value: "jsx", label: "JSX", postfix: ".jsx", icon: ReactJSIcon },
  { value: "tsx", label: "TSX", postfix: ".tsx", icon: ReactTSIcon },
  { value: "html", label: "HTML", postfix: ".html", icon: HtmlIcon },
  { value: "css", label: "CSS", postfix: ".css", icon: CssIcon },
  { value: "xml", label: "XML", postfix: ".xml", icon: XmlIcon },
  { value: "svg", label: "SVG", postfix: ".svg", icon: SvgIcon },
  { value: "java", label: "Java", postfix: ".java", icon: JavaIcon },
  { value: "python", label: "Python", postfix: ".py", icon: PythonIcon },
  { value: "kotlin", label: "Kotlin", postfix: ".kt", icon: KotlinIcon },
  { value: "json", label: "JSON", postfix: ".json", icon: JsonIcon },
  { value: "swift", label: "Swift", postfix: ".swift", icon: SwiftIcon },
  {
    value: "dockerfile",
    label: "Docker",
    postfix: ".dockerfile",
    icon: DockerIcon,
  },
  { value: "csharp", label: "C#", postfix: ".cs", icon: CsharpIcon },
  { value: "cpp", label: "C++", postfix: ".cpp", icon: CIcon },
  { value: "shell", label: "Bash", postfix: ".sh", icon: BashIcon },
];

export const EditorVisible = [
  { value: "show", label: "Show" },
  { value: "hide", label: "Hide" },
];

export const gradientColors = [
  {
    key: 0,
    color: "linear-gradient(-45deg, #402662 0%, #8000FF 100%)",
  },
  {
    key: 1,
    color: "linear-gradient(135deg, #6a3cc0 0%, #240573 100%)",
  },
  {
    key: 2,
    color:
      "linear-gradient(to right top, #8155c6, #9e56cb, #ba55ce, #d654cf, #f053ce)",
  },
  {
    key: 3,
    color:
      "linear-gradient(to right top, #7f469d, #8242aa, #833db7, #8338c4, #8233d2, #8a35da, #9336e2, #9b38ea, #af41ee, #c24af2, #d554f7, #e65ffb)",
  },
  {
    key: 4,
    color:
      "linear-gradient(135deg,  rgba(171,73,222,1) 0%,rgba(73,84,222,1) 100%)",
  },
  {
    key: 5,
    color:
      "linear-gradient(140deg, rgb(9, 171, 241), rgb(5, 105, 148), rgb(4, 84, 118), rgb(6, 119, 167))",
  },
  {
    key: 6,
    color:
      "linear-gradient(to right bottom, #1cb1f2, #00a9f2, #00a0f2, #0097f1, #008def, #0086f1, #007ff2, #0078f2, #0071f6, #006afa, #0062fd, #0059ff)",
  },
  {
    key: 7,
    color:
      "linear-gradient(-45deg, rgba(73,84,222,1) 0%,rgba(73,221,216,1) 100%)",
  },
  {
    key: 8,
    color: "linear-gradient(135deg, #54D2EF 0%, #2AA6DA 100%)",
  },
  {
    key: 9,
    color: "linear-gradient(135deg, #2AA6DA 0%, #1B7B77 100%)",
  },
  {
    key: 10,
    color:
      "linear-gradient(to right bottom, #1e737e, #186b76, #13636d, #0d5b65, #06535d)",
  },
  {
    key: 11,
    color: "linear-gradient(140deg, rgb(165, 142, 251), rgb(65, 206, 189))",
  },
  {
    key: 12,
    color:
      "linear-gradient(to right bottom, #00ffc7, #00c6a5, #148f7e, #205b55, #1e2c2b)",
  },
  {
    key: 13,
    color:
      "linear-gradient(to right bottom, #2be7b5, #1edea2, #16d58f, #13cb7c, #16c268, #0db866, #04ae64, #00a462, #00976c, #008971, #007b72, #006d6d)",
  },
  {
    key: 14,
    color: "linear-gradient(135deg, #33CC99 0%, #FFCC33 100%)",
  },
  {
    key: 15,
    color:
      "linear-gradient(135deg,  rgba(73,221,216,1) 0%,rgba(25,226,115,1) 100%)",
  },
  {
    key: 16,
    color:
      "linear-gradient(to right bottom, #ffcc99, #f6bd83, #edad6e, #e49e59, #da8f44)",
  },
  {
    key: 17,
    color: "linear-gradient(135deg, #FFE174 0%, #FFBF40 100%)",
  },

  {
    key: 18,
    color:
      "linear-gradient(to right bottom, #f66283, #e45475, #d34768, #c2395b, #b12a4e, #a92246, #a1183e, #990d36, #970931, #95052b, #930226, #900020)",
  },
  {
    key: 19,
    color:
      "linear-gradient(140deg, rgb(241 160 61), rgb(192 74 65),  rgb(115, 52, 52))",
  },
  {
    key: 20,
    color: "linear-gradient(135deg, #E233FF 0%, #FF6B00 100%)",
  },
  {
    key: 21,
    color: "linear-gradient(135deg, #FF0076 0%, #590FB7 100%)",
  },
  {
    key: 22,
    color:
      "linear-gradient(to right bottom, #d44be1, #c945d7, #be3fcd, #b43ac3, #a934b9, #b330af, #bb2ca6, #c12a9c, #d6308f, #e73c83, #f34d77, #fb5f6d)",
  },
  {
    key: 23,
    color: "linear-gradient(-45deg, #402662 0%, #F59ABE 100%)",
  },
  {
    key: 24,
    color: "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
  },
  {
    key: 25,
    color: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
  },
  {
    key: 26,
    color:
      "linear-gradient(to right bottom, #82aaff, #6c88cb, #566899, #3f4969, #292d3e)",
  },
  {
    key: 27,
    color:
      "linear-gradient(to right bottom, #e5e5e5, #d0cfd5, #bbbac5, #a5a6b6, #9092a7, #83869d, #777a93, #6a6f89, #646881, #5d6279, #575b71, #515569)",
  },
  {
    key: 28,
    color: "linear-gradient(135deg, #CECED8 0%, #FFFFFF 100%)",
  },
  {
    key: 29,
    color:
      "linear-gradient(to right bottom, #393939, #343435, #2f3030, #2b2b2c, #262727)",
  },
];

export const colors = [
  "#000000",
  "#4B5563",
  "#6B7280",
  "#1e222f",
  "#213043",
  "#383c4a",
  "#D61F69",
  "#999999",
  "#A2B1D2",
  "#FFFFFF",
  "#da4d4d",
  "#e97171",
  "#FF88AA",
  "#fdad5d",
  "#e3db2a",
  "#FFEE66",
  "#ffcc99",
  "#7e3bdf",
  "#8663ed",
  "#BD93F9",
  "#d4b8ff",
  "#79a1ff",
  "#4455BB",
  "#1e88df",
  "#1b55d9",
  "#1a3f95",
  "#1c933f",
  "#64e7a3",
  "#21d5b8",
  "#06535d",
];

export const fontFamily = [
  { value: "Monaco", label: "Monaco", postfix: "", icon: Monaco },
  {
    value: "'Fira code', monospace",
    label: "Fira code",
    postfix: "",
    icon: Fira,
  },
  {
    value: "'JetBrains Mono', monospace",
    label: "JetBrains",
    postfix: "",
    icon: JetBrains,
  },
  {
    value: "'Ubuntu', sans-serif",
    label: "Ubuntu",
    postfix: "",
    icon: Ubuntu,
  },
  {
    value: "'Source Code Pro', monospace",
    label: "Source code",
    postfix: "",
    icon: Source,
  },
];

export const fontWeight = [
  { value: "400", label: "Regular", postfix: "", icon: RegularFont },
  { value: "500", label: "Medium", postfix: "", icon: MediumFont },
  { value: "700", label: "Bold", postfix: "", icon: BoldFont },
];

export const customThemeSet = [
  {
    key: 0,
    theme: themes.dracula,
    lineColor: "rgb(255 255 255 / 50% )",
    name: "Dracula",
    bg: "#0d1117eb",
    value: "dracula",
    mergeStyle: "rgb(0 7 0 / 66%)",
  },
  {
    key: 6,
    theme: themes.vsDark,
    lineColor: "rgb(255 255 255 / 50% )",
    name: "VSDark",
    bg: "#0d1117eb",
    value: "vsdark",
    mergeStyle: "rgb(0 7 0 / 66%)",
  },
  {
    key: 12,
    theme: themes.nightOwl,
    lineColor: "rgb(255 255 255 / 50% )",
    name: "NightOwl",
    bg: "#0d1117eb",
    value: "nightowl",
    mergeStyle: "rgb(0 7 0 / 66%)",
  },
  {
    key: 1,
    theme: themes.duotoneDark,
    lineColor: "rgb(255 255 255 / 50% )",
    name: "DuoTone",
    bg: "#0d1117eb",
    value: "duotone",
    mergeStyle: "rgb(0 7 0 / 66%)",
  },
  {
    key: 20,
    theme: purple,
    lineColor: "rgb(255 255 255 / 50% )",
    name: "PinkOrange",
    bg: "#0d1117eb",
    value: "pinkorange",
    mergeStyle: "rgb(0 7 0 / 66%)",
  },
  {
    key: 5,
    theme: jetwave,
    lineColor: "rgb(255 255 255 / 50% )",
    name: "JetWave",
    bg: "#0d1117eb",
    value: "jetwave",
    mergeStyle: "rgb(0 7 0 / 66%)",
  },
  {
    key: 19,
    theme: themes.shadesOfPurple,
    lineColor: "rgb(255 255 255 / 50% )",
    name: "Volcano",
    bg: "#0d1117eb",
    value: "volcano",
    mergeStyle: "rgb(0 7 0 / 66%)",
  },
  {
    key: 16,
    theme: light,
    lineColor: "rgb(255 255 255 / 50% )",
    name: "SkyLight",
    bg: "#0d1117eb",
    value: "skylight",
    mergeStyle: "rgb(0 7 0 / 66%)",
  },
  {
    key: 27,
    theme: themes.jettwaveDark,
    lineColor: "rgb(255 255 255 / 50% )",
    name: "RockStone",
    bg: "#0d1117eb",
    value: "rockstone",
    mergeStyle: "rgb(0 7 0 / 66%)",
  },
  {
    key: 24,
    theme: themes.nightOwlLight,
    lineColor: "rgb(26 26 26 / 47% )",
    name: "Lighter",
    bg: "#f3f0f7",
    value: "lighter",
    mergeStyle: "rgb(255 255 255 / 66% )",
  },
];

export const exampleCode = `// Code example style
function Sum(a, b){
  console.log({a, b})
  return a + b;
}`;
