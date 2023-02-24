function makeTextNode(text) {
	return document.createTextNode(text);
}


function makeLabel(label, id) {
	var newLabel = document.createElement("label");
	if (id !== undefined && id != "") {
		newLabel.setAttribute("for", id);
	}
	newLabel.appendChild(makeTextNode(label));
	return newLabel;
}

function makeInput(type, id, value, label) {
	var newInput = document.createElement("input");
	newInput.setAttribute("type", type);

	if (id !== undefined && id != "") {
		newInput.setAttribute("id", id);
		newInput.setAttribute("name", id);
	}

	if (value !== undefined && value != "") {
		newInput.setAttribute("value", value);

	}

	if (label !== undefined && label != "") {
		var nLabel = makeLabel(label, id);
		var ndiv = document.createElement("div");
		ndiv.appendChild(nLabel);
		ndiv.appendChild(newInput);
		return ndiv;
	}
	else {
		return newInput;
	}

	
}

function makeSelect(id, values, label) {
	var newSelect = document.createElement("select");

	if (id !== undefined && id != "") {
		newSelect.setAttribute("id", id);
		newSelect.setAttribute("name", id);
	}

	for (var x = 0; x < values.length; x++) {
		var newOption = document.createElement("option");
		newOption.setAttribute("value", x);
		var node = makeTextNode(values[x]);
		newOption.appendChild(node);
		newSelect.appendChild(newOption);

	}

	if (label !== undefined && label != "") {
		var nLabel = makeLabel(label, id);
		var nDiv = document.createElement("div");
		nDiv.appendChild(nLabel);
		nDiv.appendChild(newSelect);
		return nDiv;
	}
	else {
		return newSelect;
	}



	
}

function makeArray(startVal, endVal) {
	var myArray = [];

	for (var x = startVal; x <= endVal; x++) {
		var myString = x.toString();
		myArray.push(myString);

	}

	return myArray;


}