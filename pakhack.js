document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('mentor-list')) {
        fetchMentors();
    }
});

function goToMentorCategorization() {
    document.getElementById('studentRegistration').classList.add('hidden');
    document.getElementById('mentorCategorization').classList.remove('hidden');
    fetchMentors();
}

function fetchMentors() {
    // Replace with your backend API endpoint
    fetch('https://api.example.com/mentors')
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

function submitData() {
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        dob: document.getElementById('dob').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value,
        address: document.getElementById('address').value
    };

    displayResponse(formData);

    document.getElementById('mentorCategorization').classList.add('hidden');
    document.getElementById('responseSheet').classList.remove('hidden');
}

function displayResponse(data) {
    const responseContent = document.getElementById('responseContent');
    responseContent.innerHTML = `
        <h2>Submitted Data</h2>
        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Last Name:</strong> ${data.lastName}</p>
        <p><strong>Date of Birth:</strong> ${data.dob}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Address:</strong> ${data.address}</p>
    `;
}