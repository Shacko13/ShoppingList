var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");
var deleteBtns = document.getElementsByClassName("delete");

// event listener for delete buttons
for(var i = 0; i < deleteBtns.length; i++) {
	deleteBtns[i].addEventListener("click", removeParent, false);
}

// deleting li from ul
function removeParent(e) {
	e.target.removeEventListener("click", removeParent, false);
	e.target.parentNode.remove();
}

// toggle "done" class
function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function () {
	var target = getEventTarget(event)
	target.classList.toggle("done");
}

// add new li's
function inputLength() {
	return input.value.length;
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
	// if(inputLength() > 0)
	if(input.value !== "") {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	// if(inputLength() > 0 && event.keyCode === 13)
	if(input.value !== "" && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);