export default function Item({ item, remove }) {
	return (
		<li
			style={{
				borderBottom: "1px solid #ddd",
				padding: 10,
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<span>
				{item.content} - <b>{item.name}</b>
			</span>
			<button
				onClick={() => remove(item.id)}
				style={{ cursor: "pointer" }}
			>
				Delete
			</button>
		</li>
	);
}
