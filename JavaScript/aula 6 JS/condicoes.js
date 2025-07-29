function salvarIdade(){
    let idade = parseInt(document.querySelector("#inputIdade").value)


    //Condições                          //if em ingles significa "Se"
                                        // else em ingles significa "Se não"
    if( idade >= 18 ) {
        alert("Permissão Autorizada")
    }else {
        alert("Permissão Negada")
    }
}

function salvarSenha(){
    let senha = document.querySelector("#inputSenha").value


    if( senha == "admin" ) {
        alert("Acesso concedido!")
    }else {
        alert("Senha inválida...")
    }
}

function salvarTermos(){

   let termos = document.querySelector("#inputTermos").checked

     if ( termos == false ){
    
    document.querySelector("#status").innerHTML = "O termo não foi aceito"
   }else{
    document.querySelector("#status").innerHTML = "O termo foi aceito"
   }

 

}


