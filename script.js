// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Play Button Interaction
const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
    console.log('Play video');
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        if (target !== '#home') {
            console.log('Navigate to:', target);
        }
    });
});

// 3D Model Animation Loop
window.addEventListener('load', () => {
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    
    heroLeft.style.opacity = '0';
    heroLeft.style.transform = 'translateX(-20px)';
    heroRight.style.opacity = '0';
    heroRight.style.transform = 'translateX(20px)';
    
    setTimeout(() => {
        heroLeft.style.transition = 'all 0.8s ease';
        heroRight.style.transition = 'all 0.8s ease';
        heroLeft.style.opacity = '1';
        heroLeft.style.transform = 'translateX(0)';
        heroRight.style.opacity = '1';
        heroRight.style.transform = 'translateX(0)';
    }, 100);

    // Loop 3D model animation
    const splineViewers = document.querySelectorAll('spline-viewer');
    splineViewers.forEach(viewer => {
        viewer.addEventListener('load', () => {
            // Set animation to loop
            if (viewer.setLoop) {
                viewer.setLoop(true);
            }
            // Play animation
            if (viewer.play) {
                viewer.play();
            }
        });
    });
});

// Ensure animations loop continuously
setInterval(() => {
    const splineViewers = document.querySelectorAll('spline-viewer');
    splineViewers.forEach(viewer => {
        if (viewer.play && !viewer.isPlaying) {
            viewer.play();
        }
    });
}, 5000);