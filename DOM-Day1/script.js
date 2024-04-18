const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const li_1  = document.createElement("li");
const li_2 = document.createElement("li");
const li_3 = document.createElement("li");
const main = document.createElement("main");
const section = document.createElement("section");
const h1 = document.createElement("h1");

li_1.innerHTML = "Name: Johnvilin Sibina";
li_2.innerHTML = "City: Nagercoil";
li_3.innerHTML = "Age: 25";
h1.innerHTML = "Above details are created using DOM"




header.appendChild(nav);
nav.appendChild(ul);
ul.append(li_1,li_2,li_3);
main.appendChild(section);
section.appendChild(h1);
document.body.append(header,main);