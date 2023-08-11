/**---------------------------------------
 * Objetivo: 
 * Autor: Julia 
 * Data: 04/08
 * Versão: 1.0
 -----------------------------------------*/

 const readline = require('readline');

 const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});
 
entradaDeDados.question('Digite seu Nome: ', function (nomeUsuario) {
    const nome = nomeUsuario;
 
entradaDeDados.question('Digite a primeira nota: ', function (primeiraNota) {
    const newNota1 = parseFloat(primeiraNota);
 
entradaDeDados.question('Digite a segunda nota: ', function (segundaNota) {
    const newNota2 = parseFloat(segundaNota);
 
entradaDeDados.question('Digite a terceira nota: ', function (terceiraNota) {
    const newNota3 = parseFloat(terceiraNota);
 
entradaDeDados.question('Digite a quarta nota: ', function (quartaNota) {
    const newNota4 = parseFloat(quartaNota);
 
    console.log('Bem-vindo ao sistema de notas:', nome);
    console.log('Sua 1ª nota é:', newNota1);
    console.log('Sua 2ª nota é:', newNota2);
    console.log('Sua 3ª nota é:', newNota3);
    console.log('Sua 4ª nota é:', newNota4);
 
    if (isNaN(newNota1) || isNaN(newNota2) || isNaN(newNota3) || isNaN(newNota4)) {
    console.log('Alguma nota digitada não é um número válido.');
    } else {
    const media = (newNota1 + newNota2 + newNota3 + newNota4) / 4;

    console.log('ERRO: Você esqueceu de alguma nota')
                       
    if(isNaN(newNota1)||isNaN(newNota2)||isNaN(newNota3)||isNaN(newNota4)){
    console.log('ERRO: É obrigatório a entrada apenas de NÚMEROS!!')
     }else if(newNota1>10 || newNota2>10 || newNota3>10 ||newNota4>10){
    console.log('ERRO: São permitidos apenas caractéres entre 0 e 10')}{

    }if (media >= 7) {
    console.log('Olá ' + nome + ', sua média é ' + media + '. Parabéns, você foi aprovado(a)!');
    } else {

    console.log('Olá ' + nome + ', sua média é ' + media + '. Infelizmente, você foi reprovado(a)!');
}
}
 
 entradaDeDados.close();
 
    }
);
});
});
})
})