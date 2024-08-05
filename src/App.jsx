import { useState } from "react";

export default function App() {
	const [state, setState] = useState("green");
	return (
		<>
			<h1>Hello React!</h1>
			<div
				style={{
					width: 200,
					height: 200,
					backgroundColor: state,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					overflow: "hidden",
					gap: 10,
				}}
			>
				<button onClick={() => setState("red")}>Red</button>
				<button onClick={() => setState("green")}>Green</button>
			</div>
		</>
	);
}
