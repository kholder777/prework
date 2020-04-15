
/*linked to index6.html*/
/*changing **Box**.*/        
function shrink() 
{
  document.getElementById("box").style.width = "3%";
}
function blue() 
{
  document.getElementById("box").style.backgroundColor = "blue";
}
function grow() 
{
  document.getElementById("box").style.width = "100%";
}
/*-----------------------------------reset-----------
document.getElementById("reset").onclick = function() {
  document.getElementById("box").innerHTML = "";
};


/*document.getElementById("box").onreset = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "The form was reset";
}
//-----------------------------------reset-----------
/*function triangle()
{
  document.getElementById("box")
}*/
//fading Box!...?
var opacity =0;
var intervalID=0;
function fadeOut() 
{
  intervalID=setInterval(hide,20);
}
function fadeIn()
{
  intervalID=setInterval(show,20)
}
function show()
{
  var box = document.getElementById("box");
    opacity = Number(window.getComputedStyle(box).getPropertyValue("opacity"));
  if(opacity<1.00)
   {
    opacity=opacity+0.01;
    box.style.opacity=opacity;
    console.log(opacity);
   }
  else
   {
    clearInterval(intervalID);
   }
}

function hide() 
{
  var box = document.getElementById("box");
    opacity = Number(window.getComputedStyle(box).getPropertyValue("opacity"));
  if(opacity>0.00)
   {
    opacity=opacity-0.01;
    box.style.opacity=opacity;
    console.log(opacity);
   }
  else
   {
    clearInterval(intervalID);
   }
}


/*changing blue button to reset after it has been clicked.
var button = document.getElementById("BluBttn");
button.onclick = function reset()
{
  if(this.contentEditable.)

}
*/


/*changing text colors*/        
function my1Function() 
{
  document.getElementById("greenText").style.color = "green";
}
function my2Function() 
{
  document.getElementById("greenText").style.color = "red";
}
function m123() 
{
  document.getElementById("greenText").style.color = "gold";
}
function a459() 
{
  document.getElementById("goldBttn").style.backgroundColor = "gold";
}
        
/*----------*/
