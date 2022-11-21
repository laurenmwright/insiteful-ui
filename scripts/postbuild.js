const path = require("path")
const fs = require("fs/promises")

async function run() {
	return Promise.all([
		fs.readFile("package.json").then((f) => {
			const json = JSON.parse(f.toString())

			json.private = false

			for (const key of ["main", "module", "types"]) {
				json[key] = json[key]?.replace("dist/", "")
			}

			for (const key of ["devDependencies", "browserslist", "eslintConfig", "scripts"]) {
				delete json[key]
			}

			return fs.writeFile(
				path.join("dist", "package.json"),
				JSON.stringify(json, null, "\t")
			)
		}),
		fs.readFile("package-lock.json").then((f) => {
			const json = JSON.parse(f.toString())

			delete json.packages[""].devDependencies

			for (const key in json.packages) {
				if (json.packages[key].dev) {
					delete json.packages[key]
				}
			}

			return fs.writeFile(
				path.join("dist", "package-lock.json"),
				JSON.stringify(json, null, "\t")
			)
		}),
		fs.copyFile("README.md", path.join("dist", "README.md")),
		process.env.LINK_NODE_MODULES === "true"
			? fs.symlink("../../aacms-frontend/node_modules", "dist/node_modules")
			: undefined
	])
}

module.exports = run()
