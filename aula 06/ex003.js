var n1 = Number.parseInt(window.prompt('Digite um número.'))
var n2 = Number.parseInt(window.prompt('Digite outro número.'))
// Pelo falto de ser um prompt o n1 e o n2 estão recebendo uma string, sendo necessario adicionana um parseInt (Numero inteiro) ou parseFloat(Numero com virgula) para adicionar números.
var soma = n1 + n2
window.alert('A soma dos valores é ' + soma)

// O + pode ser usar para concateenação e para soma
// (string + string) concatenação
// (numero + numero) soma
// Para conerver para string podemos usar String(n) e n.string()
// Para converter para number podemos usar  parseInt (Numero inteiro) ou parseFloat(Numero com virgula).

var nome = 'Juliano'
var idade = 18
var nota = 7.0

window.alert(
  'O Aluno ' + nome + ' de ' + idade + ' anos tirou uma nota de ' + nota
)
// Podemos realizar a concateenação com o sinal de +, porém, existe uma forma mais semantica de realizar a mesma operação acima com a interpolação.

window.alert(`O aluno ${nome} de ${idade} anos tirou nota ${nota}`)
// Podemos utilizar ${} para realizar a função do + na concatenação porem de fomra mais simples.
