var p1 = window.document.getElementsByTagName('p')[1]
//O método getElementsByTagName da interface Document retorna um HTMLCollection de elementos com o nome da tag fornecido.
document.write(`Está escrito assim: ${p1.innerText}<br>`)
//innerText é uma propriedade que representa o conteúdo textual "renderizado" de um nó e seus descendentes. O inner text pega somente o texto sem a formatação.
p1.style.color = 'black'
// foi usado .style.color para mudar a cor do elemento selecionado da variavel p1.
document.write(`Está escrito assim: ${p1.innerHTML}`)
//O innerHTML é uma propriedade do Element que define ou retorna o conteúdo HTML de um elemento. O innerHTML pega a parte do codigo HTML selecionado ja com a formatação.
