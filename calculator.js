//The functionality of the calculator is an algorithom based on some 
//calcualtions that are very complicated and makes little sense themself.
//Why? Because we wanted to and love is complicated.

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

    const mage = parseInt(mform.age.value);

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

    const fsign = document.getElementById("fsign")
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
    	return 0;
    }
    return result;
}

function reset() {
	var btn = document.getElementById("resultBtn");
    //btn.parentNode.removeChild(btn)
    btn.style.display = '';
    var p = document.getElementById('pResult');
    if (p) p.parentNode.removeChild(p);

    var mform = document.getElementById("name")
	mform.value = ""
	

	var MFInput = document.getElementById('MFInput');
	MFInput.checked = false;
	var MMInput = document.getElementById('MMInput');
	MMInput.checked = false;
	document.getElementById("age").value = null;

    var msign = document.getElementById("sign")
    msign.selectedIndex=0

    var fform = document.getElementById("fname")
	fform.value = ""
	

	var FFInput = document.getElementById('FFInput');
	FFInput.checked = false;
	var FMInput = document.getElementById('FMInput');
	FMInput.checked = false;
	document.getElementById("fage").value = null;

    var fsign = document.getElementById("fsign")
    fsign.selectedIndex=0
}

function cal() {
    var result = document.getElementById("pResult");
    var btn = document.getElementById("resultBtn");
    btn.style.display = 'none';
    var viewResult = document.createElement('p');
    viewResult.style.fontSize = "x-large"
    viewResult.setAttribute("id", "pResult");
    var textResult = lovelove();
   	var text = document.createTextNode(textResult + " % MATCH");
	viewResult.appendChild(text);
    result.appendChild(viewResult)
	
}