 let num = [5, 2, 8, 9, 3]
 num.push(1) //acrescenta um número na última posição
 num.sort() //coloca os vetores em ordem crescente, inclusive o número que foi acrescentado na última posição

 console.log(`Nosso vetor é o ${num}`)
 console.log(`Esse Array tem ${num.length} posições`) 
 console.log(`O primeiro valor do vetor é ${num[0]}`)

 let pos = num.indexOf(8) // busca a posição do indíce do valor colocado entre ()
 

 if ( pos == -1) {
    console.log(`O valor não foi encontrado!`)
 } else {
    console.log(`O valor 8 está na posição ${pos}`)
 }

