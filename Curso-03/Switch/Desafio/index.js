var nome = prompt('Digite seu nome: ')
var cen = parseFloat(prompt('Sua altura em centímetros: '))
var peso = parseFloat(prompt('Seu peso: '))
var altura
var massa


altura = cen / 100
console.log(altura);

massa = peso/(altura*altura);

/* 

massa = peso / Math.pow (altura, 2 )
console.log(massa)

*/

switch (massa) {
    case ' massa > 0 ':
        alert('caiu')
        break
    case massa >= 16 && massa < 16.99:
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Baixo peso grave <br>')
        break
    case massa >= 17 && massa < 18.49:
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Baixo peso <br>')
        break
    case massa >= 18.50 && massa < 24.99:
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Peso normal <br>')
        break
    case massa >= 25 && massa < 29.99:
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Sobrepeso <br>')
        break
    case massa >= 30 && massa < 34.99:
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Obesidade grau I <br>')
        break
    case massa >= 35 && massa < 39.99:
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Obesidade grau II <br>')
        break
    case massa > 40:
        document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ')
        document.write('Obesidade grau III  <br>')
        break
}
