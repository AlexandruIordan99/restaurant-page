import pizzaImg from "./pizza.jpg";

export function loadHomePage() {
  const content = document.getElementById("content");

  const image = document.createElement("img");
  image.src = pizzaImg;
  image.alt = "pizza";
  image.id = "pizzaPhoto";

  const websiteHeader = document.createElement("h1");
  websiteHeader.innerText = "Pepperoni Pizza Parlor";

  const websiteSubtitle = document.createElement("h4");
  websiteSubtitle.innerText = "The best pizza you'll ever have!";

  content.appendChild(websiteHeader);
  content.appendChild(websiteSubtitle);
  content.appendChild(image);

}