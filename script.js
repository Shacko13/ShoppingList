var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");


for(var i = 0; i < list.length; i++) {
	list[i].addEventListener("click", listClick);
}
function listClick() {
	this.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function removeParent(e) {
	// e.target.removeEventListener("click", removeParent, false);
	e.target.parentNode.remove();
}


function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function() {
// 	console.log("CLICK!!!");
// });