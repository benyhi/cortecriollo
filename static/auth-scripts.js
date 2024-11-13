
// REGISTER

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('inputUsername').value;
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExist = users.find(user => user.email === email);

    if (userExist){
        alert('El usuario ya esta registrado.');
    } else {
        users.push({username, email, password});
        localStorage.setItem('users', JSON.stringify(users));
        alert('Se ha registrado correctamente.');
        window.location.href = 'login.html';
    }
})

// LOGIN 

// DETECTAR SI HAY UN USUARIO LOGEADO
