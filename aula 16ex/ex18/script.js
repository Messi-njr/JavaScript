let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

// Verifica se o número está entre 1 e 100
function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

// Verifica se o número já está na lista
function inLista(n, l) {
    return l.indexOf(Number(n)) != -1;
}

// Adiciona número à lista
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = ''; // Limpa resultado anterior
    } else {
        res.innerHTML = `<p class="erro">Valor inválido ou já encontrado na lista.</p>`;
    }
    num.value = '';
    num.focus();
}

// Finaliza e exibe os resultados
function finalizar() {
    if (valores.length == 0) {
        res.innerHTML = `<p class="erro">Adicione valores antes de finalizar!</p>`;
    } else {
        let tot = valores.length;
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''; // Limpa antes de adicionar
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}. </p>`
        
    }
}
