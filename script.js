/* TYPING EFFECT */
const text = "NITHISH PURUSHOTHAMAN";
let index = 0;
const speed = 100;
const typingText = document.getElementById("typing-text");

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}
typeEffect();

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
