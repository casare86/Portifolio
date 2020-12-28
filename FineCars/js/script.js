import SmoothScroll from './modules/scroll-smooth.js';
import initAnimateScroll from './modules/scroll-animation.js';
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initDropDownMenu from "./modules/dropDownMenu.js";
import initMenuMobile from './modules/menuMobile.js';
import initWorkingHour from './modules/dateObject.js';
import initFetchCars from './modules/fetchCars.js';
import initFetchBiticoin from './modules/fetchBitcoin.js';

const scrollSuave = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
scrollSuave.init();

initFetchBiticoin();
initFetchCars();
initModal();
initAnimateScroll();
initAccordion();
initTabNav();
initDropDownMenu();
initMenuMobile();
initWorkingHour();



