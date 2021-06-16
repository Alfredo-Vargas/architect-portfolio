var menu_on = false;
var img_sources = ["/proj_img/bancodado0.jpg", "/proj_img/comoda0.jpg", "/proj_img/mesa0.jpg", "/proj_img/SofaMesa0.jpg", "/proj_img/puff_shelf0.jpg"];
var img_descriptions = ["Dice Stools", "Chest of Dressing", "Center-Side Table", "Sofa-Table", "Puff-Shelf"];
var totalSlides = 4; // starts counting from 0
var slideIndex = 0;

var touchstartX = 0, touchstartY = 0;
var touchendX = 0, touchendY = 0;

window.onload = function(){
    displaySlide(slideIndex); 

    var gesuredZone = document.getElementById("slides_container");
    gesuredZone.addEventListener('touchstart', function(event) {
        touchstartX = event.touches[0].clientX;
        touchstartY = event.touches[0].clientY;
    }, false);
    gesuredZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].clientX;
        touchendY = event.changedTouches[0].clientY;
        handleGesure();
    }, false);
}

function displaySlide(slideIndex){
    let image = document.getElementById("active_image");
    let descr = document.getElementById("img_description");
    image.src = img_sources[slideIndex];
    descr.innerHTML = img_descriptions[slideIndex];
}

function handleGesure() {
    var swiped = 'swiped: ';
    if (touchendX < touchstartX) {
        if (slideIndex < totalSlides){
            slideIndex++;
            displaySlide(slideIndex);
        }
    }
    if (touchendX > touchstartX) {
        if (slideIndex > 0){
            slideIndex--;
            displaySlide(slideIndex);
        }
    }
    /*
    if (touchendY < touchstartY) {
        alert(swiped + 'down!');
    }
    if (touchendY > touchstartY) {
        alert(swiped + 'left!');
    }
    if (touchendY == touchstartY) {
        alert('tap!');
    }
    */
}
function toggleMenu(){
    menu_on = !menu_on;
    let wrapper = document.getElementsByClassName("wrapper")[0];
    let menu = document.getElementsByClassName("menu_items")[0];
    let cross = document.getElementById("menu");
    if (menu_on){
        menu.style.display = "block";
        menu.style.transform = "translateX(100%)";
        setTimeout(animateIn, 100);
    }
    else{
        wrapper.style.opacity = "1";
        menu.style.zIndex = "0";
        menu.style.visibility = "hidden";
        menu.style.transform = "translateX(96%)";
        cross.style.transform = "rotate(0deg)";
        setTimeout(displayNone, 2000);
    }   
}

function displayNone(){
    let menu = document.getElementsByClassName("menu_items")[0];
    let wrapper = document.getElementsByClassName("wrapper")[0];
    let cross = document.getElementById("menu");
    menu.style.display = "none";
    wrapper.style.position = "auto";
    cross.style.color = "#555454";
    cross.style.backgroundColor = "white";

}

function animateIn(){
    let wrapper = document.getElementsByClassName("wrapper")[0];
    let menu = document.getElementsByClassName("menu_items")[0];
    let cross = document.getElementById("menu"); 
    wrapper.style.position = "absolute";
    wrapper.style.opacity = "0.5";
    menu.style.zIndex = "1";
    menu.style.transition = "all 2s";
    menu.style.transform = "translateX(0%)";
    menu.style.visibility = "visible";
    cross.style.transform = "rotate(45deg)";
    cross.style.backgroundColor = "pink";
    cross.style.color = "white";
    wrapper.style.width = "100%";
}
