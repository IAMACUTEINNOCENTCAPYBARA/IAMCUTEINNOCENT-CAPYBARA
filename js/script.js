// Custom Cursor Logic
const cursorDot = document.querySelector("#cursor-dot");
const cursorOutline = document.querySelector("#cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add some delay/smoothness to outline if desired, or just raw tracking
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Interactive Elements Hover Effect for Cursor
const interactables = document.querySelectorAll('a, button');
interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') !== 'light';
    
    if (isDark) {
        body.setAttribute('data-theme', 'light');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        body.removeAttribute('data-theme');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
});

// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
