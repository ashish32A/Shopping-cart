let card = document.querySelector(".trend");
let card1 = document.getElementById("trendsec");
let blog1 = document.querySelector(".trends");
let mainpage = document.querySelector(".main");
let blog = document.getElementById("blog");
let about = document.querySelector(".about");
let contact = document.querySelector(".Contact"); 
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


function Shop() {
    mainpage.style.display = "none";
    blog1.style.display = "none";
    card.style.display = "block";
    card1.style.display = "block";
    about.style.display = "none";
    contact.style.display="none";
    document.getElementById("shop").style.color = "rgb(2,173,173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("abouts").style.color = "black";
    document.getElementById("contact").style.color = "black";

}
function blogs() {
    mainpage.style.display = "none";
    card.style.display = "none";
    blog1.style.display = "block";
    card1.style.display = "none";
    about.style.display = "none";
    contact.style.display="none";
    document.getElementById("blog").style.color = "rgb(2,173,173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("abouts").style.color = "black";
    document.getElementById("contact").style.color = "black";

}

function home() {
    mainpage.style.display = "flex";
    blog1.style.display = "block";
    card.style.display = "block";
    card1.style.display = "block";
    about.style.display = "none";
    contact.style.display="none";
    document.getElementById("home").style.color = " rgb(2,173,173)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("abouts").style.color = "black";
    document.getElementById("contact").style.color = "black";
}
function about1(){
    about.style.display = "block";
    mainpage.style.display = "none";
    card.style.display = "none";
    blog1.style.display = "none";
    card1.style.display = "none";
    contact.style.display="none";
    document.getElementById("abouts").style.color = " rgb(2,173,173) ";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("contact").style.color = "black";
}
function contact1(){
    about.style.display = "none";
    mainpage.style.display = "none";
    card.style.display = "none";
    blog1.style.display = "none";
    card1.style.display = "none";
    contact.style.display="block";
    document.getElementById("abouts").style.color = " black ";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("contact").style.color = "rgb(2,173,173)";
}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
      }else{
        document.querySelector('#scroll-top').classList.remove('active');
      }
}
   menu.onclick = () => {
  
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
  }