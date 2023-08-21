function changeMyTextColor() {
	const body = document.getElementsByTagName("body")[0];
	body.style.color = "red";
	console.log("in changeMyTextColor");
}

function changeMyTextColor2() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "file:///C:/Users/Florin/Desktop/add-buttons-extension/blabla.js";
	document.head.appendChild(script);
	console.log("in changeMyTextColor2");
}
