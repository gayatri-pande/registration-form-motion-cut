
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Perform client-side validation (for demonstration purposes only)
    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Submit the form (can be extended with AJAX or fetch)
    alert('Registration successful!');
    // Clear the form
    document.getElementById('registration-form').reset();
});
