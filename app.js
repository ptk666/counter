// intialization
let counter = 0;
const counter_indicator = document.getElementById('counter');
const btn_reset = document.getElementById('btn-reset');
const btn_decrease = document.getElementById('btn-decrease');
const btn_increase = document.getElementById('btn-increase');

btn_increase.addEventListener('click', () => {
    counter++;

    counter_indicator.textContent = counter;
    counter_indicator.classList.add('animation-increase');
})

btn_decrease.addEventListener('click', () => {
    if(counter == 0) {
        return; 
    } else {
        counter--;
        counter_indicator.textContent = counter;
    }
});

btn_reset.addEventListener('click', () => {
    counter = 0;
    counter_indicator.textContent = counter;
});