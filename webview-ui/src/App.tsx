import { vscode } from "./utilities/vscode";
import {
	VSCodeButton,
	VSCodeTextField,
} from "@vscode/webview-ui-toolkit/react";
import "./App.css";
import styled from "styled-components";
function App({ yaml }: { yaml?: string }) {
	function handleHowdyClick() {
		vscode.postMessage({
			command: "hello",
			text: "Hey there partner! 🤠",
		});
	}
	return (
		<main>
			<Card>
				<h3>Rate Limiting</h3>
				<CardContent>
					<VSCodeTextField placeholder="Requests per unit" />
					<VSCodeTextField placeholder="Time unit" />
				</CardContent>
				<CardActions>
					<VSCodeButton onClick={handleHowdyClick}>Save</VSCodeButton>
				</CardActions>
			</Card>
			<p>{yaml}</p>
		</main>
	);
}

export default App;

const H1 = styled.h1`
	font-size: 2rem;
	line-height: 36px;
`;

const Card = styled.div`
	border: 1px solid #ccc;

	h3 {
		padding: 16px 24px;
	}
`;

const CardContent = styled.div`
	display: grid;
	gap: 16px;
	margin-top: 24px;
	border-top: 1px solid #ccc;
	padding: 16px 24px;
`;

const CardActions = styled.div`
	margin-top: 24px;
	border-top: 1px solid #ccc;
	padding: 16px 24px;
`;
