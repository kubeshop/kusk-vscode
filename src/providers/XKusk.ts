import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import * as YAML from "yaml";
export class XKuskProvider implements vscode.TreeDataProvider<Dependency> {
	constructor(private workspaceRoot?: string) {}

	getTreeItem(element: Dependency): vscode.TreeItem {
		return element;
	}

	getChildren(element?: Dependency): Thenable<Dependency[]> {
		if (!this.workspaceRoot) {
			vscode.window.showInformationMessage("No openapi file found!");
			return Promise.resolve([]);
		}

		if (element) {
			return Promise.resolve(
				this.getDepsInPackageJson(
					path.join(
						this.workspaceRoot,
						"node_modules",
						element.label,
						"package.json"
					)
				)
			);
		} else {
			const packageJsonPath = path.join(this.workspaceRoot, "package.json");
			if (this.pathExists(packageJsonPath)) {
				return Promise.resolve(this.getDepsInPackageJson(packageJsonPath));
			} else {
				vscode.window.showInformationMessage("Workspace has no package.json");
				return Promise.resolve([]);
			}
		}
	}

	/**
	 * Given the path to package.json, read all its dependencies and devDependencies.
	 */
	private getDepsInPackageJson(openapiPath: string): Dependency[] {
		if (!this.pathExists(openapiPath)) {
			return [];
		}

		const openapiJson = YAML.parse(fs.readFileSync(openapiPath, "utf-8"));
		return [];
	}

	private pathExists(p: string): boolean {
		try {
			fs.accessSync(p);
		} catch (err) {
			return false;
		}
		return true;
	}
}

class Dependency extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		private version: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState
	) {
		super(label, collapsibleState);
		this.tooltip = `${this.label}-${this.version}`;
		this.description = this.version;
	}

	iconPath = {
		light: path.join(
			__filename,
			"..",
			"..",
			"resources",
			"light",
			"dependency.svg"
		),
		dark: path.join(
			__filename,
			"..",
			"..",
			"resources",
			"dark",
			"dependency.svg"
		),
	};
}
