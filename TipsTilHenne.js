const contentList = {
	name : "atabar",
	list : [
		{
			topic : "How to react when a guy approchs you?",
			content : "You should do lalalalallala",
			id : 0
		},

		{
			topic : "How to reject when you dont like the guy who approchs you?",
			content : "You should say lalalallala",
			id : 1
		},

		{
			topic : "How to know if the guy interested in you?",
			content : "He will try to ask you out..",
			id : 2

		},
	]
}

function atABar() {
	var ullist = document.getElementById('content-list');
	
	for (var i = 0; i < contentList.list.length; i++) {
		var topic = document.createElement("li");
		var node = document.createTextNode(contentList.list[i].topic);
		topic.appendChild(node);
		topic.setAttribute("id", contentList.list[i].id);
		topic.addEventListener("click", function() {
			getContent(this.id);
		});

		ullist.appendChild(topic);
	}

}

function getContent(id) {
	console.log(id)
	var p = document.getElementById('content');
	p.innerHTML = contentList.list[id].content;

}