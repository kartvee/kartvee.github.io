const cardsContainer = document.getElementById('cards-container');
const intro = document.getElementById('intro');
const typewriter = document.getElementById('typewriter');

const profiles = [
    { name: 'Saba Kartvelishvili', username: 'user123', image: 'images/chelo.png'    },
    { name: 'Mariam Tughushi', username: 'cool_guy', image: 'chelo.png' },
    { name: 'Temuka Beitrishvili', username: 'star_girl', image: 'chelo.png' },
    { name: 'Keto Gujabidze', username: 'rockstar', image: 'chelo.png' },
    { name: 'Keto Kitiashvili', username: 'champion', image: 'chelo.png' },
    { name: 'Dimitri Khalatashvili', username: 'the_legend', image: 'chelo.png' },
    { name: 'Mariam Chamiashvili', username: 'mystery_man', image: 'chelo.png' },
    { name: 'Profile 8', username: 'queen_bee', image: 'chelo.png' },
    { name: 'Profile 9', username: 'the_real_deal', image: 'chelo.png' },
    { name: 'Profile 10', username: 'silent_warrior', image: 'chelo.png' },
];

// Shuffle profiles array
profiles.sort(() => 0.5 - Math.random());

let currentProfileIndex = 0;

function createCard(profile) {
    const card = document.createElement('div');
    card.className = 'tinder-card';
    card.style.backgroundImage = `url(${profile.image})`; // Use image for background

    const content = document.createElement('div');
    content.className = 'card-content';
    content.textContent = `${profile.name} (@${profile.username})`;

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const dislikeBtn = document.createElement('div');
    dislikeBtn.className = 'cross';
    dislikeBtn.innerHTML = '&#10006;'; // Cross (X) symbol
    dislikeBtn.addEventListener('click', () => swipeCard(card, 'left'));

    const likeBtn = document.createElement('div');
    likeBtn.className = 'tick';
    likeBtn.innerHTML = '&#10004;'; // Tick (✓) symbol
    likeBtn.addEventListener('click', () => swipeCard(card, 'right'));

    actions.appendChild(dislikeBtn);
    actions.appendChild(likeBtn);

    card.appendChild(content);
    card.appendChild(actions);

    return card;
}

function swipeCard(card, direction) {
    if (direction === 'left') {
        card.style.transform = 'translateX(-100%) rotate(-30deg)';
    } else {
        card.style.transform = 'translateX(100%) rotate(30deg)';
    }
    card.style.opacity = '0';

    setTimeout(() => {
        loadNextProfile();
    }, 500); // Delay for the swipe effect
}

function loadNextProfile() {
    if (currentProfileIndex >= profiles.length) {
        currentProfileIndex = 0; // Reset to the first profile if at the end
    }
    const profile = profiles[currentProfileIndex];
    const card = createCard(profile);
    cardsContainer.innerHTML = '';
    cardsContainer.appendChild(card);
    currentProfileIndex++;
}

function showMainContent() {
    intro.style.opacity = '0'; // Fade out intro
    setTimeout(() => {
        intro.style.display = 'none'; // Hide intro after fade out
        cardsContainer.style.display = 'block'; // Show swipe container
        loadNextProfile(); // Load first profile
    }, 1000); // Delay for fade out effect
}

function typeWriter(text, element, callback) {
    let index = 0;
    const speed = 100; // Speed of typing effect
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            // Call callback when typing is done
            setTimeout(callback, 2000); // Show text for 2 seconds
        }
    }
    type();
}

// Initialize with the intro typewriter effect and set timeout to show the main content
typeWriter('MariamTugu', typewriter, showMainContent);
