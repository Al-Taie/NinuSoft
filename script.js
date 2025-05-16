// Typewriter effect for "NinuSoft - Coming Soon"
const typeStrings = [ "NinuSoft - Coming Soon" ];
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
      setTimeout(typeWriter, 900);
      return;
    }
  }
  setTimeout(typeWriter, isDeleting ? 36 : 65);
}
window.addEventListener("DOMContentLoaded", () => typeWriter());
