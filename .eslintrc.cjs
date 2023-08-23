module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  extends: [
    // 기본 규칙 외에 다른 규칙을 추가로 사용하도록 설정합니다.
    "eslint:recommended",
    "plugin:prettier/recommended",
    // 여기서는 eslint: recommended와 plugin: prettier / recommended을 사용합니다.
  ],
  plugins: ["prettier"],
  // Prettier를 사용할 수 있도록 추가 설정합니다.
};
