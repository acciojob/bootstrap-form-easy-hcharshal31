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

    // Input validation for password fields
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const feedback = document.getElementById('passwordFeedback');

    password.addEventListener('input', function () {
        if (password.value.length > 8) {
            feedback.textContent = 'Password is valid.';
            feedback.classList.add('valid');
            feedback.classList.remove('feedback');
        } else {
            feedback.textContent = 'Password must be more than 8 characters.';
            feedback.classList.add('feedback');
            feedback.classList.remove('valid');
        }
    });

    form.addEventListener('submit', function (event) {
        if (password.value !== confirmPassword.value) {
            feedback.textContent = 'Passwords do not match.';
            feedback.classList.add('feedback');
            feedback.classList.remove('valid');
            event.preventDefault();
        }
    });
});
