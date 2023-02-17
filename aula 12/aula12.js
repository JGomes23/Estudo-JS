var idade = 18
if (idade < 16) {
  console.log('Não Vota')
} else {
  if (idade >= 16 && idade < 18) {
    console.log('Voto opcional')
  }
  if (idade >= 18) {
    console.log('Voto Obrigatorio')
  }
}
