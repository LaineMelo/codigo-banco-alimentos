function logar(){
    if(document.getElementById("cpf").value != "" && document.getElementById("senha").value != ""){
        var cpfDigitado = document.getElementById("cpf").value;
        var usuario = localStorage.getItem(cpfDigitado);
        
        if(usuario != null){ 
            window.location.href = "/src/Html/consultaBeneficiario.html";
        }else {
            alert("Usuário não cadastrado!");
        }
      }else{
        alert("Por favor, preencha os campos com seu CPF e Senha");
    }
}