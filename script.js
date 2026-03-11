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
        { time: 'Ongoing', title: '🎮 Games (Memory Game, Imposter Game)', desc: 'Theme: Twin With Someone', venue: 'YPC' }
    ],
    day3: [
        { time: '09:30 AM - 11:00 AM', title: '🧠 Quiz', desc: 'Theme: Fake Shadi', venue: 'Ayush / Endurance' },
        { time: '11:00 AM - 12:30 PM', title: '💃 Spot Dance', desc: 'Theme: Fake Shadi', venue: 'Ayush / Endurance' }
    ],
    day4: [
        { time: '09:00 AM - 09:30 AM', title: '🎬 Short Film / Movie Recreation', desc: 'Groups 1 & 2', venue: 'Endurance' },
        { time: '09:30 AM - 10:30 AM', title: '👗 Fashion Show', desc: 'Theme: States of India', venue: 'Endurance' },
        { time: '10:30 AM - 11:00 AM', title: '🎬 Short Film / Movie Recreation', desc: 'Groups 3 & 4', venue: 'Endurance' },
        { time: '11:00 AM - 11:45 AM', title: '🎤 Group Singing', desc: 'Theme: States of India', venue: 'Endurance' },
        { time: '11:45 AM - 12:30 PM', title: '🎬 Short Film / Movie Recreation', desc: 'Groups 5 & 6', venue: 'Endurance' },
        { time: '12:30 PM - 01:00 PM', title: '🕺 Group Dance - Boys & Girls (Grp 1 & 2)', desc: 'Theme: States of India', venue: 'Endurance' },
        { time: '01:00 PM - 01:05 PM', title: '🎬 Movie Recreation - Grp 4 & 5', desc: 'Theme: States of India', venue: 'Endurance' },
        { time: '01:10 PM - 01:45 PM', title: '🕺 Group Dance - Boys & Girls (Grp 3 & 4)', desc: 'Theme: States of India', venue: 'Endurance' },
        { time: '01:45 PM - 01:50 PM', title: '🎬 Movie Recreation - Grp 6', desc: 'Theme: States of India', venue: 'Endurance' },
        { time: '02:00 PM - 02:45 PM', title: '🕺 Group Dance - Boys & Girls (Grp 5 & 6)', desc: 'Theme: States of India', venue: 'Endurance' }
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


