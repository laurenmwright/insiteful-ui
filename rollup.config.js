import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      //dir: "dist",
      file: packageJson.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    // {
    //   file: packageJson.module,
    //   format: "esm",
    //   sourcemap: true
    // }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    postcss()
  ]
};