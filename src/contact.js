export function loadContactPage(){
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");
  contactDiv.innerText = "E-mail: pizza@pizzamail.com \n Phone Number: +500 656 0002";
  content.appendChild(contactDiv);
}

