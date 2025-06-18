document.getElementById('donationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById('name').value;
  const amount = document.getElementById('amount').value;

  if (name && amount) {
  fetch('https://luc-backend.onrender.com/donate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, amount })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
      alert(data.message);
      document.getElementById('donationForm').reset();
    })
    .catch(error => {
      console.error('Fetch error:', error);
      alert('Something went wrong. Please try again later.');
    });
} else {
  alert('Please fill in all fields.');
}

});

const events = [
  "Parents' Meeting - June 24",
  "Charity Drive - July 5",
  "Prize Giving Day - August 15",
  "Back to School Sunday - Sept 3"
];

const eventsList = document.getElementById('eventsList');
const searchInput = document.getElementById('searchEvent');

function renderEvents(filter = '') {
  eventsList.innerHTML = ''; // Clear previous
  const filtered = events.filter(event =>
    event.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    eventsList.innerHTML = '<li>No events found.</li>';
    return;
  }

  filtered.forEach(event => {
    const li = document.createElement('li');
    li.textContent = event;
    eventsList.appendChild(li);
  });
}

// Initial load
renderEvents();

// Live search
searchInput.addEventListener('input', (e) => {
  renderEvents(e.target.value);
});