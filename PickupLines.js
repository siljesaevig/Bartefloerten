const lines = [
	"Damn Girl is your name Wifi ? Because I’m feeling a connection!",
	"Hey, tie your shoes! I don’t want you falling for anyone else.",
	"is your name wifi cause i'm feeling a connection",
	"if you were a Pikacu i'd choose you",
	"my doctor says i'm lacking vitamin u"
]

window.onload = function() {
	var ul = document.getElementById('lines');

	for (var i = 0; i< lines.length; i++) {
		var topic = document.createElement("li");
		var node = document.createTextNode(lines[i]);
		topic.appendChild(node);
		ul.appendChild(topic);

	}
}