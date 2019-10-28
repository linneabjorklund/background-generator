//import { without } from 'lodash';
//console.log(without);

var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer: ', _.without(array,3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function startGradient(){
	color1.value = "#00ff00";
	color2.value = "#ff0000";

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
startGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
