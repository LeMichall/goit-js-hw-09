const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let r=null;function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.setAttribute("disabled",""),t.addEventListener("click",(()=>{r=setInterval((()=>{document.body.style.backgroundColor=d()}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(()=>{t.removeAttribute("disabled"),e.setAttribute("disabled",""),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.8c7d9f93.js.map
