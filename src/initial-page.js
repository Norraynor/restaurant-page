//home page

const para=document.createElement("p");
const h2=document.createElement("h2");
const container = document.createElement("div");

const homePageContent = function(){
    h2.textContent = "SUPER DUPER RESTAURANTE!";
    para.textContent = "Welcome to the Restaurant";
    container.appendChild(h2);
    container.appendChild(para);
    return container;
}

export{
    homePageContent
}
