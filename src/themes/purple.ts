/*
 * Synthwave '84 Theme originally by Robb Owen [@Robb0wen] for Visual Studio Code
 * Demo: https://marc.dev/demo/prism-synthwave84
 *
 * Ported for PrismJS by Marc Backes [@themarcba]: https://github.com/themarcba/prism-themes/blob/master/themes/prism-synthwave84.css
 * Ported for prism-react-renderer by Forrest Akin [@forrest-akin]
 */
import type { PrismTheme } from "./util/types";
const purple: PrismTheme = {
  plain: {
    backgroundColor: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
    backgroundImage: "#34294f",
    color: "#f92aad",
  },
  styles: [
    {
      types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#8b949e",
        fontStyle: "italic",
      },
    },
    {
      types: ["literal-property"],
      style: {
        color: "#e233ff",
      },
    },
    {
      types: ["property-access"],
      style: {
        color: "#ff6b00",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#f2cc60",
      },
    },
    {
      types: [
        "tag",
        "attr-name",
        "namespace",
        "number",
        "unit",
        "hexcode",
        "deleted",
      ],
      style: {
        color: "#e2777a",
      },
    },
    {
      types: ["property", "selector"],
      style: {
        color: "#e233ff",
      },
    },
    {
      types: ["function-name"],
      style: {
        color: "#6196cc",
      },
    },
    {
      types: ["boolean", "selector-id", "function"],
      style: {
        color: "#d2a8ff",
      },
    },
    {
      types: ["class-name", "builtin"],
      style: {
        color: "#fff5f6",
      },
    },
    {
      types: ["constant", "symbol"],
      style: {
        color: "#f92aad",
      },
    },
    {
      types: ["important", "atrule", "keyword", "selector-class"],
      style: {
        color: "#ff7b72",
      },
    },
    {
      types: ["string", "char", "attr-value", "regex", "variable"],
      style: {
        color: "#a5d6ff",
      },
    },
    {
      types: ["parameter"],
      style: {
        color: "white",
        fontStyle: "italic",
      },
    },
    {
      types: ["entity", "url"],
      style: {
        color: "#67cdcc",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "#ffffffee",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["entity"],
      style: {
        cursor: "help",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "green",
      },
    },
  ],
};
export default purple;
