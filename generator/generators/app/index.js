import url from "url";

// all below required dependencies need to be listed
// as dependencies in the package.json (not devDeps!)
import Generator from "yeoman-generator";
import yosay from "yosay";
import chalk from "chalk";
import { glob } from "glob";
import packageJson from "package-json";
import semver from "semver";
import upath from "upath";
import path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const webappTestDir = path.normalize("webapp/test/");
const webappTestDir_lt1_124 = path.normalize("webapp/test-lt1_124/");

export default class extends Generator {
	static displayName = "Create a new UI5 application with TypeScript";
	static nestedGenerators = ["wdi5"]; // add wdi5 support

	constructor(args, opts) {
		super(args, opts, {
			// disable the Yeoman 5 package-manager logic (auto install)!
			customInstallTask: "disabled"
		});
	}

	prompting() {
		// Have Yeoman greet the user.
		if (!this.options.embedded) {
			this.log(yosay(`Welcome to the ${chalk.red("generator-ui5-ts-app")} generator!`));
		}

		const minFwkVersion = {
			OpenUI5: "1.90.1", //"1.60.0",
			SAPUI5: "1.90.0" //"1.77.0"
		};

		const fwkCDNDomain = {
			OpenUI5: "sdk.openui5.org",
			SAPUI5: "ui5.sap.com"
		};

		const getTypePackageFor = function (framework, version = "99.99.99") {
			const typesName = semver.gte(version, "1.113.0") ? "types" : "ts-types-esm";
			return `@${framework.toLowerCase()}/${typesName}`;
		};

		const prompts = [
			{
				type: "input",
				name: "namespace",
				message: "Enter your application id (namespace)?",
				validate: (s) => {
					if (/^[a-z0-9][a-z0-9_.]*$/g.test(s)) {
						return true;
					}

					return "Please use lowercase alpha numeric characters and dots only for the namespace.";
				},
				default: "com.myorg.myapp"
			},
			{
				type: "list",
				name: "framework",
				message: "Which framework do you want to use?",
				choices: ["OpenUI5", "SAPUI5"],
				default: "OpenUI5"
			},
			{
				when: (response) => {
					this._minFwkVersion = minFwkVersion[response.framework];
					return true;
				},
				type: "input", // HINT: we could also use the version info from OpenUI5/SAPUI5 to provide a selection!
				name: "frameworkVersion",
				message: "Which framework version do you want to use?",
				default: async (answers) => {
					const npmPackage = getTypePackageFor(answers.framework);
					try {
						return (
							await packageJson(npmPackage, {
								version: "*" // use highest version, not latest!
							})
						).version;
					} catch (ex) {
						chalk.red("Failed to lookup latest version for ${npmPackage}! Fallback to min version...");
						return minFwkVersion[answers.framework];
					}
				},
				validate: (v) => {
					return (v && semver.valid(v) && semver.gte(v, this._minFwkVersion)) || chalk.red(`Framework requires the min version ${this._minFwkVersion} due to the availability of the ts-types!`);
				}
			},
			{
				type: "input",
				name: "author",
				message: "Who is the author of the application?",
				default: this.user.git.name()
			},
			{
				type: "confirm",
				name: "newdir",
				message: "Would you like to create a new directory for the application?",
				default: true
			},
			{
				type: "confirm",
				name: "initrepo",
				message: "Would you like to initialize a local git repository for the application?",
				default: true
			}
		];

		return this.prompt(prompts).then((props) => {
			// use the namespace and the application name as new subdirectory
			if (props.newdir) {
				this.destinationRoot(this.destinationPath(`${props.namespace}`));
			}
			delete props.newdir;

			// apply the properties
			this.config.set(props);

			// determine the ts-types and version
			this.config.set("tstypes", getTypePackageFor(props.framework, props.frameworkVersion));
			this.config.set("tstypesVersion", props.frameworkVersion);

			// appId + appURI
			this.config.set("appId", `${props.namespace}`);
			this.config.set("appURI", `${props.namespace.split(".").join("/")}`);

			// CDN domain
			this.config.set("cdnDomain", fwkCDNDomain[props.framework]);

			// default theme
			if (semver.gte(props.frameworkVersion, "1.108.0")) {
				this.config.set("defaultTheme", "sap_horizon");
			} else {
				this.config.set("defaultTheme", "sap_fiori_3");
			}

			// more relevant parameters
			this.config.set("gte1_98_0", semver.gte(props.frameworkVersion, "1.98.0"));
			this.config.set("gte1_104_0", semver.gte(props.frameworkVersion, "1.104.0"));
			this.config.set("gte1_115_0", semver.gte(props.frameworkVersion, "1.115.0"));
			this.config.set("gte1_120_0", semver.gte(props.frameworkVersion, "1.120.0"));
			this.config.set("lt1_124_0", semver.lt(props.frameworkVersion, "1.124.0"));
		});
	}

	writing() {
		const oConfig = this.config.getAll();

		this.sourceRoot(upath.join(__dirname, "templates"));
		glob
			.sync("**", {
				cwd: this.sourceRoot(),
				nodir: true
			})
			.forEach((file) => {
				let sTargetFile = file;

				// Use different "test" folder for older versions
				if (file.startsWith(webappTestDir_lt1_124)) {
					if (this.config.get("lt1_124_0")) {
						sTargetFile = file.replace(webappTestDir_lt1_124, webappTestDir);
					} else {
						return;
					}
				} else if (file.startsWith(webappTestDir) && this.config.get("lt1_124_0")) {
					return;
				}

				const sOrigin = this.templatePath(file);
				let sTarget = this.destinationPath(sTargetFile.replace(/^_/, "").replace(/\/_/, "/"));

				this.fs.copyTpl(sOrigin, sTarget, oConfig);
			});
	}

	install() {
		this.config.set("setupCompleted", true);
		this.spawnCommandSync("npm", ["install"], {
			cwd: this.destinationPath()
		});
	}

	end() {
		if (this.config.get("initrepo")) {
			this.spawnCommandSync("git", ["init", "--quiet"], {
				cwd: this.destinationPath()
			});
			this.spawnCommandSync("git", ["add", "."], {
				cwd: this.destinationPath()
			});
			this.spawnCommandSync("git", ["commit", "--quiet", "--allow-empty", "-m", "Initial commit"], {
				cwd: this.destinationPath()
			});
		}
	}
}
