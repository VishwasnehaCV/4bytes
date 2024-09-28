document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        dob: document.getElementById('dob').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value,
        address: document.getElementById('address').value
    };

    // Display form data in console (you can replace this with actual form submission logic)
    console.log('Form Data Submitted:', formData);

    // Clear the form
    document.getElementById('registrationForm').reset();
});