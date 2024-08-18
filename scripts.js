document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const hero = document.getElementById('hero');

    const backgrounds = [
        'hero-bg1.jpg',
        'hero-bg2.jpg',
        'hero-bg3.jpg'
    ];
    
    let currentBgIndex = 0;
    
    function changeBackground() {
        currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
        hero.style.backgroundImage = `url('${backgrounds[currentBgIndex]}')`;
    }
    
    setInterval(changeBackground, 5000); // Change background every 5 seconds

    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            window.location.href = 'payment.html'; // Redirect to payment page
        });
    });
});
