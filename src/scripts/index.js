const menu = document.querySelector('#menu')
const dropDown = document.querySelector('#drop-down')

menu.addEventListener('click', () => {
    if(menu.src.includes("menu.png")) {
        menu.src = "public/images/close.png";
        dropDown.classList.remove('top-[-90dvh]')
        dropDown.classList.add('top-[10dvh]')
    } else {
        menu.src = "public/images/menu.png"
        dropDown.classList.add('top-[-90dvh]')
        dropDown.classList.remove('top-[10dvh]')
    }
})