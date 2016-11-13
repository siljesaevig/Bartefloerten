function countDown() {
	var today = new Date();

    var BigDay = new Date("February 14, 2017");
    var msPerDay = 24 * 60 * 60 * 1000;

    var timeLeft = (BigDay.getTime() - today.getTime());

    var e_daysLeft = timeLeft / msPerDay;
    var daysLeft = Math.floor(e_daysLeft);
    var yearsLeft = 0;
    if (daysLeft > 365) {
        yearsLeft = Math.floor(daysLeft / 365);
        daysLeft = daysLeft % 365;
    }
    var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
    var hrsLeft = Math.floor(e_hrsLeft);
    var minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);

	var div = document.getElementById('countDown');
    var p = document.getElementById('print');
    p.style.fontSize = "x-large"
    var text = daysLeft + " days " + hrsLeft + " hours " + minsLeft + " minutes";
    p.innerHTML = text;
    div.appendChild(p)
}


