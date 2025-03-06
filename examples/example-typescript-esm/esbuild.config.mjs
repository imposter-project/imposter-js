import * as esbuild from "esbuild";
import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import * as console from "node:console";
import commandLineArgs from "command-line-args";

const options = commandLineArgs([
  { name: "debug", alias: "d", type: Boolean },
  { name: "watch", alias: "w", type: Boolean },
]);

const OUTPUT_FILE = "./dist/index.ts";

let projectRunner;

const runProject = () => {
  if (projectRunner) projectRunner.kill("SIGINT");
  projectRunner = spawn("node", [OUTPUT_FILE]);
  projectRunner.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  projectRunner.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });
  projectRunner.on("close", () => {
    console.log(`Restarting project...`);
  });
};

const plugins = [
  {
    name: "rebuild",
    setup(build) {
      let count = 0;
      build.onEnd((result) => {
        if (count++ === 0) console.log("Initial build:", result);
        else console.log("Rebuild:", result);
        runProject();
      });
    },
  },
];

const buildOptions = {
  format: "esm",
  target: "esnext",
  platform: "node",
  bundle: true,
  tsconfig: "./tsconfig.app.json",
  entryPoints: ["./src/index.ts"],
  mainFields: ["module", "main"],
  minify: !options.watch && !options.debug,
  outfile: OUTPUT_FILE,
  sourcemap: true,
  treeShaking: true,
  banner: {
    js: readFileSync("./src/utils/esm-polyfills/require.ts", "utf8"),
  },
};

if (options.watch) {
  const ctx = await esbuild.context({
    ...buildOptions,
    plugins,
  });
  console.log("Watching backend app...");
  await ctx.watch();
} else {
  console.log("Building backend app...");
  await esbuild.build({
    ...buildOptions,
  });
  console.log("Backend app built!");
}
