function login() {
    const inputForm = {
        nome: "Flávia",
        sobrenome: "Costa",
        email: 'flavia@email.com',
        senha: 1234,
    
    }
    const firstName = document.querySelectorAll('input')[0].value;
    const lastName = document.querySelectorAll('input')[1].value;
    const email = document.querySelectorAll('input')[2].value;
    const password = document.querySelectorAll('input')[3].value;
    
    const inputAll = document.querySelectorAll('input');

    if (firstName == inputForm.nome && lastName == inputForm.sobrenome && email == inputForm.email && password == inputForm.senha) {
        alert("Login");
    } else {
        inputAll.forEach(input => {
            input.style.borderColor = 'hsl(0, 100%, 74%)';
        });
    }
}

