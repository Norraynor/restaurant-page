(()=>{"use strict";const e=function(e,n){const o=t(e);o.textContent="",o.appendChild(n)},t=function(e){let t;return t=e.querySelector(".content"),t},n=document.createElement("h2"),o=document.createElement("p"),c=document.createElement("div"),l=document.createElement("table"),a=document.createElement("h2"),r=document.createElement("div"),d=["Pizza LMAO","Pizza PacMan","Pizza ROFL"],i=document.createElement("p"),u=document.createElement("h2"),m=document.createElement("div"),E=function(){return u.textContent="SUPER DUPER RESTAURANTE!",i.textContent="Welcome to the Restaurant",m.appendChild(u),m.appendChild(i),m},h=[...document.querySelectorAll(".tabButton")],p=function(t){switch(C(),t.target.control.id){case"home":e(t.target.nextElementSibling,E());break;case"menu":e(t.target.nextElementSibling,(a.textContent="MENU",l.textContent="",d.forEach((e=>{const t=document.createElement("tr");t.textContent=e,l.appendChild(t)})),l.style.textAlign="left",l.style.margin="0 auto",r.appendChild(a),r.appendChild(l),r));break;case"contact":e(t.target.nextElementSibling,(n.textContent="Contact info:",o.textContent="Phone: (12) 345-6789",c.appendChild(n),c.appendChild(o),c));break;default:console.log("shouldn't be here")}},C=(function(){for(let e=0;e<h.length;e++)h[e].addEventListener("click",p)}(),function(){const t=document.querySelector("label");e(t.nextElementSibling,E())}(),function(){[...document.querySelectorAll(".content")].forEach((e=>{e.textContent=""}))})})();