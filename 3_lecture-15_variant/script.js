var numbers;

function generateArray() {
	numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

	document.getElementById('generatedArray').textContent = numbers.join(', ');
}

function editArray() {
	if (!numbers) {
		alert('Сгенерируйте массив чисел перед его редактированием.');
		return;
	}

	let filteredNumbers = numbers.filter(number => number <= 50);

	document.getElementById('editedArray').textContent = filteredNumbers.join(', ');
}
