function showFeedback(feedback, feedbackId, isCorrect) {
    var feedbackElement = document.getElementById(feedbackId);
    var selectedAnswer = event.target;

    if (isCorrect) {
        selectedAnswer.style.backgroundColor = '#2ecc71'; // Green color for correct answer
    } else {
        selectedAnswer.style.backgroundColor = '#e74c3c'; // Red color for incorrect answer
    }

    feedbackElement.innerText = feedback;

    // Save the user's selection in local storage
    localStorage.setItem(feedbackId, isCorrect);
}

// Check local storage for previous correct answers on page load
window.onload = function () {
    checkPreviousSelection('feedback1');
    checkPreviousSelection('feedback2');
}

function checkPreviousSelection(feedbackId) {
    var isCorrect = localStorage.getItem(feedbackId);

    if (isCorrect === 'true') {
        var selectedAnswer = document.querySelector('#' + feedbackId.replace('feedback', '') + ' .answer');
        selectedAnswer.style.backgroundColor = '#2ecc71'; // Green color for correct answer
    }
}

