import initNumbersAnimation from './numbersAnimation.js';

export default function initFetchCars() {
    async function fetchCars(url) {
        try 
        {
            const carsResponse = await fetch(url);
            const carsJSON = await carsResponse.json();
            const numbersGrid = document.querySelector('.numbers-grid');
            carsJSON.forEach(car =>{
                const divCar = createCar(car);
                numbersGrid.appendChild(divCar);
            });
            initNumbersAnimation();
        }
        catch(error)
        {
            console.log(error);
        }
    }

    fetchCars('../js/carsApi.json');

    function createCar(car){
        const div = document.createElement('div');
        div.classList.add('car-number');
        div.innerHTML = `<h3>${car.brand}</h3> <span data-number> ${car.numbers}</span>`;
        return div;
    }
}

