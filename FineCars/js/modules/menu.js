//scroll smoothly to link
export function initSmoothScroll(){
    const anchorLinks = document.querySelectorAll("[data-menu=\"smooth\"] a[href^='#']");
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    anchorLinks.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}

export function initTabNav(){
    const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
    const tabContent = document.querySelectorAll("[data-tab='content'] section");
    tabContent[0].classList.add(activeClass);
    if(tabMenu.length > 0 && tabContent.length > 0)
    {
        function activeTab(index){
        tabContent.forEach((content) => {
            content.classList.remove(activeClass);
        });
        const direction = tabContent[index].dataset.animation;
        tabContent[index].classList.add(activeClass, direction);
        }
        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}