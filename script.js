//==========================
// DARK MODE
//==========================

const root = document.documentElement;

const toggleBtn =
document.getElementById("darkModeToggle");

const toggleLabel =
document.getElementById("toggleLabel");


function applyTheme(theme){

root.setAttribute(
"data-theme",
theme
);


if(toggleLabel){

toggleLabel.textContent =

theme==="dark"
?"Light Mode"
:"Dark Mode";

}

localStorage.setItem(
"portfolio-theme",
theme
);

}


const savedTheme =
localStorage.getItem(
"portfolio-theme"
);


applyTheme(

savedTheme || "dark"

);


if(toggleBtn){

toggleBtn.addEventListener(

"click",

()=>{

const current =

root.getAttribute(
"data-theme"
);


applyTheme(

current==="dark"
?"light"
:"dark"

);

});

}



//==========================
// LEARNING JOURNEY
//==========================


const items =

document.querySelectorAll(
".t-item"
);


if(items.length>0){


const observer =

new IntersectionObserver(

(entries)=>{


entries.forEach((entry)=>{


if(entry.isIntersecting){

entry.target.classList.add(
"in-view"
);


observer.unobserve(
entry.target
);


}


});


},

{

threshold:.20

}

);


items.forEach((item)=>{

observer.observe(item);

});


}



//==========================
// SMOOTH SCROLL
//==========================


document.querySelectorAll(

'a[href^="#"]'

).forEach((anchor)=>{


anchor.addEventListener(

"click",

function(e){


const target =

document.querySelector(

this.getAttribute("href")

);


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});

}


});

});




//==========================
// CONTACT FORM
//==========================


const form =
document.getElementById(
"contactForm"
);


if(form){


form.addEventListener(

"submit",

function(e){

e.preventDefault();


alert(

"Thank You!\n\nYour message has been submitted successfully."

);


form.reset();


});


}