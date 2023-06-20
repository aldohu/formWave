const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email');
const labels = document.querySelectorAll('label');
const emailSpans = document.querySelectorAll('.email-container span');
const passwordSpans = document.querySelectorAll('.password-container span');
emailInput.addEventListener('focus', (e) => {
	const spans = emailInput.previousElementSibling.querySelectorAll('span');
	spans.forEach((span) => {
		span.classList.add('move-up');
		span.classList.remove('move-down');
	});
});

emailInput.addEventListener('blur', (e) => {
	const spans = emailInput.previousElementSibling.querySelectorAll('span');
	if (e.target.value === '') {
		emailSpans.forEach((span, index) => {
			setTimeout(() => {
				span.classList.remove('move-up');
				span.classList.add('move-down');
			}, index * 200);
		});
	}
});
passwordInput.addEventListener('focus', (e) => {
	const spans = passwordInput.previousElementSibling.querySelectorAll('span');
	spans.forEach((span) => {
		span.classList.add('move-up');
		span.classList.remove('move-down');
	});
});

passwordInput.addEventListener('blur', (e) => {
	const spans = passwordInput.previousElementSibling.querySelectorAll('span');
	if (e.target.value === '') {
		passwordSpans.forEach((span, index) => {
			setTimeout(() => {
				span.classList.remove('move-up');
				span.classList.add('move-down');
			}, index * 200);
		});
	}
});
