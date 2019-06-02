function toggleMenu(event){
    let hamMenu = document.querySelector(".menu")
    hamMenu.classList.toggle("menu-activated")
    
    let fade = document.querySelector(".fade")
    fade.classList.toggle("fade-activated")
}

function toggleFocus_article_1(){    
    let focus = document.querySelector(".tca-1")
    focus.classList.toggle("focus")
    let focusTitleSeperator = document.querySelector(".ts-1")
    focusTitleSeperator.classList.toggle("focus-title-content")
    let focusTitleContent = document.querySelector(".tc-1")
    focusTitleContent.classList.toggle("focus-title-content")
    let focusReadButton = document.querySelector(".rb-1")
    focusReadButton.classList.toggle("focus-title-content")
}

function toggleFocus_article_2(){    
    let focus = document.querySelector(".tca-2")
    focus.classList.toggle("focus")
    let focusTitleSeperator = document.querySelector(".ts-2")
    focusTitleSeperator.classList.toggle("focus-title-content")
    let focusTitleContent = document.querySelector(".tc-2")
    focusTitleContent.classList.toggle("focus-title-content")
    let focusReadButton = document.querySelector(".rb-2")
    focusReadButton.classList.toggle("focus-title-content")
}

function toggleFocus_article_3(){    
    let focus = document.querySelector(".tca-3")
    focus.classList.toggle("focus")
    let focusTitleSeperator = document.querySelector(".ts-3")
    focusTitleSeperator.classList.toggle("focus-title-content")
    let focusTitleContent = document.querySelector(".tc-3")
    focusTitleContent.classList.toggle("focus-title-content")
    let focusReadButton = document.querySelector(".rb-3")
    focusReadButton.classList.toggle("focus-title-content")
}