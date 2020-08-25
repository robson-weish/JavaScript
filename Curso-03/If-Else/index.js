var A1 = parseInt(prompt ('Digite A1'))
var A2 = parseInt(prompt ('Digite A2'))
var A3 

A3 = ( A1 + A2 ) / 2

console.log(A3)
console.log(A2)
console.log(A1)

if ( A3 >= 6) {
    document.write('O VALOR DE A3 =' + A3) 
    alert (' PASSOU ')
} else {
    document.write('O VALOR DE A3 =' + A3)
    alert (' SE LASCOU ')
}