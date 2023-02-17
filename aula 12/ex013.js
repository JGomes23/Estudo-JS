var agora = new Date()
var diaSem = agora.getDay()

/*
  0 = Domingo 
  1 = Segunda 
  2 = Terça
  3 = Quarta
  4 = Quinta
  5 = Sexta
  6 = Sabado

  Para o Javascript os dias são expressados conforme essa ordem de numeros.

*/

switch (diaSem) {
  case 0:
    console.log('Domingo')
    break
  case 1:
    console.log('Segunda')
    break
  case 2:
    console.log('Terça')
    break
  case 3:
    console.log('Quarta')
    break
  case 4:
    console.log('Quinta')
    break
  case 5:
    console.log('Sexta')
    break
  case 6:
    console.log('Sabado')
    break
  default:
    console.log('[ERROR] Dia Invalido')
}

//A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.
