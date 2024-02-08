"use strict";

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const form4 = document.getElementById("form4");

const progressEl = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

//+++++++++++++++++Next Form+++++++++++++++++++++++++
//nextOne
function nextOne() {
    form1.style.left = "-150%";
    form2.style.left = "0";

//+++++++++++++++++++++++Next number+++++++++++++++++++++
increamentNumber();

//+++++++++++++++++UpDate progresBar++++++++++++++++++++++
update();

}

//nextTwo
function nextTwo() {
    form2.style.left = "-150%";
    form3.style.left = "0";

//+++++++++++++++++++++++Next number+++++++++++++++++++++
increamentNumber();

//+++++++++++++++++UpDate progresBar++++++++++++++++++++++
update();

}
//nextThree
function nextThree() {
    form3.style.left = "-150%";
    form4.style.left = "0";

//+++++++++++++++++++++++Next number+++++++++++++++++++++
increamentNumber();

//+++++++++++++++++UpDate progresBar++++++++++++++++++++++
update();

}

//+++++++++++++++++Back Form+++++++++++++++++++++++++
//backOne
function backOne() {
    form1.style.left = "0";
    form2.style.left = "-150%";

//++++++++++++++++Back One+++++++++++++++++++++++++++++++
decreametNumber();
//+++++++++++++++++UpDate progresBar++++++++++++++++++++++
update();

}
//backTwo
function backTwo() {
    form2.style.left = "0";
    form3.style.left = "-150%";

//++++++++++++++++Back Two+++++++++++++++++++++++++++++++
decreametNumber();

//+++++++++++++++++UpDate progresBar++++++++++++++++++++++
update();


}
//backThree
function backThree() {
    form3.style.left = "0";
    form4.style.left = "-150%";

//++++++++++++++++Back Two+++++++++++++++++++++++++++++++
decreametNumber();

    //+++++++++++++++++UpDate progresBar++++++++++++++++++++++
    update();

}

//+++++++++++++++Progress UpDate+++++++++++++++++++++++++
function update(){
    circles.forEach((circle,indx) => {
        
        if(indx < currentActive){
            circle.classList.add('active');
        }else {
            circle.classList.remove('active');
        }

        //get all of active classes
        const actives = document.querySelectorAll('.active');

        progressEl.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    });
}

//================== Increament Number===============
function increamentNumber() {
    // next progress number
    currentActive++;
    if (currentActive > circles.length) {
      currentActive = circles.length;
    }
  }
  //================ Decreament Number=================
  function decreametNumber() {
    currentActive--;
    if (currentActive < 1) {
      currentActive = 1;
    }
  }

//+++++++++++++++++++++++++ btn events ++++++++++++++++++++
const btnsEvents = () => {
    const next1 = document.getElementById("next1");
    const next2 = document.getElementById("next2");
    const next3 = document.getElementById("next3");
    const next4 = document.getElementById("next4");


    const back1 = document.getElementById("back1");
    const back2 = document.getElementById("back2");
    const back3 = document.getElementById("back3");

    //next1
    next1.addEventListener("click" , nextOne);
    //next2
    next2.addEventListener("click" , nextTwo);
    //next3
    next3.addEventListener("click" , nextThree);
 


     //back1
    back1.addEventListener("click" , backOne);
    //back2
    back2.addEventListener("click" , backTwo);
     //back3
     back3.addEventListener("click" , backThree);
};

document.addEventListener("DOMContentLoaded" , btnsEvents);