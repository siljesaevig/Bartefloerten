const lines = [
	"Damn Girl is your name Wifi ? Because I’m feeling a connection!",
	"Hey, tie your shoes! I don’t want you falling for anyone else.",
	"is your name wifi cause i'm feeling a connection",
	"if you were a Pikacu i'd choose you",
	"my doctor says i'm lacking vitamin u",
	"Roses are red, violets are blue, lava is hot and so are you.",
	"Damn Girl is your name Wifi ? Because I’m feeling a connection!",
	"Are you made out of grapes? Because you are fine as wine!",
	"You look exactly like my future wife.",
	"I might be ugly but I’ll treat you right!",
	
	"Can you touch me? I want to tell my friends I was touched by an Angel.",
	"There’s only one thing I want to change about you. Your last name.",
	"If I were a cat i’d spend all 9 lives with you.",
	"Of all your beautiful curves, your smile is my favourite.",
		"Damn Girl is your name Wifi ? Because I’m feeling a connection!",
	"Hey, tie your shoes! I don’t want you falling for anyone else.",
	"is your name wifi cause i'm feeling a connection",
	"if you were a Pikacu i'd choose you",
	"my doctor says i'm lacking vitamin u",
	"Roses are red, violets are blue, lava is hot and so are you.",
	"Damn Girl is your name Wifi ? Because I’m feeling a connection!",
	"Are you made out of grapes? Because you are fine as wine!",
	"You look exactly like my future wife.",
	"I might be ugly but I’ll treat you right!",
	"Can you touch me? I want to tell my friends I was touched by an Angel.",
	"There’s only one thing I want to change about you. Your last name.",
	"If I were a cat i’d spend all 9 lives with you.",
	"Of all your beautiful curves, your smile is my favourite."
]



window.onload = function() {
	var div = document.getElementById('lines');

	for (var i = 0; i< 10; i++) {
		var topic = document.createElement("p");
		var node = document.createTextNode(lines[i]);
		topic.appendChild(node);
		div.appendChild(topic);

	}

	var btns = document.getElementById("btns");
	var numberOfButtons = Math.trunc(lines.length / 10) + 2;
	console.log(numberOfButtons)
	for (var i = 1; i<numberOfButtons; i++) {
		var btn = document.createElement("BUTTON");
		var text = document.createTextNode(i.toString());
		btn.addEventListener('click', function() {
			click(this);
		})
		btn.appendChild(text);
		btns.appendChild(btn);

	}
}

function click (btn) {
	var btnNo = btn.innerText;
	var hLines = document.getElementById("lines");
	while (hLines.firstChild) {
    	hLines.removeChild(hLines.firstChild);
	}

    for (var i = (btnNo - 1) * 10; i<(10 + (btnNo - 1) * 10); i++) {
    	var line = lines[i];
    	if (line !== undefined) {
    		var topic = document.createElement("p");
			var text = document.createTextNode(lines[i]);
			topic.appendChild(text);
			hLines.appendChild(topic);
    	}

    }
}