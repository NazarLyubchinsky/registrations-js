const buttons = document.querySelectorAll('.btn-choise');
const inputName = document.querySelector('.input-choise:nth-of-type(1)');
const inputLastname = document.querySelector('.input-choise:nth-of-type(2)');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		buttons.forEach(otherButton => {
			otherButton.classList.remove('selected');
		});
		button.classList.add('selected');

		if (button.textContent === 'Шукаю роботу') {
			inputName.placeholder = 'Ваше ім\'я';
			inputLastname.placeholder = 'Ваше прізвище';
		} else {
			inputName.placeholder = 'Ім\'я дитини';
			inputLastname.placeholder = 'Прізвище дитини';
		}
	});
});


const emailInput = document.getElementById('email');

emailInput.addEventListener('blur', () => {
	const email = emailInput.value.trim();
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailRegex.test(email)) {
		emailInput.setCustomValidity('Введіть дійсну електронну адресу');
	}
});


const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', () => {
	const passwordValue = passwordInput.value;

	if (passwordValue.length < 8) {
		passwordInput.setCustomValidity('Пароль повинен містити принаймні 8 символів');
	} else {
		passwordInput.setCustomValidity('');
	}

	passwordInput.reportValidity();
});


const confirmPass = document.getElementById('confirm-password');
const confirmPassError = document.getElementById('confirm-pass-error');

function validatePassword() {
	if (passwordInput.value !== confirmPass.value) {
		confirmPassError.textContent = 'Паролі не співпадають';
	} else {
		confirmPassError.textContent = '';
	}
}
passwordInput.addEventListener('input', validatePassword);
confirmPass.addEventListener('input', validatePassword);


const checkbox = document.getElementById('checkbox');
const registrationButton = document.getElementById('registr');

checkbox.addEventListener('change', function () {
	if (this.checked) {
		registrationButton.removeAttribute('disabled');
		registrationButton.classList.add('active');
	} else {
		registrationButton.setAttribute('disabled', 'disabled');
		registrationButton.classList.remove('active');
	}
});

function user() {
	let name = document.querySelector('.input-choise:nth-of-type(1)').value;
	let lastname = document.querySelector('.input-choise:nth-of-type(2)').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let confirmPassword = document.getElementById('confirm-password').value;

	if (!name || !lastname || !email || !password || !confirmPassword) {
		alert('Заповніть всі поля');
	} else if (!emailRegex.test(email)) {
		alert('Введіть дійсну електронну адресу');
	} else if (password !== confirmPassword) {
		alert('Повторний пароль введено неправильно');
	} else {
		alert(`Ім'я: ${name}\nПрізвище: ${lastname}\nEmail: ${email}\nПароль: ${password}\nПідтвердження пароля: ${confirmPassword}`);
	}
}



