import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./antd-theme/antd-customized.less";
const root = document.getElementById("root");

ReactDOM.render(
	<React.StrictMode>
		<App {...root?.dataset} />
	</React.StrictMode>,
	root
);
