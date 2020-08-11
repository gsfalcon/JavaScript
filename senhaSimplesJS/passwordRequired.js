var senha = 1234 //default password
var senhaInserida = window.prompt("Digite a senha para continuar: ") //password entered
    if (senha != senhaInserida) //checking password
    {
        window.alert("SENHA INCORRETA / WRONG PASSWORD") //wrong password error message
        top.location.href = "error.html" //redirect to error page
    }

/*Please, be aware that it is not ok to use JavaScript to protect web pages
JavaScript commands are executed in the browser after the page is already loaded. */ 

//okddd