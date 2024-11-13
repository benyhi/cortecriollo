
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {

        sessionStorage.setItem('loggedUser', JSON.stringify({email: user.email}));

        alert('Inicio de sesión exitoso.');
        window.location.href = 'index.html';

    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

