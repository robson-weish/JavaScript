/*

switch (opção){
    case (instrução):
        //Trecho de código
        break
    case (instrução):
        //Trecho de código
        break
    case (instrução):
        //Trecho de código
        break
    default:
        //Trecho de código
        break
}


Break - instrui que aquele bloco está sendo encerrado
        se ele não for colocado ele vai descer executando todos os blocos

Default -   e uma instrução opcional não precisa colocar...
            ele tem a função 'else' se nenhum case for colocado como verdadeiro 
            o default e ativado como uma função obrigatoria 

*/

// PARTIU PRÁTICA  

var parametro = parseInt(prompt('Digite um numero: '))

switch (parametro){
    case 1:
        document.write('Parametro 1 <br/>')
        break
    case 2:
        document.write('Parametro 2 <br/>')
        break
    case 3:
        document.write('Parametro 3 <br/>')
        break
    default:
        document.write('Default <br />')
        break
}


// Cálculos básico para exemplos em JavaScript

        var num1 = prompt('Digite o valor de num1')
        var num2 = prompt('Digite o valor de num2')

        num1 = parseInt(num1)
        num2 = parseInt(num2)

        document.write('A soma entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 + num2) + '<br />')
        document.write('A subtração entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 - num2) + '<br />')
        document.write('A multiplicação entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 * num2) + '<br />')
        document.write('A divisão entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 / num2) + '<br />')
        document.write('O módulo entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 % num2) + '<br />')
        document.write('O incremento de ' + num1 + ' é: ' + (++num1) + '<br />')
        document.write(num1 + '<br />')
        document.write('O decremento de ' + num1 + ' é: ' + (--num1) + '<br />')
        document.write(num1)

// Exemplos de Atribuição 

var teste = 10
document.write('<br/> Teste e = ' + teste + '<br/>')

    //teste = teste + 5
    //teste += 5
    //teste -= 5
    //teste *= 5
    //teste /= 5
    teste %=3

document.write('<br/> Teste e = ' + teste + '<br/>')