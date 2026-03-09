// --- Navbar Scroll Effect ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Smooth Scrolling for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Adjust for fixed navbar height
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// --- Schedule Data & Tabs ---
const scheduleData = {
    day1: [
        { time: '09:00 AM', title: 'Inauguration Ceremony', desc: 'Opening ceremony featuring traditional lighting of lamp by chief guest.', venue: 'Main Auditorium' },
        { time: '11:00 AM', title: 'Rhythm: Group Dance', desc: 'Inter-college group dance competition preliminaries.', venue: 'Open Air Theater' },
        { time: '02:30 PM', title: 'Canvas: Live Painting', desc: 'Theme-based live painting competition.', venue: 'Art Gallery' },
        { time: '06:00 PM', title: 'Curtain Call', desc: 'One-act play competition.', venue: 'Main Auditorium' }
    ],
    day2: [
        { time: '10:00 AM', title: 'Crescendo: Battle of Bands', desc: 'Rock and Pop band competition across genres.', venue: 'Open Air Theater' },
        { time: '01:00 PM', title: 'Frame by Frame', desc: 'Short film screening and judging.', venue: 'Seminar Hall' },
        { time: '04:00 PM', title: 'Step Up: Solo Dance', desc: 'Solo dance showcase and battle.', venue: 'Main Auditorium' },
        { time: '07:30 PM', title: 'Comedy Night', desc: 'Stand-up comedy showcase featuring special guests.', venue: 'Open Air Theater' }
    ],
    day3: [
        { time: '10:00 AM', title: 'Street Play Finals', desc: 'Nukkad Natak finals focusing on social issues.', venue: 'Campus Square' },
        { time: '02:00 PM', title: 'Fashion Show', desc: 'Themed fashion walk competition.', venue: 'Main Auditorium' },
        { time: '05:30 PM', title: 'Valedictory & Prize Distribution', desc: 'Award ceremony for all competitions.', venue: 'Main Auditorium' },
        { time: '08:00 PM', title: 'Pro-Show: EDM Night', desc: 'Closing DJ night featuring international artists.', venue: 'College Grounds' }
    ]
};

const timelineContainer = document.querySelector('.timeline');
const tabButtons = document.querySelectorAll('.tab-btn');

function renderSchedule(dayKey) {
    const events = scheduleData[dayKey];
    
    // Clear current events
    timelineContainer.innerHTML = '';
    
    // Stagger animation for new events
    events.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = 'schedule-item';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.4s ease, transform 0.4s ease ${index * 0.1}s`;
        
        item.innerHTML = `
            <div class="time">${event.time}</div>
            <div class="event-details">
                <h3>${event.title}</h3>
                <p>${event.desc}</p>
                <span class="event-venue">📍 ${event.venue}</span>
            </div>
        `;
        
        timelineContainer.appendChild(item);
        
        // Trigger reflow & animate
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 50);
    });
}

// Initial render
renderSchedule('day1');

// Tab Switching Logic
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add to clicked
        button.classList.add('active');
        
        // Render corresponding data
        const day = button.getAttribute('data-day');
        renderSchedule(day);
    });
});

// --- Form Submission Prevention ---
const form = document.getElementById('registrationForm');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Processing...';
        btn.style.opacity = '0.8';
        
        setTimeout(() => {
            btn.innerText = 'Registration Successful!';
            btn.style.backgroundColor = 'var(--clr-teal)';
            form.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                btn.style.opacity = '1';
            }, 3000);
        }, 1500);
    });
}
