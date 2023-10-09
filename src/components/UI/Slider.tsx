import React from "react";
import * as Slider from "@radix-ui/react-slider";
import "./Common.css";

interface CustomSliderProps {
  sliderTitle: string;
  value: number;
  bg: string;
  onSliderChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  sliderTitle,
  value,
  bg,
  onSliderChange,
}) => (
  <div className="grid items-center cursor-pointer grid-cols-3">
    <div className="col-span-1 relative text-xs text-gray-300 text-left">
      {sliderTitle}
    </div>
    <div className="col-span-2">
      <form>
        <Slider.Root
          className="SliderRoot"
          defaultValue={[value]}
          max={100}
          step={1}
          onValueChange={(e) => onSliderChange(e[0])}
        >
          <Slider.Track className="SliderTrack">
            <Slider.Range
              className="SliderRange"
              style={{
                background: bg,
              }}
            />
          </Slider.Track>
          <Slider.Thumb className="SliderThumb" aria-label="Volume" />
        </Slider.Root>
      </form>
    </div>
  </div>
);

export default CustomSlider;
