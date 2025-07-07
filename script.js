function openEnvelope() {
  const flap = document.getElementById('flap');
  const card = document.getElementById('card');
  const overlay = document.getElementById('overlay');

  flap.style.transform = 'rotateX(180deg)';
  setTimeout(() => {
    card.style.display = 'block';
    overlay.style.display = 'block';
  }, 600);
}

function closeCard() {
  const flap = document.getElementById('flap');
  const card = document.getElementById('card');
  const overlay = document.getElementById('overlay');

  flap.style.transform = 'rotateX(0deg)';
  card.style.display = 'none';
  overlay.style.display = 'none';
}

function createConfetti() {
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = randomColor();
    confetti.style.animationDuration = (2 + Math.random() * 3) + "s";
    confetti.style.width = confetti.style.height = (6 + Math.random() * 6) + "px";
    confetti.style.top = "-10px";
    confetti.style.position = "absolute";
    confetti.style.animation = "fall linear infinite";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 7000);
  }
}

function randomColor() {
  const colors = ["#fcb1ff", "#b8f3e1", "#cde9ff", "#f5c7ff", "#a3f7bf", "#d1bfff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

window.onload = () => {
  createConfetti();
};
