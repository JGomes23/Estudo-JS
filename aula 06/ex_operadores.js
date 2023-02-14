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

/*Operadores aritmeticos possuem uma ordem de precedencia a serem resolvidos, sendo ela:
1: ()
2: **
3: *  /   %
4: +  -
*/

/*Auto atribuições*/
var n = 5
n = n + 4 // Está sendo acrescentado valor a variavel n, sendo alterado o seu valor para 9.
n = n - 2 // Está sendo retirado valor da variavel n, sendo alterado o seu valor 7.
n = n * 2 // Está sendo acrescentado valor a variavel n através da multiplicação, sendo alterado o seu valor para 14.
n = n / 4 // Está sendo dividido o valor da variavel n, sendo alterado o seu valor para 3.5.
n = n ** 2 // Esta sendo elevado a potenciação, alterando seu valor para 12.25.
n = n % 2 // Resto da divisão, sendo alterado seu valor para 0.25

/* Incremento */
var x = 10
x++ // forma ultra simplificada de realizar a soma de um elemento dentro de uma variavel
x-- // forma ultra simplificada de realizar a subtração de um elemento dentro de uma variavel

/*Auto atribuições Simplificadas*/
var num = 2
num += 4 // += pode ser usado para simplificar a auto atribuição de soma, porém, apenas se for para a propria variavel.
num -= 4 // -= pode ser usado para simplificar a auto atribuição de subtração, porém, apenas se for para a propria variavel.
num *= 4 // *= pode ser usado para simplificar a auto atribuição de multiplicação, porém, apenas se for para a propria variavel.
num /= 4 // /= pode ser usado para simplificar a auto atribuição de divisão, porém, apenas se for para a propria variavel.
num **= 4 // **= pode ser usado para simplificar a auto atribuição de potenciação, porém, apenas se for para a propria variavel.
num %= 4 // %= pode ser usado para simplificar a auto atribuição de resto/modulo de divisão, porém, apenas se for para a propria variavel.

/* Operadores relacionais*/
console.log(n2 == n3) //igual a
console.log(n2 === n3) // identico a
console.log(n2 != n3) //  Não igual
console.log(n2 !== n3) // Nao e identico

console.log(n1 > n2) // Se o valor de n1 é maior que o valor de n2
console.log(n1 < n2) // se o valor de n2 é maior que o valor de n1
console.log(n1 >= n2) // se o valor de n1 é maior ou igual ao valor de n2
console.log(n1 <= n2) // se o valor de n2 é maior ou igual ao valor de n1

/*Operadores Logicos   */
let a = true
let b = false
console.log(a && b) // E AND // Ao usar o && estamos perguntando se os dois são verdadeiros.
console.log(a || b) // OU OR //  Ao usar o || estamos perguntando se um ou outro elemento é verdadeiro.
console.log(!a) // NAO NOT negação // é usado para caso o elemento for verdadeiro o retorno do sistema sera falso
console.log(!b) //caso o elemento for falso o retorno do sistema sera verdaeiro

/* Precedencia Expressão
1: () ** /
2: >  <   >=
3: !
4: &&
5: ||
*/

/* Operador Ternario */
var media = 5.5
// teste ? true :false
var resultado = media > 7.0 ? 'Aprovado' : 'Reprovado'
// É um teste logico que mostra o resultado da operação caso ele seja verdadeiro ou falso.
var idade = 19
var maioridade = idade >= 18 ? ' Maior' : 'Menor'
