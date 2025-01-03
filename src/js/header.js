
document.addEventListener("DOMContentLoaded", () => {
    const menuHeader = document.querySelector(".menu-header");
    const menuList = document.querySelector(".menu-list");
    menuList.style.display = "none";

menuHeader.addEventListener("click", () => {
        if (menuList.style.display === "block") {
            menuList.style.display = "none";
        } else {
            menuList.style.display = "block";
        }
    })

const menuLinks = document.querySelectorAll(".menu-list a");
menuLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        menuList.style.display = 'none';
        const targetId = link.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});
});


const openModalBtn = document.querySelector('[data-menu-open]');
const closeModalBtn = document.querySelector('[data-menu-close]');
const modal = document.querySelector('[data-menu]');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open');
}

const mobileList = document.querySelector(".menu-list-mobile");
const mobileLinks = document.querySelectorAll(".menu-list-mobile a");
mobileLinks.forEach(list => {
    list.addEventListener("click", () => {
    modal.classList.remove('is-open');
    })
})

const buttonOrder = document.querySelector(".button-header-mobile");
buttonOrder.addEventListener("click", () => {
    modal.classList.remove('is-open');
})


const textButton = document.querySelector(".text-btn")
    textButton.addEventListener("click", e => {
        e.preventDefault();
        const targetId = textButton.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    })
