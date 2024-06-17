const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Получаем ширину и высоту холста
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;



// Рисование квадрата по центру
ctx.fillStyle = 'red'; // Цвет заливки

// Вычисляем координаты центра
const squareX = canvasWidth / 2 - canvasWidth/2; // Центр по горизонтали минус половина ширины квадрата
const squareY = canvasHeight / 2 - canvasHeight/2; // Центр по вертикали минус половина высоты квадрата

ctx.fillRect(squareX, squareY, canvasWidth, canvasHeight); // (x, y, ширина, высота) 

