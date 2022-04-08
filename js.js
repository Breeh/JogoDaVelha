
var jogador, vencedor = null;
var jogadorselecionado = document.getElementById('jogadorselecionado');
var vencedorselecionado = document.getElementById('vencedorselecionado');
var quadrado = document.getElementsByClassName('quadrado');
var quadrados = document.getElementsByClassName('quadrado');
var jogadorvencedor = document.getElementById('jogadorvencedor')

mudarjogador(' Comece sua jogada ')

function escolherquadrado (id){

    if(vencedor !== null){
        return;
    }

   var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '.'){
        return;
    }


    if (jogador === 'Pernalonga'){;
        jogador = 'Patolino';
        quadrado.innerHTML = jogador;
        document.getElementById(id).style.backgroundImage = "url(pato.png)";

    } else {
        console.log("else: ", jogador);
        jogador = 'Pernalonga';
        quadrado.innerHTML = jogador;
        document.getElementById(id).style.backgroundImage = "url(perna.png)"
    }

    mudarjogador(jogador);
    checavencedor();

}

function mudarjogador(valor){
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;
   

}

function checavencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);


    if(checasequencia(quadrado1,quadrado2,quadrado3)){
        mudaCor(quadrado1,quadrado2,quadrado3);
        mudarvencedor(quadrado1);
        return;

    }
    
    if(checasequencia(quadrado4,quadrado5,quadrado6)){
        mudaCor(quadrado4,quadrado5,quadrado6);
        mudarvencedor(quadrado4);
        return;
    }
    
    if(checasequencia(quadrado7,quadrado8,quadrado9)){
        mudaCor(quadrado7,quadrado8,quadrado9);
        mudarvencedor(quadrado7);
        return;

    }
    
    if(checasequencia(quadrado1,quadrado4,quadrado7)){
        mudaCor(quadrado1,quadrado4,quadrado7);
        mudarvencedor(quadrado1);
        return;

    }
    
    if(checasequencia(quadrado2,quadrado5,quadrado8)){
        mudaCor(quadrado2,quadrado5,quadrado8);
        mudarvencedor(quadrado2);
        return;

    }
    
    if(checasequencia(quadrado3,quadrado6,quadrado9)){
        mudaCor(quadrado3,quadrado6,quadrado9);
        mudarvencedor(quadrado3);
        return;
    }
    if(checasequencia(quadrado1,quadrado5,quadrado9)){
        mudaCor(quadrado1,quadrado5,quadrado9);
        mudarvencedor(quadrado1);
        return;
    }
    if(checasequencia(quadrado3,quadrado5,quadrado7)){
        mudaCor(quadrado3,quadrado5,quadrado7);
        mudarvencedor(quadrado3);
        return;
    }

}
function mudarvencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorselecionado.innerHTML = vencedor;
}

function mudaCor(quadrado1,quadrado2,quadrado3){
    if (quadrado1.innerHTML,quadrado2.innerHTML,quadrado3.innerHTML === 'Pernalonga'){
    quadrado1.style.backgroundImage = 'url(/perna3.png)';
    quadrado2.style.backgroundImage = 'url(/perna3.png)';
    quadrado3.style.backgroundImage = 'url(/perna3.png)';
    
} else{
    quadrado1,quadrado2,quadrado3 === 'Patolino'
    quadrado1.style.backgroundImage = 'url(/pato3.png)';
    quadrado2.style.backgroundImage = 'url(/pato3.png)';
    quadrado3.style.backgroundImage = 'url(/pato3.png)';

}
}
    
    



function checasequencia(quadrado1, quadrado2, quadrado3){
    var eigual = false;

    if (quadrado1.innerHTML !== '.' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }
    return eigual;
}

