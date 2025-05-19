import {loadHomePage} from './home.js';
import {loadMenuPage} from './menu.js';
import {loadContactPage} from './contact.js';
import {emptyContent} from './emptyContent.js';

loadHomePage();

const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", (e) => {
  emptyContent()
  loadMenuPage();
})

const contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click", (e) => {
  emptyContent()
  loadContactPage();
})

const homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", (e) => {
  emptyContent()
  loadHomePage();
})

function switchTab(){
  emptyContent();
}