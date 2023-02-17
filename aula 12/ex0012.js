var agora = new Date()

var horas = agora.getHours()
// .getHours() retorna o valor das horas atual no sistema;
console.log(`Olá, agora são ${horas} horas.`)
if (horas < 12) {
  console.log(`Bom dia.`)
} else if (horas >= 12 && horas < 18) console.log(`Boa tarde. `)
if (horas >= 18) {
  console.log(`Boa noite.`)
}
