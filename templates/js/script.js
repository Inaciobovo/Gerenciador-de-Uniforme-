function Login(){
    const emailUser = document.getElementById("email-input").value;
    const passUser = document.getElementById("pass-input").value;

    // Definir Credenciais (com strings)
    const REALUSER = "inacio@bovotech.com";
    const REALPASS = "admin123"

    // A logica do IF precisa comparar cada campo individualmente
    if(emailUser === REALUSER && passUser === REALPASS){
        Notification =("Login efetuado com sucesso!")
        window.location.href = "templates/menu.html";
    }else{
        alert("Email ou senha incorretos!")
    }
}


