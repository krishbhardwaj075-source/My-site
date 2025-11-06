const textArray = ["Python Programmer", "Web Developer", "Writer", "AI Engineer"];
let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");
function type() {
  if (charIndex < textArray[index].length) {
    typingText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}
function erase() {
  if (charIndex > 0) {
    typingText.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, 300);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  type();
});
