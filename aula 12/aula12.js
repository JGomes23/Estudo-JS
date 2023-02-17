var idade = 63
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
  console.log('E você Não Vota')
} else {
  if (idade < 18 || idade >= 65) {
    console.log('E o seu Voto é opcional')
  }

  if (idade >= 18 && idade < 65) {
    console.log('E o seu Voto é Obrigatorio')
  }
}
