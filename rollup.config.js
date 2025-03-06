import typescript from "rollup-plugin-typescript2";

export default {
  external: ["child_process", "console", "path", "fs", "http", "os", "net"],
  input: "src/index.ts",
  output: [
    {
      exports: "named",
      file: "dist/cjs/index.cjs",
      format: "cjs",
    },
    {
      exports: "named",
      file: "dist/esm/index.js",
      format: "es",
    },
  ],
  plugins: [typescript()],
};
