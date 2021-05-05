import {loadPage} from "./page-loader";
import {contactPageContent} from "./contact-page";
import {menuPageContent} from "./menu-page";
import {homePageContent} from "./initial-page";
import './index.css';
console.log("this is index.js");

const buttons = document.querySelectorAll(".tabButton");
const buttonArray = [...buttons];

const pageLoader = function(element){
    clearContents();
    switch(element.target.control.id){
        case "home":
            loadPage(element.target.nextElementSibling,homePageContent());
            break;
        case "menu":
            loadPage(element.target.nextElementSibling,menuPageContent());
            break;
        case "contact":
            loadPage(element.target.nextElementSibling,contactPageContent());
            break;
        default:
            console.log("shouldn't be here");
    }
}
const loadButtons =(function(){
    for(let i=0;i<buttonArray.length;i++){
        buttonArray[i].addEventListener("click",pageLoader)
    }
})();

const clearContents = function(){
    const contents = document.querySelectorAll(".content");
    const contentsArray = [...contents];
    contentsArray.forEach(element => {
        element.textContent = "";
    });
}