var nome = window.prompt('Qual é o seu nome ?')
document.write(`Ola, ${nome}! Seu nome tem ${nome.length} letras <br>`)
// document.write pode ser usado para que algo seja escrito no site.
// Podemos usar o .length para realizar contagem do numero de letras na string.

document.write(
  `Ola, ${nome}! Seu nome em maiusculo fica assim ${nome.toUpperCase()}`
)
//Podemos usar o toUpperCase() para mudar a string para maiusculo.

document.write(
  `Ola, ${nome}! Seu nome em maiusculo fica assim ${nome.toLocaleLowerCase()}`
)
//Podemos usar o toLowerrCase() para mudar a string para minusculo.

var n1 = 150.5

n1.toFixed(2)
// toFixed(2) é usado para formatação de numeros.

n1.toFixed(2).replace('.', ',')
//.replace('.', ',') é usado para alterar a formatação padrao que usa . por ,

n1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
//usado para formatar o numero para sistema monetario
