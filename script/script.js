const tabLinks = document.querySelectorAll(".feature-product__tab a");
const tabPanels = document.querySelectorAll(".feature-product__item-wrapper");


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