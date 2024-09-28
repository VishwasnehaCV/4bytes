document.addEventListener('DOMContentLoaded', () => {
    fetchMentors();
});

function fetchMentors() {
    // Replace with your backend API endpoint
    
        .then(response => response.json())
        .then(data => {
            displayMentors(data);
        })
        .catch(error => {
            console.error('Error fetching mentors:', error);
        });
}

function displayMentors(mentors) {
    const mentorList = document.getElementById('mentor-list');
    mentorList.innerHTML = '';

    mentors.forEach(mentor => {
        const mentorDiv = document.createElement('div');
        mentorDiv.className = 'mentor';
        mentorDiv.textContent = ${mentor.name} - ${mentor.category};
        mentorList.appendChild(mentorDiv);
    });
}

function filterMentors() {
    const category = document.getElementById('category').value;
    fetch('https://api.example.com/mentors')
        .then(response => response.json())
        .then(data => {
            const filteredMentors = category === 'All' ? data : data.filter(mentor => mentor.category === category);
            displayMentors(filteredMentors);
        })
        .catch(error => {
            console.error('Error fetching mentors:', error);
        });
}

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

    // 20.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
  
    // Assuming you have validation or other logic here
  
    // Display the message after form submission
    const message = document.createElement('p');
    message.textContent = 'We will allot your mentor very soon';
    message.style.color = 'green'; // Optional: You can style the message as needed
  
    // Append the message after the form
    document.getElementById('registrationForm').appendChild(message);
  });
  // Display form data in console (you can replace this with actual