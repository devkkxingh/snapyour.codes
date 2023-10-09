import { PaddingTab, VisibleTab } from "../../constants/settings";
import { useAppState } from "../../hooks/useAppState";
import { CustomColorSelect } from "../UI/CustomColorSelect";
import { CustomTabs } from "../UI/CustomTabs";
import CustomSlider from "../UI/Slider";
import { useDispatch } from "react-redux";
import {
  changeOpacity,
  changePadding,
  changeVisible,
} from "../../store/reducers/settingReducer";

const WindowFrame = () => {
  const dispatch = useDispatch();
  const padding = useAppState("padding");
  const visible = useAppState("visible");
  const opacity = useAppState("opacity");
  const bg = useAppState("boxBackground");
  return (
    <div className="window-frame select-none">
      <div className="text-white text-left pb-5 font-semibold text-sm">
        Window
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="grid grid-cols-1">
          <CustomTabs
            defaultValue={padding}
            tabTitle="Padding"
            tabsData={PaddingTab}
            onTabChange={(value) => dispatch(changePadding(value))}
          />
        </div>
        <div className="grid grid-cols-1">
          <CustomTabs
            defaultValue={visible}
            tabTitle="Visible"
            tabsData={VisibleTab}
            onTabChange={(value) => dispatch(changeVisible(value))}
          />
        </div>
        {visible === "yes" && (
          <>
            <div className="grid grid-cols-1">
              <CustomSlider
                bg={bg}
                value={opacity}
                sliderTitle={"Opacity"}
                onSliderChange={(value) => dispatch(changeOpacity(value))}
              />
            </div>
            <div className="grid grid-cols-1">
              <CustomColorSelect bg={bg} title={"Background"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default WindowFrame;
