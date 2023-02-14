// Arquivo para Estudo de operadores e operações

let n1 = 10 // number inteiro
let n2 = 2 // number inteiro
let n3 = '2' // string texto

document.write(`N1 ${`n1`}<br>`)
document.write(`N2 ${`n2`}<br>`)
document.write(`N3 ${`n3`}<br>`)

/*Operações Aritmeticas */
console.log(n1 + n2) // adição
console.log(n1 - n2) // subtração
console.log(n1 * n2) // mmltiplicação
console.log(n1 / n2) // divisão
console.log(n1 % n2) // resto ou modulo

/* Operadores de Comparação */
console.log(n2 == n3) //igual a
console.log(n2 === n3) // identico a
console.log(n2 != n3) // diferente de Nao=
console.log(n2 !== n3) // Nao e identico
console.log(n1 > n2) // Se o valor de n1 é maior que o valor de n2
console.log(n1 < n2) // se o valor de n2 é maior que o valor de n1
console.log(n1 >= n2) // se o valor de n1 é maior ou igual ao valor de n2
console.log(n1 <= n2) // se o valor de n2 é maior ou igual ao valor de n1

/*Operadores Logicos e Relacionais  */
let a = true
let b = false
console.log(a && b) // E AND // Ao usar o && estamosperguntando se os dois são verdadeiros.
console.log(a || b) // OU OR //  Ao usar o || estamos perguntando se um ou outro elemento é verdadeiro.
console.log(!a) // NAO NOT negação // é usado para caso o elemento for verdadeiro o retorno do sistema sera falso
console.log(!b) //caso o elemento for falss o retorno do sistema sera verdaeiro
