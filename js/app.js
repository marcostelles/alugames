let jogosAlugados = 0;

function contarJogosAlugados(){
    if(jogosAlugados < 0){
        jogosAlugados = 0;
    }
    console.log(`Total de jogos alugados é ${jogosAlugados}`);
}

function alterarStatus(id){
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
     let nome = game.querySelector('.dashboard__item__name');
    // console.log(imagem);
    // console.log(botao);

    // alert(nome.textContent);

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nome.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
        
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    contarJogosAlugados();
}


essaPalavraEUmPalindromo();

function essaPalavraEUmPalindromo(){
    // var palavra = 'rever';
    var palavra = 'árvore';
    var separandoAsLetrasDaPalavra = palavra.split("");
    var palavraInteira = separandoAsLetrasDaPalavra.reverse();
    palavraInteira = palavraInteira.join("");
        if (palavra == palavraInteira) {
            console.log('A palavra ' + palavra + ' é um palindromo');
        } else {
            console.log('A palavra ' + palavra + ' não é um palindromo');
        }
}

function ordenadorNumeros(a, b, c){
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

ordenadorNumeros(3, 1, 5);