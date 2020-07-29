// EXEMPLOS DE VETORES
var num = [1 , 7 , 4 , 99 , 13]
num.push(5)


console.log(`O primeiro valor do vetor e ${num[0]}`)
console.log(`Nossos vetores são ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
// console.log(`Nosso vetor ordenado fica desse modo ${num.sort()}`)

var i = 0

while (i < num.length){
    console.log(`Posição ${i} e o número ${num[i]}`)
    i++
}

for (var pos=0; pos<num.length;pos++){
    console.log(`A Posição ${pos} tem o valor ${num[pos]}`)
}

for ( var pos in num ){
    console.log(num[pos])
}

console.log("")
console.log(num.indexOf(4))

