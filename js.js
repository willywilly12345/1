var divShow = document.getElementById("show"),
mitmieter = document.getElementById("mitmieter");
mitmieter.onclick = function() {
	divShow.classList.toggle("hide");
}

// Button of Weitere zum Haushalt gehörende Personen

var hinzufügen = document.getElementById("hinzufügen"),
gehörende = document.getElementById("gehörende"),
innerGehörende = document.getElementById("inner-gehörende");

hinzufügen.addEventListener("click", function(event){
	event.preventDefault()
});

hinzufügen.onclick = function() {
	var main1 = document.createElement("div"),
	main2 = document.createElement("div"),
	innerElm1 = document.createElement("div"),
	innerElm2 = document.createElement("div"),
	inputFiled = document.createElement("input"),
	inputFiled2 = document.createElement("input"),
	label1 = document.createElement("label"),
	label2 = document.createElement("label"),
	icon = document.createElement("i");
	// Creat Atrr for main Div (s)
	main1.setAttribute("class","col-sm-6");
	main2.setAttribute("class","col-sm-6");
	// Set class for icon
	icon.setAttribute("class", "fas fa-trash-alt fa-2x")
	// Label
	label1.textContent = "Vorname *"
	label2.textContent = "Nachname *"
	// Set label in inner div (s)
	innerElm1.appendChild(label1);
	innerElm2.appendChild(label2);
	// Create input
	inputFiled.setAttribute("type", "text")
	inputFiled.setAttribute("value", "")
	inputFiled2.setAttribute("type", "text")
	inputFiled2.setAttribute("value", "")
	// Set input in inner div (col-sm-6)
	innerElm1.appendChild(inputFiled);
	innerElm2.appendChild(inputFiled2);
	innerElm2.appendChild(icon);
	// Set two mainor div inside major
	main1.appendChild(innerElm1);
	main2.appendChild(innerElm2);
	gehörende.firstElementChild.appendChild(main1)
	gehörende.firstElementChild.appendChild(main2);
	
	// icon for delete
	icon.onclick = function() {
		main1.remove()
		main2.remove()
	}
};
