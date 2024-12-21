let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
heart.onclick = function() {
    console.log(heart.classList.contains('added')); 
    heart.classList.toggle('added');
    if (heart.classList.contains('added')) {
        likesNumber.textContent = parseInt(likesNumber.textContent) + 1;
    } else {
        likesNumber.textContent = parseInt(likesNumber.textContent) - 1;
    }
};