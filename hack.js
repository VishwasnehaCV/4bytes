// Sample data for mentors
const mentors = [
    { name: "Vishwasneha", category: "Design" },
    { name: "Tejaswini", category: "Development" },
    { name: "Prakruthi", category: "Marketing" },
    { name: "Shashikala", category: "Design" },
    { name: "Chinmayi", category: "Development" },
    { name: "Vishwasneha", category: "IT"},
    { name: "Chinmayi", category: "Design" },
    { name: "Nikhil", category: "Development" },
    { name: "Akhil", category: "Marketing" },
    { name: "Vijay", category: "Design" },
    { name: "yashwanth", category: "Development" },
    { name: "Darshan", category: "IT"},
    { name: "Dhananjaya", category: "Design" },
    { name: "Ranjitha", category: "Development" },
    { name: "Pranathi", category: "Marketing" },
    { name: "Shashank", category: "Design" },
    { name: "Vidya", category: "Development" },
    { name: "sneha", category: "IT"},
    { name: "Kavya", category: "Design" },
    { name: "Naveen", category: "Development" },
    { name: "Murthi", category: "Marketing" },
    { name: "Nikitha", category: "Design" },
    { name: "Likith", category: "Development" },
    { name: "Netharavathi", category: "IT"},
    { name: "Shivu", category: "Design" },
    { name: "jagan", category: "Development" },
    { name: "Bhuvan", category: "Marketing" },
    { name: "Deepak", category: "Design" },
    { name: "Namith", category: "Development" },
    { name: "Deekshith", category: "IT"},


  ];

  
  // Function to render the list of mentors
  function renderMentors(filteredMentors) {
    const mentorList = document.getElementById('mentorList');
    mentorList.innerHTML = ''; // Clear previous mentors
  
    if (filteredMentors.length === 0) {
      mentorList.innerHTML = '<p>No mentors found in this category.</p>';
      return;
    }
  
    filteredMentors.forEach(mentor => {
      const mentorCard = document.createElement('div');
      mentorCard.classList.add('mentor-card');
      mentorCard.innerHTML = `
        <h3>${mentor.name}</h3>
        <p>${mentor.category.charAt(0).toUpperCase() + mentor.category.slice(1)}</p>
      `;
      mentorList.appendChild(mentorCard);
    });
  }
  
  // Function to filter mentors based on the selected category
  function filterMentors() {
    const category = document.getElementById('categoryFilter').value;
    let filteredMentors;
  
    if (category === 'All') {
      filteredMentors = mentors; // Show all mentors
    } else {
      filteredMentors = mentors.filter(mentor => mentor.category === category);
    }
  
    renderMentors(filteredMentors);
  }
  
  // Initial render of all mentors when the page loads
  window.onload = function () {
    renderMentors(mentors);
  };