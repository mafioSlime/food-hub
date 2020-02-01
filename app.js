const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-links')


const scrollLeft = () => {
    hamburger.addEventListener('click', () => {
    nav.classList.toggle('active')
    hamburger.classList.toggle('toggle')
    })

}





scrollLeft();
