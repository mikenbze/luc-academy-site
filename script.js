document.getElementById('donationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById('name').value;
  const amount = document.getElementById('amount').value;

  if (name && amount) {
    alert(`Thank you, ${name}, for donating KES ${amount}!`);
    document.getElementById('donationForm').reset();
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

