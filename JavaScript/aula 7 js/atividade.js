
//Exemplo

// let idade = parseInt( prompt("Digite sua idade:") )

// if( idade >= 18 ){
//     alert("Você já pode tirar CNH")
// }else{
//     alert("Você não tem idade permitida para tirar CNH")
// }





//Tarefa 1

// let numero1 = parseInt (prompt("Digite um numero"))

// let numero2 = parseInt (prompt("Digite um numero"))

// if(numero1 < numero2){
//     alert("Valor crescente: " + numero1 + ", " + numero2);
// }else if(numero2 < numero1){
//     alert("Valor crescente: " + numero2 + ", " + numero1);
// }




//Tarefa 2 

// let numero = parseInt(prompt("Digite um numero"))

// if( numero >= 0 ){
//     alert("Numero é positivo")
// }else{
//     alert("Numero é negativo")
// }


//Tarefa 3

// let nota1 = parseInt(prompt("Digite a primeira nota:"))
// let nota2 = parseInt(prompt("Digite a segunda nota:"))

//  media = (nota1 + nota2)/2

// if( media >= 7 ){
//     alert("Aprovado")
// }else{
//     alert("Reprovado")
// }


//Tarefa 4

// function testeDoRetorn(){

// let numero = parseInt(prompt("Digite o número 3"))

// if( numero == 3 ){
//     alert("Parabéns você digitou o numero certo")
// }else{
//     alert("Numero inválido...")
//     return  //para de rodar o sistema 
// }

// let resposta = prompt("Digite batata")

// if( resposta == "batata" ){
//     alert("Parabéns você digitou o resposta certa")
// }else{
//     alert("Resposta inválido...")
//     return
// }

// alert("Fim do sistema")

// }

 atividadeHotel()

 let reserva = {
    adulto: 0,
    crianca: 0,
    cupom: " "
 }


function atividadeHotel() {

let mes = prompt("Selecione o mês: \n Mesês disponivel: 10, 11 e 12.")

if( mes >= 10 ){
    alert("Agendamento confirmado")
}else{
    alert("Mês inválido...")
    return
}

let adulto = parseInt(prompt("Digite o número de adultos presentes:"))

if(adulto >= 1 ){
    alert("Reserva realizada")
}else{
    alert("Número inválido")
    return
}


let crianca = parseInt(prompt("Se houver crianças digite o número de acompanhantes:"))

if(crianca >= 0 ){
    alert("Reserva realizada")
}else{
    alert("Número inválido")
    return
}

let cupom = prompt("Digite o Cupom de desconto")

if( cupom == "MENOS10" ){
    alert("Cupom Aplicado")
}else{
    alert("Cupom Inexistente")
}


}
reservaConcluida()
console.log(reserva)




function reservaConcluida() {
    alert("Reserva realizado com sucesso")
}
   