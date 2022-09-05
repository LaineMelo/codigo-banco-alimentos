function logar(){
    if(document.getElementById("cpfFunc").value != "" && document.getElementById("senha").value != ""){
        var cpfDigitado = document.getElementById("cpfFunc").value;
        var usuario = localStorage.getItem(cpfDigitado);
        
        if(usuario != null){ 
            window.location.href = "../Html/inicio.html";
        }else {
            alert("Usuário não cadastrado!");
        }
      }else{
        alert("Por favor, preencha os campos com seu CPF e Senha");
    }
}