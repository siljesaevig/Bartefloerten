function lovelove() {
	var mform = document.getElementById("male")
	const mname = mform.name.value;
	
	var radios = document.getElementsByName('mgender');
	var mgender = 0;
	for (var i = 0, length = radios.length; i < length; i++) {
	    if (radios[i].checked) {
	        mgender = parseInt(radios[i].value) + 1;
	        break;
	    }
	}

    const mage = mform.age.value;

    const msign = document.getElementById("sign")
    const mvsign = parseInt(msign.options[msign.selectedIndex].value) + 1;

    // FEMALE
    var fform = document.getElementById("female")
	const fname = fform.name.value;
	
	var fradios = document.getElementsByName('fgender');
	var fgender = 0;
	for (var i = 0, length = fradios.length; i < length; i++) {
	    if (fradios[i].checked) {
	        fgender = parseInt(fradios[i].value) + 1;
	        break;
	    }
	}

    const fage = parseInt(fform.age.value);

    const fsign = document.getElementById("sign")
    const fvsign = parseInt(fsign.options[fsign.selectedIndex].value) + 1;

    // ALGORITHM
    var r = mname.length + fname.length + (mgender * 10) + (fgender * 11);
    console.log(r);
    var r1 = (fage - 10) + (mage + 5) + (mvsign * 26) + (fvsign * 23);
    console.log(r1);
    var result = (r + r1) % 100;
    if (result < 75) {
    	result = 77;
    } else if (isNaN(result)) {
    	console.log("heyo")
    	return 0;
    }
    return result;
}

function cal() {
    var result = document.getElementById("result");
    var btn = document.getElementById("resultBtn");
    btn.parentNode.removeChild(btn)
    var viewResult = document.createElement('p');
    viewResult.style.fontSize = "xx-large"
    var textResult = lovelove();
   	var text = document.createTextNode(textResult);
	viewResult.appendChild(text);
    result.appendChild(viewResult)
	
}