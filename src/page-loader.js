const loadPage = function(labelElement,contentObj){
    const content = getContent(labelElement);
    content.textContent = "";
    content.appendChild(contentObj);
}

const getContent = function(labelElement){
    let currentContent;
    currentContent=labelElement.querySelector(".content");
    
    return currentContent;
}

export {
    loadPage
}