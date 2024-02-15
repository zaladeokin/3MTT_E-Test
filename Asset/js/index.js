import Login from "./handler/Login.js";

window.addEventListener('load', ()=>{
    document.querySelector('form').addEventListener("submit", Login);
});