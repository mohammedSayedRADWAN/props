export default function yarob({
	name = "no content",
	Email = "no content",
	phone = "no content",
	content = "no content",
	children,
}) {
	return (
		<div
			style={{
				background: "white",
				boxShadow: "0px 10px 10px gray",
				color: "#000",
				margin: "10px",
			}}>
			<h1>{name}</h1>
			<h3>{Email}</h3>
			<h3>{phone}</h3>
			<hr></hr>
			<p>{content}</p>
			{children}
		</div>
	);
}
