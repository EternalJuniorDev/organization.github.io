const tabLinks = document.querySelectorAll(".feature-product__tab a");
const tabPanels = document.querySelectorAll(".feature-product__item-wrapper");
let lastScrollTop = 0;


const addAnimate = (el, scrollNumber) => {
    const element = document.querySelector(`${el}`);
    const scroll = window.screen.height + scrollNumber;
    const height = element.offsetTop;

    if ((scroll > height + 80) && (scroll < height + 100)) {
        element.classList.add("Animation_Scrool_Title");
        setTimeout(() => {
            element.classList.remove("Animation_Scrool_Title");
        }, 1000)
        console.log(scrollNumber);
    }
}

for (let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector('.feature-product__tabs-wrapper li.active').classList.remove("active");
        document.querySelector('.feature-product__item-wrapper.active').classList.remove("active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("active");
    });
}

$(window).scroll(function (e) {
    const st = $(this).scrollTop();
    if (st > lastScrollTop) {

        addAnimate(".subscribe", $(this).scrollTop());
        addAnimate(".why-we", $(this).scrollTop());
        addAnimate(".feature-product", $(this).scrollTop());
        addAnimate(".our-team", $(this).scrollTop());
        addAnimate(".subscribe", $(this).scrollTop());
        addAnimate(".get-in-touch", $(this).scrollTop());
    }
    lastScrollTop = st;

})