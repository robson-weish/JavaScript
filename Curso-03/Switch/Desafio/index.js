var nome = prompt('Digite seu nome: ')
var cen = parseFloat(prompt('Sua altura em centímetros: '))
var peso = parseFloat(prompt('Seu peso: '))
var altura
var massa


altura = cen / 100
console.log(altura);

massa = peso/(altura*altura);
console.log(massa)

/* 

massa = peso / Math.pow (altura, 2 )
console.log(massa)

*/

    if (  massa < 0 ){ 
        alert('caiu')
    }else if ( massa <= 16 && massa < 16.99 ){ 
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Baixo peso grave <br>')
    }else if ( massa <= 17 && massa < 18.49 ) { 
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Baixo peso <br>')
    }else if( massa <= 18.50 && massa < 24.99 ){  
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Peso normal <br>')
    }else if ( massa <= 25 && massa < 29.99 ){  
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Sobrepeso <br>')
    }else if (  massa <= 30 && massa < 34.99 ) { 
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Obesidade grau I <br>')
    }else if ( massa <= 35 && massa < 39.99 ){ 
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Obesidade grau II <br>')
    }else if (  massa < 40 ) { 
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Obesidade grau III  <br>')
    }else { 
        alert('Error')
    }
        

