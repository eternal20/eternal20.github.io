window.onscroll = function() {myFunction()};

function myFunction() {
	if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
		document.getElementById("header").className = "header-scroll";
	}
	else{
		document.getElementById("header").className = "header";
	}
}
