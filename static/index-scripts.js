function usuarioLogged(){
    const logged = sessionStorage.getItem('loggedUser');
    if (logged){
        return 'true';
    }
}

window.onload = function(){
    if (usuarioLogged() === "true"){
        document.getElementById('cursos').style.display = 'block'
        document.getElementById('logout').style.display = 'block'
        document.getElementById('login').style.display = 'none'
        document.getElementById('register').style.display = 'none'
    }
}

function cerrarSesion(){
        sessionStorage.removeItem('loggedUser');
        window.location.href = 'index.html';
}
