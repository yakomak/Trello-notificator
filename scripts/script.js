var elms_soon = document.querySelectorAll('.is-due-soon');
var elms_now = document.querySelectorAll('.is-due-now');
var elms_past = document.querySelectorAll('.is-due-past');

const chek = function(elms, color1, color2) {
	for (var i = elms.length - 1; i >= 0; i--) {
		elm = elms[i]; 
		var k=0;
		while(k<8) {
	    if(elm === null) { break; }
			if(elm.className === 'list js-list-content') {elm.style.background = color1}
			if(elm.className === 'js-list list-wrapper') {elm.style.background = color2}
			elm = elm.parentElement; 
			k++;
		}
	}
}


const chekk = function() {   
	chek(elms_past, 'brown', 'red');
  chek(elms_soon, 'yellow', 'red');
	chek(elms_now, 'red', 'red');
}

window.setInterval(chekk, 5000);
