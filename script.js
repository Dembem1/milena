const envelope = document.getElementById('envelope');
const flap = document.getElementById('flap');
const openBtn = document.getElementById('openBtn');
const card = document.getElementById('card');
const overlay = document.getElementById('overlay');

// Открыть открытку
function openEnvelope() {
  flap.style.transform = 'rotateX(-180deg)';
  envelope.querySelector('.envelope-body').style.transform = 'translateY(100px)';
  card.classList.add('show');
  overlay.classList.add('show');
  openBtn.style.display = 'none';
}

// Закрыть открытку по клику на фон
function closeCard() {
  flap.style.transform = '';
  envelope.querySelector('.envelope-body').style.transform = '';
  card.classList.remove('show');
  overlay.classList.remove('show');
  openBtn.style.display = 'block';
}

openBtn.addEventListener('click', openEnvelope);
overlay.addEventListener('click', closeCard);

// Конфетти — простой пример на canvas
const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');
let W, H;
let confettiElements = [];

function ConfettiParticle() {
  this.x = Math.random() * W;
  this.y = Math.random() * H - H;
  this.size = 5 + Math.random() * 5;
  this.speed = 1 + Math.random() * 3;
  this.color = `hsl(${Math.random() * 360}, 70%, 70%)`;
  this.tilt = Math.random() * 10 - 10;
  this.tiltSpeed = Math.random() * 0.1 + 0.01;

  this.update = function () {
    this.y += this.speed;
    this.tilt += this.tiltSpeed;
    if (this.y > H) {
      this.y = -this.size;
      this.x = Math.random() * W;
    }
  };

  this.draw = function () {
    ctx.beginPath();
    ctx.moveTo(this.x + this.tilt, this.y);
    ctx.lineTo(this.x + this.tilt + this.size / 2, this.y + this.size);
    ctx.lineTo(this.x + this.tilt - this.size / 2, this.y + this.size);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  };
}

function setupConfetti() {
  W = window.innerWidth;
  H = window.innerHeight;
  confettiCanvas.width = W;
  confettiCanvas.height = H;
  confettiElements = [];
  for (let i = 0; i < 150; i++) {
    confettiElements.push(new ConfettiParticle());
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, W, H);
  confettiElements.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(drawConfetti);
}

window.addEventListener('resize', setupConfetti);

setupConfetti();
drawConfetti();
