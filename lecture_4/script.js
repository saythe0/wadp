// Задача 1: Создайте функцию convertCelsiusToFahrenheit(), которая принимает температуру в градусах Цельсия в качестве аргумента и возвращает температуру в градусах Фаренгейта.
function convertCelsiusToFahrenheit(temperature) {
	return (temperature * 9 / 5) + 32;
}

// Задача 2: Создайте функцию calculateArea(), которая принимает длину и ширину прямоугольника в качестве аргументов и возвращает площадь прямоугольника.
function calculateArea(length, width) {
	return length * width;
}

// Задача 3: Создайте функцию calculatePerimeter(), которая принимает длину и ширину прямоугольника в качестве аргументов и возвращает периметр прямоугольника.
function calculatePerimeter(length, width) {
	return 2 * (length + width);
}

// Примеры использования функций
console.log('Температура 5°C в Фаренгейтах: ', convertCelsiusToFahrenheit(5));
console.log('Площадь прямоугольника (длина 5, ширина 10): ', calculateArea(5, 10));
console.log('Периметр прямоугольника (длина 5, ширина 10): ', calculatePerimeter(5, 10));