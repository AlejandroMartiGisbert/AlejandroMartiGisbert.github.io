/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('.showall').click(function(){
    document.getElementById("project1").style.display = "block";
    document.getElementById("project2").style.display = "block";
    document.getElementById("project3").style.display = "block";
    document.getElementById("project4").style.display = "block";
    document.getElementById("project5").style.display = "block";
    document.getElementById("project6").style.display = "block";
    document.getElementById("project7").style.display = "block";
    document.getElementById("project8").style.display = "block";
    document.getElementById("project9").style.display = "block";
});

$('.showvideogame').click(function(){
    document.getElementById("project1").style.display = "block";
    document.getElementById("project2").style.display = "block";
    document.getElementById("project3").style.display = "block";
    document.getElementById("project4").style.display = "none";
    document.getElementById("project5").style.display = "none";
    document.getElementById("project6").style.display = "none";
    document.getElementById("project7").style.display = "none";
    document.getElementById("project8").style.display = "none";
    document.getElementById("project9").style.display = "none";
});

$('.showcollege').click(function(){
    document.getElementById("project1").style.display = "none";
    document.getElementById("project2").style.display = "none";
    document.getElementById("project3").style.display = "none";
    document.getElementById("project4").style.display = "block";
    document.getElementById("project5").style.display = "block";
    document.getElementById("project6").style.display = "block";
    document.getElementById("project7").style.display = "none";
    document.getElementById("project8").style.display = "none";
    document.getElementById("project9").style.display = "none";
});

$('.show3d').click(function(){
    document.getElementById("project1").style.display = "none";
    document.getElementById("project2").style.display = "none";
    document.getElementById("project3").style.display = "none";
    document.getElementById("project4").style.display = "none";
    document.getElementById("project5").style.display = "none";
    document.getElementById("project6").style.display = "none";
    document.getElementById("project7").style.display = "block";
    document.getElementById("project8").style.display = "block";
    document.getElementById("project9").style.display = "block";
});
/*
<a class="showall">All</a>
<a class="showvideogame">Videogame</a>
<a class="showcollege">College</a>
<a class="show3d">3D</a>
 */