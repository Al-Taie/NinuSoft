// Optimized bubble animation for a dynamic background
const colors = ["#47b7ff33", "#25375a33", "#2e6cf733", "#1e202833"];

function createBubble() {
  const bubble = document.createElement("div");
  const size = Math.random() * 38 + 22; // Size between 22px and 60px
  bubble.style.position = "fixed";
  bubble.style.left = `${Math.random() * 100}vw`;
  bubble.style.bottom = `-${size}px`;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.borderRadius = "50%";
  bubble.style.background = colors[Math.floor(Math.random() * colors.length)];
  bubble.style.opacity = Math.random() * 0.24 + 0.06;
  bubble.style.zIndex = 0;
  bubble.style.pointerEvents = "none";
  bubble.style.filter = "blur(1.3px)";
  document.body.appendChild(bubble);

  // Animate bubble upwards and fade out
  setTimeout(() => {
    bubble.style.transition = "transform 7.5s linear, opacity 7.5s linear";
    bubble.style.transform = `translateY(-110vh) scale(${Math.random() * 0.6 + 0.7})`;
    bubble.style.opacity = 0;
  }, 20);

  // Remove bubble after animation
  setTimeout(() => {
    bubble.remove();
  }, 7700);
}

setInterval(createBubble, 600);

// Typewriter effect for "NinuSoft - Coming Soon"
const typeStrings = ["Coming Soon"];
const autoTypeElement = document.getElementById("auto-type");
let typeIndex = 0, charIndex = 0, isDeleting = false;

function typeWriter() {
  const current = typeStrings[typeIndex];
  if (!isDeleting) {
    autoTypeElement.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      setTimeout(() => { isDeleting = true; typeWriter(); }, 1500);
      return;
    }
  } else {
    autoTypeElement.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      typeIndex = (typeIndex + 1) % typeStrings.length;
      setTimeout(typeWriter, 900);
      return;
    }
  }
  setTimeout(typeWriter, isDeleting ? 36 : 65);
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});