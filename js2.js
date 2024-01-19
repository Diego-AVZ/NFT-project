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

myDiv.addEventListener('scroll', function() {

    var s = myDiv.scrollTop;

    var h = document.documentElement.scrollHeight;

    var m = h / 2;

    if (s > m) {
        document.getElementById("bgB").src = "bg3.png";
        bgB.classList.remove('fadeOut');
        bgB.classList.add('fadeIn');

    } else {
        document.getElementById("bgB").src = "bg4.png";
        bgB.classList.remove('fadeIn');
        bgB.classList.add('fadeOut');
    }

})
