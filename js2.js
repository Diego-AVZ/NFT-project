/*
var myDiv = document.getElementById("divB");

myDiv.addEventListener('scroll', function() {
    var scrollPosition =  myDiv.scrollTop;
    
    var documentHeight = document.documentElement.scrollHeight;
    
    var middlePoint = documentHeight / 2;
    hasDone = false;

    if (scrollPosition > middlePoint && hasDone == false) {
        hasDone = true;
        console.log("in 111")
        document.getElementById("bgB").style.animation = "fadeOut 3s ease-in;"
        document.getElementById("bgB2").style.animation = "fadeIn 3s ease-in;"
        //document.getElementById("bgB2").style.display = "block";
    } else if (scrollPosition < middlePoint) {
        console.log("in 222")
        document.getElementById("bgB").style.animation = "fadeIn 3s ease-in";
        document.getElementById("bgB2").style.animation = "fadeOut 3s ease-in";
        //document.getElementById("bgB2").style.display = "none";
        hasDone = false;
    }
});
*/

var myDiv = document.getElementById("divB");
var bgB = document.getElementById("bgB");
var isScrollingDown = false;

myDiv.addEventListener('scroll', function() {
    var s = myDiv.scrollTop;
    var h = document.documentElement.scrollHeight;
    var m = h / 2.2;

    // Detectar la dirección del scroll
    if (s > m && !isScrollingDown) {
        isScrollingDown = true;
        bgB.classList.remove('fadeOut');
        bgB.classList.add('fadeIn');
        bgB.style.filter = "invert(0)";
        document.getElementById("bgB").src = "bg5.png";
        
    } else if (s < m && isScrollingDown) {
        isScrollingDown = false;
        bgB.classList.remove('fadeOut');
        bgB.classList.add('fadeIn');
        bgB.style.filter = "invert(100)";
        document.getElementById("bgB").src = "bg4.png";
       
    }
});
