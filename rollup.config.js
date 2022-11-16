import commonjs from "@rollup/plugin-commonjs"
// import resolve from "@rollup/plugin-node-resolve"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import typescript from "@rollup/plugin-typescript"
import postcss from "rollup-plugin-postcss"

const packageJson = require("./package.json")

const config = {
	input: "src/components/index.ts",
	external: ["react", "react-dom"],
	output: [
		{
			file: packageJson.main,
			format: "cjs",
			exports: "named",
			sourcemap: true
		},
		{
			file: packageJson.module,
			format: "esm",
			sourcemap: true
		}
	],
	plugins: [
		peerDepsExternal(),
		commonjs(),
		typescript({ tsconfig: "./tsconfig-components.json" }),
		postcss()
	]
}

export default config
