constbotoes= document. querySelectorAll(botao);
for(let i= 0; i <botoes.length;i++ )botoes[i] 
.onclick= function() {
    textos[i].classList.add(ativo);
for(let j=0;j<botoes.length;j++) {botoes[j].classList.remove(ativo);
}
    textos[j].classList.remove(ativo);
botoes[i].classList.add(ativo);
}
consttextos= document.querySelectorAll(aba-conteudo);
textos[i].classList.add(ativo);
constcontadores= document. querySelectorAll(contador);
contadores[0].textContent = Contagemregressiva;
constcontadores= document.querySelectorAll(contador);
const tempoObjetivo1= new Date(2023-10-0o5,T,0o0,0o0,0o0);
contadores[0].textContent= calculaTempo(tempoObjetivo1);
function calculaTempo (tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    return dias +  dias  + horas + horas + minutos + minutos  + segundos +  segundos;
}