const counters = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector('#value');
decrementBtn.addEventListener('click', function () {
    counters.decrement();
    valueEl.textContent = counters.value;
});

incrementBtn.addEventListener('click', function () {
    counters.increment();
    valueEl.textContent = counters.value;
});

