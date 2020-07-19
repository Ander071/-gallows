"use strict";
let buttons=document.querySelectorAll(".button");
let available=false;
let errors=0;
let word;
let winer=0;
let arr_words=["МЯЧ","БОРЯ","ТЕРЕМОК","АКВАПАРК","ХАЙТЕК","МАЙНКРАФТ","ЩУКА","ПРОПАСТЬ","ОГУРЕЦ","ЖОРА","ШАР"]
function randomazer(){
	let random=Math.floor(Math.random()*(arr_words.length-1));
	word=arr_words[random];
}
randomazer();
 document.querySelectorAll(".otvet")[0].innerHTML=word;
  document.querySelectorAll(".otvet")[1].innerHTML=word;
document.querySelector(".word").innerHTML="";
for (let i=0; i<word.length; i++){
	document.querySelector(".word").innerHTML+="<div class='bukva'></div>";
}
document.querySelector(".knopku").onclick=function(event){
	let target=event.target;
	if (target.tagName!="BUTTON") {
		return;
	}
	target.disabled=true;
	available=false;
	for (let i=0;i<word.length;i++) { 
		
		if (target.innerHTML===word[i]) {
			document.querySelectorAll(".bukva")[i].innerHTML=target.innerHTML;
			winer++;
			available=true;
		}
	}
	if (winer===word.length) {
		setTimeout(()=>{
        document.querySelector(".game_win").style.display="flex";
		},2000);
		for (let i = 0; i < buttons.length; i++) {
    	buttons[i].disabled=true;
    }
    }
	if (available===false) {
    	errors++;
    	document.querySelector("img").src=`img/${errors+1}_kadr.png`;
	}
	if (errors===6) {
		setTimeout(()=>{
			document.querySelector(".game_over").style.display="flex";
		},2000);
    for (let i = 0; i < buttons.length; i++) {
    	buttons[i].disabled=true;
    }
	}
    }
  
document.querySelector("#start").onclick=function(){
	document.querySelector(".game_over").style.display="none";
	for (let i = 0; i < buttons.length; i++) {
    	buttons[i].disabled=false;
    }
randomazer();
 document.querySelectorAll(".otvet")[0].innerHTML=word;
  document.querySelectorAll(".otvet")[1].innerHTML=word;
    document.querySelector("img").src=`img/1_kadr.png`;
    document.querySelector(".word").innerHTML="";
    for (let i=0; i<word.length; i++){
		document.querySelector(".word").innerHTML+="<div class='bukva'></div>";
	}
    errors=0;
    winer=0;
}
document.querySelector("#startwin").onclick=function(){
	document.querySelector(".game_win").style.display="none";
	for (let i = 0; i < buttons.length; i++) {
    	buttons[i].disabled=false;
    }
    randomazer();
     document.querySelectorAll(".otvet")[0].innerHTML=word;
      document.querySelectorAll(".otvet")[1].innerHTML=word;
     document.querySelector("img").src=`img/1_kadr.png`;
    document.querySelector(".word").innerHTML="";
    for (let i=0; i<word.length; i++){
		document.querySelector(".word").innerHTML+="<div class='bukva'></div>";
	}
	winer=0;
	errors=0;
}
 
