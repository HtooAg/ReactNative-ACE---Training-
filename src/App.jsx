import { useState } from "react";
import Item from "../Item";
import List from "../List";

export default function App() {
	const [data, setData] = useState([
		{ id: 1, content: "Hello, World!", name: "Alice" },
		{ id: 2, content: "Yaycha! This is Amazing", name: "Bob" },
		{ id: 3, content: "React is fun!", name: "John" },
	]);

	const [content, setContent] = useState("");
	const [name, setName] = useState("");

	const add = () => {
		const id = data[data.length - 1].id + 1;
		setData([...data, { id: id, content: content, name: name }]);
		setContent("");
		setName("");
	};

	const remove = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	return (
		<div style={{ maxWidth: 600, margin: "20px auto" }}>
			<h1 style={{ textAlign: "center" }}>TodoList</h1>
			<div style={{ textAlign: "center", padding: 10 }}>
				<input
					type="text"
					placeholder="Content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button onClick={() => add()}>Add</button>
			</div>
			<List>
				{data.map((item) => {
					return <Item key={item.id} item={item} remove={remove} />;
				})}
			</List>
		</div>
	);
}
