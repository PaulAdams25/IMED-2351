var switchText = document.getElementById("core");
	console.log(switchText.childNodes.length);

var tagList = document.getElementsByTagName("li");
	console.log("Number of li links" + tagList.length);

var newItem = document.createElement("li");
var newText = document.createTextNode("This is the first time I have created a text node in the footer!");

switchText.appendChild(newItem);
newItem.appendChild(newText);

var a = 4346365551.546415*9-28484454584;
var b = 659165118561+648532283181;
var numbersEqual;

	if ( a==b ){
		numbersEqual = true;
	}	else{
		numbersEqual = false;
	}
		console.log("The numbers are equal " + numbersEqual);
