function activate(event){
    console.log("wowie this sure works")
    let hamMenu = document.querySelector(".menu")
    hamMenu.classList.toggle("menu-activated")

    let fade = document.querySelector(".fade")
    fade.classList.toggle("fade-activated")
}