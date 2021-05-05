//contact page

const h2=document.createElement("h2");
const para = document.createElement("p");
const container = document.createElement("div");
const foodArray = ["Pizza LMAO", "Pizza PacMan", "Pizza ROFL"]

const contactPageContent = function(){
    h2.textContent = "Contact info:";
    para.textContent = "Phone: (12) 345-6789";
    container.appendChild(h2);
    container.appendChild(para);
    return container;
}

export{
    contactPageContent
}