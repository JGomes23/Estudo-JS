var a = window.document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

// O método addEventListener() do JavaScript permite que você configure funções a serem chamadas quando um evento específico acontece, como, por exemplo, quando um usuário clica em um botão.

//click       - O evento click executa determinada funcionalidade quando um botão é clicado.

//mouseenter  - O evento mousemove ocorre sempre que o ponteiro do mouse se movimentar dentro de um elemento.

// mouseout   - O evento mouseout ocorre sempre que o ponteiro do mouse sair de  dentro de um elemento.

function clicar() {
  a.innerText = 'Clicou!'
  a.style.backgroundColor = 'yellow'
}
// A function  é um conjunto de codigos que vão ser executados quando o Evento ocorrer.

function entrar() {
  a.innerText = 'Entrou!'
  a.style.backgroundColor = 'pink'
}
function sair() {
  a.innerText = 'Saiu!'
  a.style.backgroundColor = 'orange'
}
