// Задача 1: Создайте элемент, который при клике будет заменять свой текст на другой.
function changeText() {
	let words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum'];

	let textArray = Array.from({ length: 5 }, () => words[Math.floor(Math.random() * words.length)]);

	document.getElementById('clickableText').textContent =  textArray.join(' ');
}

// Задача 2: Создайте форму с полем ввода email, при отправке которой проверяйте, что email введен корректно (например, с помощью регулярного выражения).
function validateEmail(event) {
	event.preventDefault();
	
	let email = document.getElementById('email').value;
	let message = document.getElementById('message');
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (emailRegex.test(email)) {
		message.textContent = 'Email введён корректно!';
	} else {
		message.textContent = 'Ошибка: Введите корректный email!';
	}
}

// Задача 3: Создайте кнопку, которая при нажатии будет запускать функцию, которая в консоль выводит текущую дату и время.
function currentTimeOutput() {
	let now = new Date();

	console.log('Текущая дата и время:', now.toLocaleString());
}