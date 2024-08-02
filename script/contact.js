document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');

    contactForm.addEventListener('submit', function(event) {
        // Prevoir le form de soumission
        event.preventDefault();

        // 
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // validation
        let isValid = true;

        if (name === "") {
            showError('name', 'Name is required');
            isValid = false;
        } else {
            hideError('name');
        }

        if (email === "") {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        } else {
            hideError('email');
        }

        if (message === "") {
            showError('message', 'Message is required');
            isValid = false;
        } else {
            hideError('message');
        }

        // If the form is valid, you can submit it or send data via AJAX
        if (isValid) {
            contactForm.submit(); // Uncomment to enable actual form submission
        }
    });

    function showError(inputId, message) {
        const inputElement = document.getElementById(inputId);
        let errorElement = inputElement.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error')) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error');
            errorElement.style.color = 'red';
            inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
        }
        errorElement.textContent = message;
    }

    function hideError(inputId) {
        const inputElement = document.getElementById(inputId);
        const errorElement = inputElement.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.style.display = 'none';
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
