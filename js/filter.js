let articles = document.querySelectorAll('.news-block');
let filter = document.querySelector('.filter');
filter.onchange = function() {
    let selectedCategory = filter.value; 
    for (let article of articles) {
        let articleCategory = article.getAttribute('data-category'); 
        if (articleCategory !== selectedCategory && selectedCategory !== 'all') {
            article.classList.add('hidden'); 
        } else {
            article.classList.remove('hidden'); 
        }
    }
};