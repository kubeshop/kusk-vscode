import { commands, ExtensionContext, window } from "vscode";
import { PoliciesPanel } from "./panels/PoliciesPanel";
import { XKuskProvider } from "./providers/XKusk";

export function activate(context: ExtensionContext) {
	const activeOpenApi = window.activeTextEditor?.document?.uri?.fsPath;

	window.registerTreeDataProvider("x-kusk", new XKuskProvider(activeOpenApi));

	window.registerTreeDataProvider(
		"openapi-def",
		new XKuskProvider(activeOpenApi)
	);

	const kuskNewCommand = commands.registerCommand("kusk.new", () => {
		PoliciesPanel.render(context.extensionUri);
	});

	context.subscriptions.push(kuskNewCommand);
}
