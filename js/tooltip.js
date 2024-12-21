let tooltip = document.querySelector('.tooltip');
let closeButton = document.querySelector('.close-button');
let tooltipButtons = document.querySelectorAll('.tooltip-button');
let tooltipText = document.querySelector('.tooltip-text');
closeButton.onclick = function() {
    tooltip.classList.remove('opened');
};
for (let tooltipButton of tooltipButtons) {
    tooltipButton.onclick = function() {
        tooltip.classList.add('opened');
        tooltipText.textContent = tooltipButton.dataset.tooltipText;
        const rect = tooltipButton.getBoundingClientRect();
        tooltip.style.top = ${rect.bottom + window.scrollY}px;
        tooltip.style.left = ${rect.left}px; 
    };
}
