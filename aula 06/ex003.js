var n1 = Number.parseInt(window.prompt('Digite um número.'))
var n2 = Number.parseInt(window.prompt('Digite outro número.'))
// Pelo falto de ser um prompt o n1 e o n2 estão recebendo uma string, sendo necessario adicionana um parseInt (Numero inteiro) ou parseFloat(Numero com virgula).
var soma = n1 + n2
window.alert('A soma dos valores é ' + soma)

// O + pode ser usar para concateenação e para soma
// (string + string) concatenação
// (soma + soma) soma
