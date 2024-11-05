const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

// Устанавливаем размер канваса на размер окна
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Параметры капель дождя
const raindrops = [];
const maxRaindrops = 200;

// Функция создания капли
function createRaindrop() {
	return {
		x: Math.random() * canvas.width,
		y: Math.random() * canvas.height,
		length: Math.random() * 15 + 10,
		speed: Math.random() * 5 + 2,
		opacity: Math.random() * 0.5 + 0.3
	};
}

// Заполняем массив каплями
for (let i = 0; i < maxRaindrops; i++) {
	raindrops.push(createRaindrop());
}

// Анимация
function animateRain() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
	ctx.lineWidth = 1;
	ctx.lineCap = 'round';

	for (let drop of raindrops) {
		ctx.beginPath();
		ctx.moveTo(drop.x, drop.y);
		ctx.lineTo(drop.x, drop.y + drop.length);
		ctx.stroke();

		// Обновляем позицию капли
		drop.y += drop.speed;
		if (drop.y > canvas.height) {
			drop.y = -drop.length;
			drop.x = Math.random() * canvas.width;
			drop.speed = Math.random() * 5 + 2;
			drop.length = Math.random() * 15 + 10;
		}
	}

	requestAnimationFrame(animateRain);
}

animateRain();

// Обновляем размер канваса при изменении размера окна
window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});