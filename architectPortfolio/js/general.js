document.addEventListener("DOMContentLoaded", function(){
     document.getElementById("menu").addEventListener("click", function(){
        let wrapper = document.getElementsByClassName("wrapper")[0];
        let menu = document.getElementsByClassName("menu_items")[0];
        let cross = document.getElementById("menu");
        wrapper.style.position = "absolute";
        wrapper.style.opacity = "0.5";
        menu.style.zIndex = "1";
        menu.style.transition = "all 2s";
        menu.style.transform = "translate(-96%,0)";

    });   
});