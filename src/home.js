export function loadHomePage() {
  const content = document.getElementById("content");

  const pizzaImg = document.createElement("img");
  pizzaImg.src = "./pizza.jpg";
  pizzaImg.alt = "pizza";

  const websiteHeader = document.createElement("h1");
  websiteHeader.innerText = "Pepperoni Pizza Parlor";

  const websiteSubtitle = document.createElement("h4");
  websiteSubtitle.innerText = "The best pizza you'll ever have!";

  content.appendChild(websiteHeader);
  content.appendChild(websiteSubtitle);
  content.appendChild(pizzaImg);

}