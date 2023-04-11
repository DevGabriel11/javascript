let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#resultado')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
 
}



function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('[ERR0] Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0] // O Zero é o primeiro item da lista
        let menor = valores[0] // O programa não está transformando o valor em Zero
        let soma = 0
        let média = 0 //O Zero de soma e média é valor Zero mesmo, pra matemática

        /*aqui definimos que o primeiro número digitado é o Maior e também o Menor
         abaixo vamos analisar os números digitados após este primeiro número*/

        for(let posição in valores) {
            soma += valores[posição] //vai somar todoas os valores adicionados na lista 
            
            
            if(valores[posição] > maior)
                maior = valores[posição] 

            /* o programa está jogando dentro da variável "Posição" o maior número
            pra isso ele está verificando a todo o momento se o próximo número digitado
            é maior que o primeiro item da lista, se ele for maior que o primeiro
            número digitado, este então será definido como "Maior" se não, o primeiro
            número digitado permanece sendo o maior*/  

            if(valores[posição] < menor)
                menor = valores[posição]
            
            /*aqui vai acontecer a mesma análise do laço anterior
            porém considerando se o próximo número digitado é Menor que o
            primeiro da lista, se sim, este será definido como "Menor", se não, 
            o menor número da lista permanece sendo o primeiro digitado.*/         
                            
        }

        média = soma/total //divide a soma dos valores digitados pela quantidade de valores digitados

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O menor número digitado foi ${menor}</p>`
        resultado.innerHTML += `<p>O maior número digitado foi ${maior}</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${média}</p>`
    }
}
