import menuImg from "./menu.png";


export function loadMenuPage() {
  const content = document.getElementById("content");
  const image = document.createElement("img");
  image.src = menuImg;
  image.alt = "Pizzeria Menu";
  content.appendChild(image);
}