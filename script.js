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
        { time: '09:15 AM - 10:15 AM', title: '🍳 Cooking Without Fire', desc: 'Theme: Mismatch', venue: 'YPC' },
        { time: '09:15 AM - 10:15 AM', title: '🦢 Origami', desc: 'Theme: Mismatch', venue: 'YPC' },
        { time: '09:15 AM - 10:15 AM', title: '✨ Mehandi', desc: 'Theme: Mismatch', venue: 'YPC' },
        { time: '10:30 AM - 12:00 PM', title: '🎤 Extempore', desc: 'Theme: Mismatch', venue: 'YPC' },
        { time: '10:30 AM - 12:00 PM', title: '🗺️ Treasure Hunt', desc: 'Theme: Mismatch', venue: 'YPC' },
        { time: '01:00 PM - 02:30 PM', title: '🖋️ Story Writing', desc: 'Theme: Mismatch', venue: 'YPC' },
        { time: '01:00 PM - 02:30 PM', title: '🎲 Extra Activities & Mehandi Corner', desc: 'Theme: Mismatch', venue: 'YPC' }
    ],
    day2: [
        { time: '09:30 AM - 10:30 AM', title: '✏️ Comic Making', desc: 'Theme: Twin With Someone', venue: 'YPC' },
        { time: '09:30 AM - 12:00 PM', title: '🗣️ Debate', desc: 'Theme: Twin With Someone', venue: 'YPC' },
        { time: '10:00 AM - 11:30 AM', title: '✂️ Hair Styling', desc: 'Theme: Twin With Someone', venue: 'YPC' },
        { time: '01:00 PM - 02:30 PM', title: '🗣️ Debate (Cont.)', desc: 'Theme: Twin With Someone', venue: 'YPC' },
        { time: '01:00 PM - 02:30 PM', title: '♻️ Best Out of Waste', desc: 'Theme: Twin With Someone', venue: 'YPC' },
        { time: '01:00 PM - 02:30 PM', title: '🎨 Face Painting', desc: 'Theme: Twin With Someone', venue: 'YPC' },
        { time: '01:00 PM - 02:30 PM', title: '🎮 Games (Memory Game, Imposter Game)', desc: 'Theme: Twin With Someone', venue: 'YPC' }
    ],
    day3: [
        { time: '09:30 AM - 11:00 AM', title: '🧠 Quiz', desc: 'Theme: Fake Shadi', venue: 'Ayush / Yendurance' },
        { time: '11:00 AM - 12:30 PM', title: '💃 Spot Dance', desc: 'Theme: Fake Shadi', venue: 'Ayush / Yendurance' },
        { time: '12:30 PM - 01:30 PM', title: '🎤 Solo Singing', desc: 'Theme: Fake Shadi', venue: 'Ayush / Yendurance' }
    ],
    day4: [
        { time: '09:00 AM - 09:30 AM', title: '🎬 Short Film 1&2 / Movie Rec 1', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '09:30 AM - 10:30 AM', title: '👗 Fashion Show', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '10:30 AM - 11:00 AM', title: '🎬 Short Film 3&4 / Movie Rec 2', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '11:00 AM - 11:45 AM', title: '🎤 Group Singing', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '11:45 AM - 12:30 PM', title: '🎬 Short Film 5&6 / Movie Rec 3', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '12:30 PM - 12:45 PM', title: '🕺 Group Dance - Boys (Grp 1 & 2)', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '12:45 PM - 01:00 PM', title: '💃 Group Dance - Girls (Grp 1 & 2)', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '01:00 PM - 01:05 PM', title: '🎬 Movie Recreation - Grp 4 & 5', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '01:10 PM - 01:25 PM', title: '🕺 Group Dance - Boys (Grp 3 & 4)', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '01:30 PM - 01:45 PM', title: '💃 Group Dance - Girls (Grp 3 & 4)', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '01:45 PM - 01:50 PM', title: '🎬 Movie Recreation - Grp 6', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '02:00 PM - 02:15 PM', title: '🕺 Group Dance - Boys (Grp 5 & 6)', desc: 'Theme: States of India', venue: 'Yendurance' },
        { time: '02:30 PM - 02:45 PM', title: '💃 Group Dance - Girls (Grp 5 & 6)', desc: 'Theme: States of India', venue: 'Yendurance' }
    ],
    day5: [
        { time: 'All Day', title: '🎊 Annual Day', desc: 'Annual Day Celebrations', venue: 'Yendurance' }
    ]
};

const scheduleContainer = document.getElementById('schedule-container');
const tabButtons = document.querySelectorAll('.tab-btn');

function renderSchedule(dayKey) {
    const events = scheduleData[dayKey];
    
    // Clear current events
    scheduleContainer.innerHTML = '';
    
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
        
        scheduleContainer.appendChild(item);
        
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

// --- Category Event Toggles ---
const exploreButtons = document.querySelectorAll('.explore-btn');

exploreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Find the adjacent event list
        const eventList = this.previousElementSibling;
        
        // Toggle the expanded class
        eventList.classList.toggle('expanded');
        
        // Update button text
        if (eventList.classList.contains('expanded')) {
            this.textContent = 'Close Events ↑';
        } else {
            this.textContent = 'Explore Events ↓';
        }
    });
});

// --- Mobile Navigation Menu ---
const mobileMenuButton = document.getElementById('mobile-menu');
const navLinksContainer = document.getElementById('nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

if (mobileMenuButton && navLinksContainer) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenuButton.classList.toggle('is-active');
        navLinksContainer.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenuButton.classList.remove('is-active');
            navLinksContainer.classList.remove('active');
        });
    });
}


