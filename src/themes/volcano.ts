// Original: https://github.com/dracula/visual-studio-code
// Converted automatically using ./tools/themeFromVsCode

import { PrismTheme } from "./util/types";

const volcanoTheme: PrismTheme = {
  plain: {
    color: "rgb(255 145 145)",
    backgroundColor: "#282A36",
  },
  styles: [
    {
      types: ["property-access"],
      style: { color: "rgb(227 227 227)" },
    },
    {
      types: ["operator"],
      style: { color: "white" },
    },
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "rgb(189, 147, 249)",
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "rgb(130 170 255)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 184, 108)",
      },
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "rgb(248, 248, 242)",
      },
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "rgb(195 232 141)",
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "rgb(199 146 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(98, 114, 164)",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(241, 250, 140)",
      },
    },
  ],
};
export default volcanoTheme;
