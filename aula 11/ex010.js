var vel = window.document.getElementById('button_1')
vel.addEventListener('click', calcular)

function calcular() {
  var txtv = document.getElementById('txtoc')
  var res = document.getElementById('res')
  var rev = document.getElementById('revisao')
  var velo = Number(txtv.value)
  res.innerHTML = `Sua velocidade atual é de ${velo} Km/h`
  if (velo > 40) {
    revisao.innerHTML = ' Você ultrapassou o Limite de Velocidade, MULTADO!'
  } else {
    revisao.innerHTML = 'Dirija sempre usando cinto de segurança. '
  }
}
