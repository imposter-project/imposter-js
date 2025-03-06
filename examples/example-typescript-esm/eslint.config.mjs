import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["**/node_modules/**", "**/dist/**", "**/apis/**"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.app.json", "./tsconfig.test.json"],
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // TODO: to be re-enforced soon!
      "@typescript-eslint/no-explicit-any": "off",
      // to enforce using type for object type definitions, can be type or interface
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    },
  },
);
