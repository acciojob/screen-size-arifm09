//your JS code here. If required.
let widthSpan = document.getElementById("width");
let heightSpan = document.getElementById("height");

var onresize = function() {
   //your code here
   //this is just an example

	let width = widthSpan.innerText;
	let height = heightSpan.innerText;
   width = document.body.clientWidth;
   height = document.body.clientHeight;

	widthSpan.innerText = width;
	heightSpan.innerText = height;
}
window.addEventListener("resize", onresize);