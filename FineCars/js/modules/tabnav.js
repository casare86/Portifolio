export default function initTabNav(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll("[data-tab='content'] section");
    tabContent[0].classList.add(activeClass);
    if(tabMenu.length > 0 && tabContent.length > 0)
    {
        function activeTab(index){
            tabContent.forEach((content) => {
                content.classList.remove(activeClass);
            });
            const item = tabContent[index];
            item.classList.add(activeClass);
            item.classList.add(item.dataset.animation);
        }
        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}