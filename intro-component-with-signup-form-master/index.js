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
        for (var i = 0; i < inputAll.length; i++) {
            inputAll[i].style.borderColor = 'hsl(0, 100%, 74%)';

            inputAll[i].style.backgroundImage = "url('icone.svg')";

            inputAll[i].style.backgroundRepeat = "no-repeat";

            inputAll[i].style.backgroundPosition = "calc(100% - 15px) center";

        }
    }
}

