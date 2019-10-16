window.onscroll = function() {myFunction()};

function myFunction() {
	if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
		document.getElementById("header").className = "header-scroll";
	}
	else{
		document.getElementById("header").className = "header";
	}
}

const sidebar = document.getElementById("showSidebar");

function scroll(){
	document.getElementById("hero-container").setAttribute("style", "height: auto;") ;
}

function showSidebar() {
	document.getElementById("header").className = "header-click";
	document.getElementById("whitebar1").className = "whitebar1x";
	document.getElementById("whitebar2").className = "whitebar2x";
	document.getElementById("whitebar3").className = "whitebar3x";
	document.getElementById("navbar-menu").className = "navbar-menu-show cf";
	document.getElementById("showSidebar").setAttribute("onclick", "closeSidebar()");
}

function closeSidebar(){
	document.getElementById("header").className = "header";
	document.getElementById("whitebar1").className = "whitebar1";
	document.getElementById("whitebar2").className = "whitebar2";
	document.getElementById("whitebar3").className = "whitebar3";
	document.getElementById("navbar-menu").className = "navbar-menu";
	document.getElementById("showSidebar").setAttribute("onclick", "showSidebar()");
}