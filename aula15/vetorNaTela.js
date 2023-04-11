let valores = [8, 1, 7, 4, 2, 9]
valores.sort() //deixa os valores em ordem crescente

//console.log(valores [0]) //jeito simples para mostrar apenas uma posição do índice


/*
for(let pos = 0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//Jeito mais fácil de fazer - mesmo resultado do jeito de cima

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

