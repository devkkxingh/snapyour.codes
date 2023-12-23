import { useDispatch } from "react-redux";
import {
  EditorHeader,
  EditorLineNumbers,
  EditorReflection,
  EditorStyle,
  EditorVisible,
  ShareLogo,
  fontFamily,
  fontWeight,
  languages,
} from "../../constants/settings";
import { useAppState } from "../../hooks/useAppState";
import CustomSelect from "../UI/CustomSelect";
import { CustomTabs } from "../UI/CustomTabs";
import {
  changeFontFamily,
  changeFontWeight,
  changeHeader,
  changeLogo,
  changeLanguage,
  changeLineNumber,
  changeOS,
  changeReflection,
  changeStyle,
  changeWaterMark,
  changeName,
} from "../../store/reducers/settingReducer";
import { FaUser } from "react-icons/fa";

const Editor = () => {
  const dispatch = useDispatch();
  const header = useAppState("header");
  const watermark = useAppState("watermark");
  const style = useAppState("style");
  const os = useAppState("os");
  const name = useAppState("username");
  const lineNumber = useAppState("lineNumber");
  const reflection = useAppState("reflection");
  const language = useAppState("language");
  const fontFamilyValue = useAppState("fontFamily");
  const fontWeightValue = useAppState("fontWeight");
  const logo = useAppState("logo");
  return (
    <div className="window-frame transition-all ease-in-out select-none">
      <div className="text-white text-left pb-5 font-semibold text-sm">
        Editor
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="grid grid-cols-1">
          <CustomTabs
            defaultValue={header}
            tabTitle="Header"
            tabsData={EditorVisible}
            onTabChange={(value) => dispatch(changeHeader(value))}
          />
        </div>
        {header === "show" && (
          <div className="grid grid-cols-1">
            <CustomTabs
              defaultValue={os}
              tabTitle="OS style"
              tabsData={EditorHeader}
              onTabChange={(value) => dispatch(changeOS(value))}
            />
          </div>
        )}
        <div className="grid grid-cols-1">
          <CustomTabs
            defaultValue={style}
            tabTitle="Style"
            tabsData={EditorStyle}
            onTabChange={(value) => dispatch(changeStyle(value))}
          />
        </div>

        <div className="grid grid-cols-1">
          <CustomTabs
            defaultValue={watermark}
            tabTitle="Watermark"
            tabsData={EditorVisible}
            onTabChange={(value) => dispatch(changeWaterMark(value))}
          />
        </div>
        {watermark === "show" && (
          <>
            <div className="grid grid-cols-1">
              <CustomTabs
                defaultValue={logo}
                tabTitle="Logo"
                tabsData={ShareLogo}
                onTabChange={(value) => dispatch(changeLogo(value))}
              />
            </div>

            <div className="grid grid-cols-3 items-center">
              <div className="col-span-1 relative text-xs text-gray-300 text-left">
                Your Name
              </div>
              <div className="col-span-2 tabs-boxed rounded-md flex items-center h-9 w-full p-2 ">
                <FaUser className="text-white text-sm ml-2 mr-2 w-3" />
                <input
                  value={name}
                  type="text"
                  onChange={(e) => dispatch(changeName(e.target.value))}
                  placeholder="Your name"
                  className="h-full bg-none outline-none text-white bg-transparent text-sm w-full"
                ></input>
              </div>
            </div>
          </>
        )}
        <div className="grid grid-cols-1">
          <CustomSelect
            options={languages}
            label="Language"
            value={language}
            onSelectChange={(value) => dispatch(changeLanguage(value))}
          />
        </div>
        <div className="grid grid-cols-1">
          <CustomTabs
            defaultValue={lineNumber}
            tabTitle="Line number"
            tabsData={EditorLineNumbers}
            onTabChange={(value) => dispatch(changeLineNumber(value))}
          />
        </div>
        <div className="grid grid-cols-1">
          <CustomTabs
            defaultValue={reflection}
            tabTitle="Reflection"
            tabsData={EditorReflection}
            onTabChange={(value) => dispatch(changeReflection(value))}
          />
        </div>
        <div className="grid grid-cols-1">
          <CustomSelect
            options={fontFamily}
            label="Font family"
            value={fontFamilyValue}
            onSelectChange={(value) => dispatch(changeFontFamily(value))}
          />
        </div>
        <div className="grid grid-cols-1">
          <CustomSelect
            options={fontWeight}
            label="Font weight"
            value={fontWeightValue}
            onSelectChange={(value) => dispatch(changeFontWeight(value))}
          />
        </div>
      </div>
    </div>
  );
};
export default Editor;
