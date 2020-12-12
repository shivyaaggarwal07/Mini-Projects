var character = document.getElementById("character");
var block = document.getElementById("block");
 
 var counter = 0;
 function preload()
 {
 	//loading the images
 }
 function keyPressed()
 {
 	if(key == 38)
 	{
 		jump();
 	}
 }
function jump()
{
	// want to add class animate only if it is not added
	if(character.classList != "animate"){
	character.classList.add("animate");
}
	// to make the character jump again and again
	setTimeout(function(){
			character.classList.remove("animate");
	}, 500) ;


}

//function that checks after 10s that you have lost or not
var checkdinodead = setInterval(function(){
//getting the top position of the character
var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockleft =parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if(blockleft<20 && blockleft>0 && charactertop>=130){
	//also when you lose need to remove the aniamtion of the block
	block.style.animation="none";
	block.style.display="none";
		alert("YOU LOSE. score:" + Math.floor(counter/100));
		counter = 0;
}
else
{
	counter++;
	document.getElementById("scorespan").innerHTML = Math.floor(counter/100);

}
}, 10);
