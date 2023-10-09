import { createSlice } from "@reduxjs/toolkit";
import { themes } from "prism-react-renderer";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    padding: "64",
    visible: "yes",
    opacity: 100,
    boxBackground: "linear-gradient(-45deg, #402662 0%, #8000FF 100%)",
    header: "show",
    style: "default",
    os: "macos",
    language: "typescript",
    lineNumber: "show",
    reflection: "show",
    fontFamily: "Monaco",
    fontWeight: "400",
    theme: {
      key: 0,
      theme: themes.dracula,
      lineColor: "rgb(255 255 255 / 50% )",
      name: "Dracula",
      bg: "#0d1117eb",
      value: "dracula",
      mergeStyle: "rgb(0 7 0 / 66%)",
    },
    code: `function Counter() {\n  const [count, setCount] = createSignal(0);\n  // Increment the count state every second\n  setInterval(\n    () => setCount(count() + 1),\n    1000\n  );\n  return <div>The count is {count()}</div>\n}`,
  },
  reducers: {
    changePadding: (state, action) => {
      state.padding = action.payload;
    },
    changeVisible: (state, action) => {
      state.visible = action.payload;
    },
    changeOpacity: (state, action) => {
      state.opacity = action.payload;
    },
    changeBoxBackground: (state, action) => {
      state.boxBackground = action.payload;
    },
    changeHeader: (state, action) => {
      state.header = action.payload;
    },
    changeStyle: (state, action) => {
      state.style = action.payload;
    },
    changeOS: (state, action) => {
      state.os = action.payload;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    changeLineNumber: (state, action) => {
      state.lineNumber = action.payload;
    },
    changeReflection: (state, action) => {
      state.reflection = action.payload;
    },
    changeFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
    changeFontWeight: (state, action) => {
      state.fontWeight = action.payload;
    },
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    changeCode: (state, action) => {
      state.code = action.payload;
    },
    resetSettings: (state) => {
      return {
        ...state,
        padding: "64",
        visible: "yes",
        opacity: 100,
        boxBackground: "linear-gradient(-45deg, #402662 0%, #8000FF 100%)",
        header: "show",
        style: "default",
        os: "macos",
        language: "typescript",
        lineNumber: "show",
        reflection: "show",
        fontFamily: "Monaco",
        fontWeight: "400",
        theme: {
          key: 0,
          theme: themes.dracula,
          lineColor: "rgb(255 255 255 / 50% )",
          name: "Dracula",
          bg: "#0d1117eb",
          value: "dracula",
          mergeStyle: "rgb(0 7 0 / 66%)",
        },
        code: `function Counter() {\n  const [count, setCount] = createSignal(0);\n  // Increment the count state every second\n  setInterval(\n    () => setCount(count() + 1),\n    1000\n  );\n  return <div>The count is {count()}</div>\n}`,
      };
    },
  },
});

export const {
  changePadding,
  changeVisible,
  changeOpacity,
  changeBoxBackground,
  changeHeader,
  changeStyle,
  changeOS,
  changeLanguage,
  changeLineNumber,
  changeReflection,
  changeFontFamily,
  changeFontWeight,
  resetSettings,
  changeTheme,
  changeCode,
} = settingsSlice.actions;

export default settingsSlice.reducer;
