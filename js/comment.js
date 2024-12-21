let commentForm = document.querySelector(".comment-form")
let commentList = document.querySelector(".comment-list")
let commentField = document.querySelector(".comment-field")
let charCounter = document.querySelector(".char-counter")
let submitButton = document.querySelector(".submit-button")
commentList.append("Новий коментар")
commentForm.onsubmit = function(evt) {
    evt.preventDefault();

    let newComment = document.createElement('li'); 
    newComment.classList.add('user-comment');
    newComment.textContent = commentField.value;

    commentList.append(newComment); 
    commentField.value = '';
    charCounter.textContent = 0;
};
commentField.oninput = function() {
    let length = commentField.value.length; 
    charCounter.textContent = length;
    if (length > 142) {
        commentForm.classList.add('warning');
        submitButton.disabled = true;
    } else {
        commentForm.classList.remove('warning'); 
        submitButton.disabled = false;
    }
};