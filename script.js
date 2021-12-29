const reiniciar = document.querySelector('.button');

function criaTorre(chamaDiscos){
    const container = document.getElementById('container');
    container.innerHTML = ""
    for(let i=1; i<4; i++){
        let torre = document.createElement('div');
        torre.id = `torre${i}`;
        torre.className = 'torre';
        container.appendChild(torre)
    }
    criarDiscos()
}

//Valor de 'q' para alterar a dificuldade. Implementar depois.

function criarDiscos(q=4){
    const torre1 = document.getElementById('torre1');
    for(let i=1; i<=q; i++){
        let disco = document.createElement('div')
        disco.id = `disco${i}`;
        disco.className = 'disco';
        torre1.appendChild(disco);
    }
}

let discoSelecionado;
let larguraDisco1;
let larguraDisco2;
let jogada = 0;

criaTorre(criarDiscos);

function controleHanoi(e){
    let torreSelecionada = e.currentTarget
    let discosTorre = torreSelecionada.childElementCount
    // console.log(discosTorre)

    if(jogada === 0){
        discoSelecionado = torreSelecionada.lastElementChild
        if(discoSelecionado === null){
            alert('Selecione uma torre com discos.')
        }else{
            discoSelecionado.style.border = '2px solid white'
            larguraDisco1 = discoSelecionado.clientWidth
            jogada = 1
        }
        
    }

    if(jogada === 1){

        if(discosTorre !== 0){
            let ultimoDisco = torreSelecionada.lastElementChild
            larguraDisco2 = ultimoDisco.clientWidth
        }

        if(discosTorre === 0){
            torreSelecionada.appendChild(discoSelecionado)
            discoSelecionado.style.border = 'none'
            jogada = 0
        }

        if(larguraDisco1 < larguraDisco2){
            torreSelecionada.appendChild(discoSelecionado)
            discoSelecionado.style.border = 'none'
            jogada = 0
        }

        if(larguraDisco1 > larguraDisco2){
            alert('Não pode posicionar um disco maior sobre um menor.')
            discoSelecionado.style.border = 'none'
            jogada = 0
        }

        verificaVitoria()  
    }
}

function verificaVitoria(){
    const ultimaTorre = document.getElementById('torre3')
    const numeroDiscos = ultimaTorre.childElementCount

    if(numeroDiscos == 4){
        setTimeout(() => alert('Você venceu!'), 5000)
        
    }
}

function adicionaEvento(){
    const torres = document.querySelectorAll('.torre')
    torres.forEach((torre)=> torre.addEventListener('click', controleHanoi))
}

function reiniciarJogo(){
    jogada = 0
    criaTorre(criarDiscos)
    adicionaEvento()
}

reiniciar.addEventListener('click', reiniciarJogo)

adicionaEvento()

