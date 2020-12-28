export default class SmoothScroll {
    constructor(links, options) {
        this.anchorLinks = document.querySelectorAll(links);
        if (options === undefined) 
            this.options = {block: "start", behavior: "smooth"};
        else
            this.options = options;
            
        this.scrollToSection = this.scrollToSection.bind(this);
    }
   
    //methods
    scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView(this.options);
    }

    addLinkEvent() {   
        this.anchorLinks.forEach((link) => {
            link.addEventListener('click', this.scrollToSection);
        });
    }

    init() {
        if (this.anchorLinks.length)
            this.addLinkEvent();
        return this;
    }
}