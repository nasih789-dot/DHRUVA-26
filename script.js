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
        { time: '09:00 AM - 11:00 AM', title: '📢 NAME REVEAL', desc: 'Theme: Mismatch', venue: 'YPC' },
        { time: '11:00 AM - 12:00 PM', title: '🍳 Cooking Without Fire', desc: 'Theme: Mismatch', venue: 'YPC', incharge: 'Savad, Fazal', phones: ['919539994040', '917736371014'], displayPhones: ['9539994040', '+91 77363 71014'] },
        { time: '11:00 AM - 12:00 PM', title: '🦢 Origami', desc: 'Theme: Mismatch', venue: 'YPC', incharge: 'Amal Christy, Nehdha', phones: ['917561874472', '919037559260'], displayPhones: ['+91 75618 74472', '+91 90375 59260'] },
        { time: '11:00 AM - 12:00 PM', title: '✨ Mehandi', desc: 'Theme: Mismatch', venue: 'YPC', incharge: 'Hafiz, Hana . A', phones: ['919446768046', '918590809714'], displayPhones: ['+91 94467 68046', '+91 85908 09714'] },
        { time: '11:00 AM - 12:30 PM', title: '🎤 Extempore', desc: 'Theme: Mismatch', venue: 'YPC', incharge: 'Ehan, Hana Mubarak', phones: ['918891858644', '918606440453'], displayPhones: ['+91 88918 58644', '+91 86064 40453'] },
        { time: '01:00 PM - 02:30 PM', title: '🖋️ Story Writing', desc: 'Theme: Mismatch', venue: 'YPC', incharge: 'Rauf, Shihan', phones: ['919747867552', '918147846272'], displayPhones: ['+91 97478 67552', '+91 81478 46272'] },
        { time: '01:00 PM - 02:30 PM', title: '🗺️ Treasure Hunt', desc: 'Theme: Mismatch', venue: 'YPC', incharge: 'Shabeer, Safa, Thamji, Mirshab, Nafi, Isha', phones: ['917306156516', '918714757851'], displayPhones: ['+91 73061 56516', '87147 57851'] },
        { time: 'All Day', title: '🎲 Extra Activities & Mehandi Corner', desc: 'Theme: Mismatch', venue: 'YPC', incharge: 'Zenim, Nahas, Saneeya, Jasma', phones: ['918129390567', '919747690365', '917907751676', '919778584446'], displayPhones: ['+91 81293 90567', '+91 97476 90365', '+91 79077 51676', '+91 97785 84446'] }
    ],
    day2: [
        { time: '09:30 AM - 10:30 AM', title: '✏️ Comic Making', desc: 'Theme: Twin With Someone', venue: 'YPC', incharge: 'Zenim, Saneeya', phones: ['918129390567', '917907751676'], displayPhones: ['+91 81293 90567', '+91 79077 51676'] },
        { time: '09:30 AM - 12:00 PM', title: '🗣️ Debate', desc: 'Theme: Twin With Someone', venue: 'YPC', incharge: 'Savad, Safa', phones: ['919539994040', '918714757851'], displayPhones: ['9539994040', '87147 57851'] },
        { time: '10:00 AM - 11:30 AM', title: '✂️ Hair Styling', desc: 'Theme: Twin With Someone', venue: 'YPC', incharge: 'Jasma, Hanna P', phones: ['919778584446', '918157997048'], displayPhones: ['+91 97785 84446', '+91 81579 97048'] },
        { time: '01:00 PM - 02:30 PM', title: '♻️ Best Out of Waste', desc: 'Theme: Twin With Someone', venue: 'YPC', incharge: 'Thamji, Shihan', phones: ['917306253948', '918147846272'], displayPhones: ['+91 73062 53948', '+91 81478 46272'] },
        { time: '01:00 PM - 02:30 PM', title: '🎨 Face Painting', desc: 'Theme: Twin With Someone', venue: 'YPC', incharge: 'Nehdha, Alan', phones: ['919037559260', '918050353486'], displayPhones: ['+91 90375 59260', '+91 80503 53486'] },
        { time: 'All Day', title: '🎮 Games (Memory Game, Imposter Game)', desc: 'Theme: Twin With Someone', venue: 'YPC', incharge: 'Anusree, Sible', phones: ['917592952906', '919778360362'], displayPhones: ['+91 75929 52906', '+91 97783 60362'] }
    ],
    day3: [
        { time: '09:30 AM - 11:00 AM', title: '🧠 Quiz', desc: 'Theme: Fake Shadi', venue: 'Ayush / Yendurance', incharge: 'Henna, Haroon', phones: ['919741932458', '917994585501'], displayPhones: ['+91 97419 32458', '+91 79945 85501'] },
        { time: '11:00 AM - 12:30 PM', title: '💃 Spot Dance', desc: 'Theme: Fake Shadi', venue: 'Ayush / Yendurance', incharge: 'Fazal, Fiza', phones: ['917736371014', '919207131098'], displayPhones: ['+91 77363 71014', '+91 92071 31098'] },
        { time: '12:30 PM - 01:30 PM', title: '🎤 Solo Singing', desc: 'Theme: Fake Shadi', venue: 'Ayush / Yendurance', incharge: 'Gopika, Adresh', phones: ['918137046723', '919946429562'], displayPhones: ['8137046723', '9946429562'] }
    ],
    day4: [
        { time: '09:00 AM - 09:35 AM', title: '🎬 Short Film - Grp 1 & 2 / Movie Rec - Grp 1 & 2', desc: 'Theme: States of India', venue: 'Yendurance', incharge: 'Sahad C P, Rajaba / Alfas, Farzin', phones: ['919037062527', '919048939216', '919207898872', '919947836163'], displayPhones: ['+91 90370 62527', '+91 90489 39216', '+91 92078 98872', '+91 99478 36163'] },
        { time: '09:40 AM - 10:40 AM', title: '👗 Fashion Show', desc: 'Theme: States of India', venue: 'Yendurance', incharge: 'Savad, Safa, Nidha, Nayma, Gopika, Amal', phones: ['919539994040', '918714757851', '919037605540'], displayPhones: ['9539994040', '+91 87147 57851', '+91 90376 05540'] },
        { time: '10:45 AM - 11:20 AM', title: '🎬 Short Film - Grp 3 & 4 / Movie Rec - Grp 3 & 4', desc: 'Theme: States of India', venue: 'Yendurance', incharge: 'Sahad C P, Rajaba / Alfas, Farzin', phones: ['919037062527', '919048939216', '919207898872', '919947836163'], displayPhones: ['+91 90370 62527', '+91 90489 39216', '+91 92078 98872', '+91 99478 36163'] },
        { time: '11:25 AM - 12:10 PM', title: '🎤 Group Singing', desc: 'Theme: States of India', venue: 'Yendurance', incharge: 'Raishad, shabab, Ameena, Adnan, Nadiya', phones: ['919895065879', '919746408059'], displayPhones: ['+91 98950 65879', '+91 97464 08059'] },
        { time: '12:15 PM - 12:50 PM', title: '🎬 Short Film - Grp 5 & 6 / Movie Rec - Grp 5 & 6', desc: 'Theme: States of India', venue: 'Yendurance', incharge: 'Sahad C P, Rajaba / Alfas, Farzin', phones: ['919037062527', '919048939216', '919207898872', '919947836163'], displayPhones: ['+91 90370 62527', '+91 90489 39216', '+91 92078 98872', '+91 99478 36163'] },
        { time: '01:00 PM - 02:10 PM', title: '🕺💃 Group Dance (Boys & Girls)', desc: 'Theme: States of India', venue: 'Yendurance', incharge: 'Henna, Rauf, Jamshad, Aisha Dana, Munnas', phones: ['919741932458', '919747867552'], displayPhones: ['+91 97419 32458', '+91 97478 67552'] },
        { time: '02:15 PM - 03:20 PM', title: '🎭 Batch Dance', desc: 'Theme: States of India', venue: 'Yendurance' }
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
        
        let contactsHTML = '';
        if (event.incharge) {
            let phoneLinks = '';
            event.phones.forEach((phone, i) => {
                phoneLinks += `<a href="https://wa.me/${phone}" target="_blank" class="contact-btn" onclick="event.stopPropagation()">💬 ${event.displayPhones[i]}</a>`;
            });
            contactsHTML = `
                <div class="expand-hint">View in-charge contact details ↓</div>
                <div class="contact-details" style="display: none;">
                    <p><strong>In Charge:</strong> ${event.incharge}</p>
                    <div class="contact-links">
                        ${phoneLinks}
                    </div>
                </div>
            `;
            item.style.cursor = 'pointer';
            item.title = 'Click to toggle contact details';
        }

        item.innerHTML = `
            <div class="time">${event.time}</div>
            <div class="event-details">
                <h3>${event.title}</h3>
                <p>${event.desc}</p>
                <span class="event-venue">📍 ${event.venue}</span>
                ${contactsHTML}
            </div>
        `;
        
        if (event.incharge) {
            item.addEventListener('click', function() {
                const contactDiv = this.querySelector('.contact-details');
                const expandHint = this.querySelector('.expand-hint');
                if (contactDiv.style.display === 'none') {
                    contactDiv.style.display = 'block';
                    expandHint.textContent = 'Hide contact details ↑';
                    this.style.background = 'rgba(253, 250, 244, 1)';
                } else {
                    contactDiv.style.display = 'none';
                    expandHint.textContent = 'View in-charge contact details ↓';
                    this.style.background = '';
                }
            });
        }
        
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

// --- Event Rules Data & Modal Logic ---
const eventRules = {
    "photography": {
        title: "Photography Rules",
        rules: [
            "Individual Event.",
            "2 entries per team.",
            "Participants should provide their valid contact information (Full name, Campus ID, & Group name).",
            "Theme for the Photography will be given later.",
            "The photographs should be relevant to the theme.",
            "DSLR camera is not allowed only Mobile camera is allowed.",
            "The photographs that are submitted should be captured within the campus.",
            "Only BASIC edits are allowed. No filters.",
            "Provide technical details of the image to retain originality.",
            "Participants should send their entries on or before 27/03/2026 at 11.00 am.",
            "*Participants list submission: 23/03/2026.",
            "<strong>In-charge:</strong> Sabin | <a href='https://wa.me/917025024405' target='_blank' style='color:#25D366; text-decoration: underline; font-weight:bold;'>WhatsApp: +91 70250 24405</a>"
        ]
    },
    "short-film": {
        title: "Short Film Rules",
        rules: [
            "Group event, with one entry from each group.",
            "There is no Participant limit.",
            "Time Limit – 12 mins.",
            "All entries must be completely original and independently produced. If not, it will lead to immediate disqualification.",
            "Exceeding the time will result in minus points.",
            "The participants are responsible for any third-party copyright.",
            "A list of the participants involved in each short film should be submitted.",
            "Involvement of any alumni or students of other colleges of Yenepoya university is not allowed.",
            "Exhibiting inappropriate content and/or excessive violence is strictly prohibited and will lead to disqualification from the event.",
            "Audio should be audible and clear.",
            "The use of expensive cameras, lighting and other such equipment will not fetch any additional points to the teams.",
            "The videos must showcase skills in direction, editing, acting, cinematography, creativity (in terms of the idea) and script writing.",
            "Use of special effects/animation will not fetch any additional points.",
            "The film must be screened by the respective team in charge and moderated prior to the display at the competition.",
            "Language – English or Any language with English subtitles.",
            "Judge’s decision will be final.",
            "The entries must be submitted on or before 27/03/2026, 11:00 am.",
            "*Participants list submission: 23/03/2026.",
            "<strong>In-charge:</strong> Sahad C P | <a href='https://wa.me/919037062527' target='_blank' style='color:#25D366; text-decoration: underline; font-weight:bold;'>WhatsApp: +91 90370 62527</a>, Rajaba | <a href='https://wa.me/919048939216' target='_blank' style='color:#25D366; text-decoration: underline; font-weight:bold;'>WhatsApp: +91 90489 39216</a>"
        ]
    },
    "movie-recreation": {
        title: "Movie Recreation Rules",
        rules: [
            "Group event, with one entry from each group.",
            "There is no participation limit.",
            "Duration – 1 min.",
            "Recreation of movie scenes or songs are permitted.",
            "Videos using Digicams/DSLR/Mobile phones are allowed.",
            "Judgement will be based upon originality, overall presentation, and similarity to reference video.",
            "The video must be screened by the respective team in charge and moderated prior to the display at the competitions.",
            "Language – Any language with English subtitles are required for dialogue involving scenes. Subtitles are not needed for songs.",
            "Judge’s decision is final.",
            "The entries must be submitted on or before 27/03/2026, 11:00 am.",
            "*Participants list submission: 23/03/2026.",
            "<strong>In-charge:</strong> Alfas | <a href='https://wa.me/919207898872' target='_blank' style='color:#25D366; text-decoration: underline; font-weight:bold;'>WhatsApp: +91 92078 98872</a>, Farzin | <a href='https://wa.me/919947836163' target='_blank' style='color:#25D366; text-decoration: underline; font-weight:bold;'>WhatsApp: +91 99478 36163</a>"
        ]
    },
    "cooking-without-fire": {
        title: "Cooking Without Fire Rules",
        rules: [
            "Time: 9.00am to 10.15am, Duration: 1 hours 30 mins.",
            "Group event, 1 entry per team, 4 members in one team.",
            "Participants should not bring any pre-cooked items.",
            "All required materials, tools, and equipment should be arranged by the participants.",
            "Milk and milk products can be used.",
            "Blender and juice machines are allowed.",
            "Cutting of fruits/vegetables should be done on the spot (no prior preparation).",
            "All the participants must leave their working area clean after the preparation is over.",
            "Evaluation is based on the taste, hygiene & presentation, and unique name of the dish.",
            "There shall be a minimum of 2 varieties of dishes."
        ]
    },
    "origami": {
        title: "Origami Rules",
        rules: [
            "Time: 9.00am to 10.15am, Duration: 1 hour.",
            "Group event, 1 entry per team, 3 members in a team.",
            "It is advised that the participants bring their own stationery to avoid any major inconvenience.",
            "Participants are prohibited from carrying any electronic device to refer during the competition.",
            "Non-compliance may lead to disqualification.",
            "Participants must carry their own materials."
        ]
    },
    "story-writing": {
        title: "Story Writing Rules",
        rules: [
            "Duration: 1 hour.",
            "Individual event. 3 entries per team.",
            "The starting thread for story making will be given on the spot.",
            "Word limit 800-1000. A4 sheets will be provided.",
            "Stories may be written in English. The story must be original and written during the competition.",
            "Plagiarism will result in disqualification.",
            "No offensive, vulgar, political, or discriminatory content.",
            "AI-generated or pre-written content is not allowed.",
            "Judging will be based on Creativity and originality, Relevance to theme, Story structure (beginning, conflict, resolution), Language and expression, Emotional impact and clarity."
        ]
    },
    "mehandi": {
        title: "Mehandi Rules",
        rules: [
            "Duration: 1 hour.",
            "Individual Event, 3 entries per team.",
            "Mehndi Cone should be brought by the participants.",
            "The participants will not be allowed to refer to any printed material, Phones, etc., to prepare Mehndi.",
            "Theme for Mehndi is “Indian bridal Mehndi design”.",
            "Mehndi’s design should be portrayed on one hand palm till the elbow."
        ]
    },
    "extempore": {
        title: "Extempore Rules",
        rules: [
            "Duration: 1.5 hours.",
            "2 entries from each team.",
            "Topic for the Extempore will be given on the spot.",
            "Each Participant shall be given 3 minutes to speak on a topic that is given on the spot.",
            "There is only one chance to take a chit from the lot. There shall be no change of any topics.",
            "A time of 1 min will be given to the participant to frame the speech.",
            "Marks will be deducted if the speaker exceeds the time limit.",
            "No bluffing entertained.",
            "Marks deducted for irrelevancy to the topic also Language used shall be strictly English.",
            "No objection shall be entertained as the Decision of the Jury members shall be final."
        ]
    },
    "treasure-hunt": {
        title: "Treasure Hunt Rules",
        rules: [
            "Duration: 1 hr 30 mins.",
            "1 entry per team. Each team must consist of min 2 staffs and 2 team members.",
            "Only the registered members can participate in the event, on spot changing is not allowed.",
            "The hunt will consist of multiple clues, and teams must solve each clue to move to the next location.",
            "The event is time-bound, and the team that reaches the final treasure first will be declared the winner.",
            "Clues must not be removed, damaged, hidden, or tampered with under any circumstances.",
            "Use of mobile phones, internet, or any unfair means is strictly prohibited.",
            "Participants must maintain discipline, avoid restricted areas, and ensure no damage is caused to college property.",
            "The decision of the organizing committee will be final and binding, and any misconduct may lead to disqualification.",
            "Tie-breakers: 1) Shortest total time, 2) Fewer penalties, 3) Sudden-death tie-breaker riddle."
        ]
    },
    "comic-making": {
        title: "Comic Making Rules",
        rules: [
            "Duration: 1 Hour.",
            "Group Event. 1 entry per team. 3 members in one team.",
            "Topics will be given on spot.",
            "Comics must strictly adhere to the given theme.",
            "Venue: YPC.",
            "A3 size paper and all other materials required should be brought by the participant.",
            "Digital devices are not allowed.",
            "Can't copy from other pictures."
        ]
    },
    "hair-styling": {
        title: "Hairstyling Rules",
        rules: [
            "Duration: 1 hr 30 mins.",
            "Individual event, 3 entries per team.",
            "Hair Straightener and hair curler can be used.",
            "The participant must select a model on whom, he/ she is going to do hairstyling.",
            "All sort of hairstyling is allowed.",
            "The participants will not be allowed to refer to any printed material, phones etc. to complete their hairstyle."
        ]
    },
    "face-painting": {
        title: "Face Painting Rules",
        rules: [
            "Duration: 1 hour 30 mins.",
            "Individual Event. 2 entries from each team.",
            "There should be a model and an artist in a group.",
            "Materials required for the competition are to be brought by the participants.",
            "The medium of face painting should be face painting colours.",
            "Skin-safe adhesives & adhesive removers, Paint brushes, makeup brushes, sponges, sponge-tipped applicators, and a stylus (a tool that makes “dots”) can be used.",
            "The painting is judged based on the relevance of the theme given on the spot.",
            "Can’t use mobile phones and the Internet."
        ]
    },
    "debate": {
        title: "Debate Rules",
        rules: [
            "Duration: 2 hr 30 mins.",
            "Group event, 1 entry per team, 4 members from each group.",
            "The participants should speak \"for\" or \"against\" a topic.",
            "Topics will be announced prior to participation.",
            "Mode of communication: English only.",
            "Each group is given 5 mins to speak for and against the topic.",
            "Please restrain from using derogatory language."
        ]
    },
    "best-out-of-waste": {
        title: "Best Out of Waste Rules",
        rules: [
            "Duration: 1 hour 30 mins.",
            "Group event, 1 entry per team, 4 members in the team.",
            "Maximum Use of Waste and Recycled Material.",
            "The participants should bring the required waste material stationery like scissors, thread, etc.",
            "Waste material could be anything like tetra packs, bottles, newspapers, old utensils, jute material or any second-hand items that otherwise would be thrown away.",
            "Judgment will be based on The Extent of the Use of Waste Materials, Creativity & The Way of Presentation."
        ]
    },
    "solo-singing": {
        title: "Solo Singing Rules",
        rules: [
            "Total duration: 1 hr.",
            "Each group can have an entry of 2 individuals (1boy and 1girl).",
            "Time allotted for each entry is 4 (3+1) mins.",
            "Participants referring the lyrics while singing leads to minus points.",
            "If participants are singing along to a soundtrack, they should submit the sound track one day Prior to the subcommittee.",
            "Participants are instructed to keep their tracks ready (if using karaoke) after prior check so that there are no technical errors and handed over to in charge in advance.",
            "If there is any delay in performance the participant will be disqualified (will not include technical issues from organizing side).",
            "Participants should bring their own musical instruments if required in the performance.",
            "Any language songs are permitted.",
            "Boys &girls will have a separate competition.",
            "Choice of the song is open to the participants, but the song should not have any slang or derogatory language.",
            "Exceeding the time limit will result in a minus points.",
            "Decision of the judges will be final."
        ]
    },
    "quiz": {
        title: "Quiz Rules",
        rules: [
            "Duration: 1 hour 30 mins.",
            "Group event, 1 entry per team . A team shall consist of 3 members.",
            "The participants will not be allowed to use mobile or other gadgets.",
            "A question will be asked to a team and if they are unable to answer it will be passed to the next team.",
            "The theme will include general knowledge, current affairs, sports, science, history, etc.",
            "Team discussion is allowed.",
            "The decision of the quiz master will be final."
        ]
    },
    "spot-dance": {
        title: "Spot Dance Rules",
        rules: [
            "Total duration: 1 hr.",
            "From each group 2 entries are allowed. (1 boy and 1 girl)",
            "There will be a preliminary round of 6 people, performing in batches of 3 (at a time 2 on stage) for 1.30 mint.",
            "The final round will have 3 people performing for 2 mints. From this the winner will be selected.",
            "Spontaneity, rhythm, aptness for the song played will also be judged.",
            "The decision of the judges will be final."
        ]
    },
    "fashion-show": {
        title: "Fashion Show Rules",
        rules: [
            "Total duration: 1 hr.",
            "Time limit for each group would be 7 minutes (Including setup and the performance both).",
            "There will be no theme for the fashion show. Max number of participants 10.",
            "Delay in the arrival to the stage upon announcing the name or code must be strictly avoided.",
            "Announcement will be done a maximum of twice, failing to arrive will be disqualified.",
            "Boys and girls are allowed to be onstage together but in a decent manner.",
            "Participants will be judged on theme, costumes, walking stance, attitude.",
            "Irrelevant bare-body exposure (sleeveless, backless, short, revealing clothes) is prohibited, and importance will be given to the appropriate use of costumes and accessories.",
            "Use of vulgar expressions and clothing will lead to the disqualification of the team.",
            "All costumes are permitted, which maintain decency including original costumes & fashion designs.",
            "Judge’s decision shall be final and abiding."
        ]
    },
    "group-singing": {
        title: "Group Singing Rules",
        rules: [
            "Total duration: 1 hr 45 mins.",
            "Each group can have only 1 entry. Boys & girls will have no separate competition.",
            "A group can have a maximum of 6 members and minimum 4.",
            "Time allotted is 5 (4+1) mins.",
            "Participants will not be allowed to refer to the lyrics while singing.",
            "Participants should bring their own musical instruments if required in the performance.",
            "Any language songs are permitted. Choice of the song is open to the participants, but the song should not have any slang or derogatory language.",
            "Exceeding the time will result in a minus points.",
            "Decision of the judges will be final."
        ]
    },
    "group-dance": {
        title: "Group Dance Rules",
        rules: [
            "Total duration: 1 hr.",
            "Any dance form is accepted.",
            "Minimum 5 maximum 10 participants. Boys and girls separate entries.",
            "Vulgarity of any kind with respect to dance moves, costumes etc. will lead to disqualification.",
            "The music should be provided in a Pen Drive prior to the event.",
            "Time allotted 4+1 minute.",
            "No use of fire or banned substances stage.",
            "Exceeding the time will result in a minus points."
        ]
    }
    // Add other events here as they become available
};

const modalOverlay = document.getElementById('rules-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalTitle = document.getElementById('modal-title');
const modalRulesList = document.getElementById('modal-rules');
const eventItems = document.querySelectorAll('.event-item');

function openModal(eventId) {
    const eventData = eventRules[eventId];
    const eventNode = document.querySelector(`[data-event="${eventId}"]`);
    const eventName = eventNode ? eventNode.textContent.replace('ⓘ', '').trim() : "Event Rules";
    
    if (eventData) {
        modalTitle.textContent = eventData.title;
        modalRulesList.innerHTML = eventData.rules.map(rule => `<li>${rule}</li>`).join('');
    } else {
        // Fallback for events without specific rules yet
        modalTitle.textContent = eventName;
        modalRulesList.innerHTML = `<li>Rules for this event will be updated soon. Stay tuned!</li>`;
    }
    
    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event Listeners for Modal
eventItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const eventId = e.currentTarget.getAttribute('data-event');
        openModal(eventId);
    });
});

if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside content
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}


