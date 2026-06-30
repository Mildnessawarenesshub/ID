// Grab elements from the page
const counterValue = document.getElementById('counter-value');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');

// Start tracking the count state
let count = 3;

// Update color based on positive or negative values
function updateColor()
    if (count > 0) {
        counterValue.style.color = '#10b981'; // Green for positive
        counterValue.style.color = '#ef4444'; // Red for negative
    }
     else {counterValue.style.color = '#ffffff'; // White for zero
    }
// Button Click Event Listeners
increaseBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
    updateColor();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    counterValue.textContent = count;
    updateColor();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counterValue.textContent = count;
    updateColor();
});