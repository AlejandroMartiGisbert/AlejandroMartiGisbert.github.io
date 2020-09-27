/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function varColapse() {
  var x = document.getElementById("navigation");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function darkModeToggler() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var x = document.getElementsByClassName("text-box");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.toggle("box-dark-mode");
      //x[0].classList.toggle("dark-mode");
    }
  
}/*
function switchTheme(e) {
    var element = document.body;
    if (e.target.checked) {
      //  document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
       // document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }  
 //   element.classList.toggle("dark-mode");
}*/
/* Open when someone clicks on the span element */
function openNav() {
  if(document.getElementById("myNav").style.width == "100%"){
    closeNav();
  }else{
    document.getElementById("myNav").style.width = "100%";
  }
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
} 
/*3d tab*/
function open3d() {
document.getElementById("3dtab").style.height = "100%";
}
function close3d() {
  document.getElementById("3dtab").style.height = "0%";
}
/*Website*/
function openweb() {
document.getElementById("website").style.height = "100%";
}
function closeweb() {
  document.getElementById("website").style.height = "0%";
}
/*Tower*/
function opentower() {
document.getElementById("tower").style.height = "100%";
}
function closetower() {
  document.getElementById("tower").style.height = "0%";
}
/*html5*/
function openhtml5() {
document.getElementById("html5").style.height = "100%";
}
function closehtml5() {
  document.getElementById("html5").style.height = "0%";
}
/*2d*/
function open2d() {
document.getElementById("2dtab").style.height = "100%";
}
function close2d() {
  document.getElementById("2dtab").style.height = "0%";
}
/*Game*/
function opengame() {
document.getElementById("Gamedev").style.height = "100%";
}
function closegame() {
  document.getElementById("Gamedev").style.height = "0%";
}
/* Open */
function openPage() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closePage() {
  document.getElementById("myNav").style.height = "0%";
}