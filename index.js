function login() { //função para efetuar login
    const inputForm = { //valores que farão o login acontecer, escolhidos para exemplo
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

    if (firstName == inputForm.nome && lastName == inputForm.sobrenome && 
        email == inputForm.email && password == inputForm.senha) { //Condição se os dados do login estiverem corretos
        for (var i = 0; i < inputAll.length; i++) { //seleção de todos os inputs e deixando a borda verde
            inputAll[i].style.borderColor = 'green';
        }

    } else {
        for (var i = 0; i < inputAll.length; i++) { //condição se os dados estiverem errados
            inputAll[i].style.borderColor = 'hsl(0, 100%, 74%)';  

            inputAll[i].style.backgroundImage = "url('icone.svg')";

            inputAll[i].style.backgroundRepeat = "no-repeat";

            inputAll[i].style.backgroundPosition = "calc(100% - 15px) center";

            if (i === 2) { //condição especifica para o 3 input
                inputAll[i].value = 'email@exemplo.com';
                inputAll[i].style.color = 'hsl(0, 100%, 74%)';
            }

        }


    }
}

