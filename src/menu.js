export function loadMenuPage() {
  const content = document.getElementById("content");
  const menuImg = document.createElement("img");
  menuImg.src = "./menu.png";
  menuImg.alt = "Pizzeria Menu";
  content.appendChild(menuImg);
}