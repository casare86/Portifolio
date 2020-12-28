export default function initAnimateScroll(){
    const sections = document.querySelectorAll('[data-animation="scroll"]');
    const activeClass = "active";
    if(sections.length)
    {
        const windowHeight = window.innerHeight;
        function animateScroll(){1
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - (windowHeight * 0.6)) < 0;
                if(isSectionVisible)
                    section.classList.add(activeClass);
                else if (section.classList.contains(activeClass))
                    section.classList.remove(activeClass);
            });
        }
        animateScroll();
        window.addEventListener("scroll", animateScroll); 
    }
}