function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function toggleMenu(event){
    console.log("Beep boop bap toggling menu menu")
    let hamMenu = document.querySelector(".menu")
    hamMenu.classList.toggle("menu-activated")
    
    let fade = document.querySelector(".fade")
    fade.classList.toggle("fade-activated")
}

function toggleFocus(event){
    console.log("Focus!")
    let focus = document.querySelector(".title-card")
    focus.classList.toggle("focus")
    
    // begonner.classList.toggle("nonexistence")
    
    
}