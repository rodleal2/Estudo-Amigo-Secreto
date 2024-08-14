let ListaDeAmigos = [] ;
let QuantidadeMinima = 4 ;

function adicionar(){
  let NomeDoAmigo = document.getElementById('nome-amigo') ;
    //não Adicionar virgula caso não hajá nome no campo Amigo
    if (NomeDoAmigo.value == '') {
        alert ('Insira um nome!') ;
        return ;
    }
    //Verificação de Nomes já inclusos na Lista 
    if (ListaDeAmigos.includes(NomeDoAmigo.value.toUpperCase())) {
        alert ('Nome Já Utilizado!') ;
        return ;
    }

  let Lista = document.getElementById ('lista-amigos') ;
    ListaDeAmigos.push (NomeDoAmigo.value.toUpperCase())
    if (Lista.textContent == ''){
      Lista.textContent = NomeDoAmigo.value ;
    }else {
      Lista.textContent = Lista.textContent + ", " + NomeDoAmigo.value ;
  }
  NomeDoAmigo.value = '' ;
}

function sortear() {
    //Limitar Quantidade Minima do Sorteio  
    if (ListaDeAmigos.length < QuantidadeMinima){
   alert (`Adicionasr no minimo ${QuantidadeMinima} pessoas `) ;
   return ;
  }

   embaralhar (ListaDeAmigos)
   let Sorteio = document.getElementById('lista-sorteio') ; 
      
   for (let i = 0; i < ListaDeAmigos.length; i++){

    if (i == ListaDeAmigos.length- 1){
      Sorteio.innerHTML = Sorteio.innerHTML +  ListaDeAmigos[i] + ' -->' + ListaDeAmigos [0] + '<br>' ;
    }else {
      Sorteio.innerHTML = Sorteio.innerHTML +  ListaDeAmigos[i] + ' -->' + ListaDeAmigos [i + 1] + '<br>' ;
     }
   }
}
//
function embaralhar(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar() { 
    ListaDeAmigos = [] ;
    document.getElementById ('lista-amigos').innerHTML = '' ;
    document.getElementById('lista-sorteio').innerHTML = '' ;
}