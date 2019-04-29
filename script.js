let recieveButton = document.getElementById("receive"),
		modal = document.querySelector(".modal"),
		closeButton = document.querySelector(".close"),
		nameInput = document.querySelector(".contactform_name"),
		text = document.getElementsByName("message")[0];

recieveButton.addEventListener("click", function(){
	modal.style.display = "block";
});

recieveButton.addEventListener("click", function(){
	modal.style.display = "block";
});

closeButton.addEventListener("click", function(){
	modal.style.display = "none";
});

nameInput.addEventListener("input", function() {
	text.value = "My name is " + nameInput.value + ". Hello";
	if (nameInput.value == "") {
		text.value = "";
	};
})
