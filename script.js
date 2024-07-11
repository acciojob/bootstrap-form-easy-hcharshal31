// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the form
    const form = document.getElementById('passwordForm');
    form.addEventListener('submit', function (event) {
        // Check all the form fields
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false);
});

// Input validation for password fields
document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const feedback = document.getElementById('passwordFeedback');

    if (password.length > 8) {
        feedback.textContent = 'Password is valid.';
        feedback.classList.add('valid');
        feedback.classList.remove('feedback');
    } else {
        feedback.textContent = 'Password must be more than 8 characters.';
        feedback.classList.add('feedback');
        feedback.classList.remove('valid');
    }
});
