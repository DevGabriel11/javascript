function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        resultado.innerHTML = `Idade calculada: ${idade}`
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#1E90FF';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homemcrianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homemjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else if (idade < 100){
                //idoso
                img.setAttribute('src', 'homemidoso.jpg')
            } else {
                //múmia
                img.setAttribute('src', 'mumia.jpg')
            }
            

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.background = '#FF69B4';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mulhercrianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            } else if (idade < 100){
                //idoso
                img.setAttribute('src', 'mulheridosa.jpg')
            } else {
                //múmia
                img.setAttribute('src', 'mumia.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `<strong>Detectamos ${genero} com ${idade} anos</strong>`
        resultado.appendChild(img)
    }
   
}