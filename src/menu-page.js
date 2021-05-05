//menu page

const table=document.createElement("table");
const h2=document.createElement("h2");
const container = document.createElement("div");
const foodArray = ["Pizza LMAO", "Pizza PacMan", "Pizza ROFL"]

const menuPageContent = function(){
    h2.textContent = "MENU";
    table.textContent = "";
    foodArray.forEach(element => {
        const tr = document.createElement("tr");
        tr.textContent = element;
        table.appendChild(tr);        
    });
    table.style.textAlign = "left";
    table.style.margin = "0 auto";
    container.appendChild(h2);
    container.appendChild(table);
    return container;
}

export{
    menuPageContent
}