// Your code goes here

const logoHeading = document.querySelector('h1');
console.log(logoHeading);
logoHeading.addEventListener('mouseover', event => {   
event.target.style.color = 'yellow';
setTimeout(function() {
    event.target.style.color = "";
  }, 1500);
}, false);


const buttons = document.querySelectorAll('.btn');
buttons.forEach(button =>{
button.addEventListener('click',event =>{
event.target.style.backgroundColor = 'yellow';
});
});



const dottedLines = document.getElementsByClassName('intro');
// let dottedLines = document.getElementsByClassName('content-section inverse-content');
// let dottedLines = document.getElementsByClassName('content-pickgit');
dottedlines.addEventListener('scroll', event => {
event.target.style.borderBottom = '2px dashed black';
});


const key = document.getElementsByClassName('container home');
key.addEventListener('keyword', event => {
event.window.alert('WELCOME TO THE FUN BUS!!!');
});


const exclamation = document.querySelector('header h2');
exclamation.addEventListener('compositionupdate', event =>{
event.textContent = '!';
});


const busPic = document.querySelector('header img');
busPic.addEventListener('load', event =>{
event.style.border = '1px black';
});

const textContent = document.getElementsByClassName('text-content');
textContent.addEventListener('select', event => {

});


const destinationPick = document.querySelectorAll('.destination');
destinationPick.addEventListener('copy', event => {
event.target.alert("You copied text!");
});


const body = document.getElementsByTagName('body');
body.addEventListener('resize', event => {
event.target.style.backgroundColor = 'grey';
});


const navBar = document.getElementsByClassName('nav');
console.log(navBar);
navBar[0].addEventListener('animationstart', event => {

});




  
