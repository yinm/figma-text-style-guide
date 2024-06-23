import yinmBase from "eslint-config-yinm";
import yinmReact from "eslint-config-yinm/react";
import yinmTypeScript from "eslint-config-yinm/typescript";
import reactRefresh from "eslint-plugin-react-refresh";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...yinmBase,
  ...yinmTypeScript,
  ...yinmReact,

  {
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
