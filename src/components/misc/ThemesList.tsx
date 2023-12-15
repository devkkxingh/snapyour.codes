import { useState } from "react";
import {
  PaddingTab,
  VisibleTab,
  customThemeSet,
  gradientColors,
} from "../../constants/settings";
import CodeSnippet from "../Code/CodeSnippet";
import ComingSoon from "../Code/ComingSoon";
import CustomSearch from "../UI/CustomSearch";
import FuzzySearch from "fuzzy-search";
import { useAppState } from "../../hooks/useAppState";
import { useDispatch } from "react-redux";
import {
  changeBoxBackground,
  changeTheme,
} from "../../store/reducers/settingReducer";
import cn from "classnames";

interface ThemeList {
  direction: "row" | "col";
}
const ThemesList = ({ direction }: ThemeList) => {
  const dispatch = useDispatch();
  const customTheme = useAppState("theme");
  const [searchValue, setSearchValue] = useState("");
  const searcher = new FuzzySearch(customThemeSet, ["name"], {
    caseSensitive: false,
  });

  const changeThemeValue = (theme: string) => {
    const themeValue = customThemeSet.find((t) => t.value === theme);
    const boxBg = gradientColors.find((b) => b.key === themeValue?.key);
    dispatch(changeBoxBackground(boxBg?.color));
    dispatch(changeTheme(themeValue));
  };
  return (
    <div className="window-frame select-none">
      <div className="text-white text-left pb-5 font-semibold text-sm">
        Themes
      </div>
      <div className="w-full  content !border-0">
        <CustomSearch onChange={(e) => setSearchValue(e)} />
      </div>
      <div
        className={cn("flex gap-8 w-full", {
          "flex-col": direction === "col",
          "flex-row overflow-auto": direction === "row",
        })}
      >
        {searcher.search(searchValue).map((customLayout: any, index: any) => (
          <div className="w-full" key={index}>
            <CodeSnippet
              selected={customTheme.value === customLayout.value}
              bg={gradientColors[customLayout.key].color}
              theme={customLayout.theme}
              name={customLayout.name}
              editorBg={customLayout.bg}
              value={customLayout.value}
              onThemeChange={(value) => changeThemeValue(value)}
            />
          </div>
        ))}
        {(searchValue === "" || searcher.search(searchValue).length === 0) && (
          <div className="w-full">
            <ComingSoon />
          </div>
        )}
      </div>
    </div>
  );
};
export default ThemesList;
