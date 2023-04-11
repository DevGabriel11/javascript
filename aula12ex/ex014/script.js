function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var saudação = window.document.getElementById('saudação')

    var hora = 2


    msg.innerHTML = `<strong>Agora são ${hora} horas e ${minutos} minutos</strong>`
    if (hora >= 0 && hora < 12) {

        saudação.innerHTML = 'BOM DIA!'
        img.src = '1manha.png'
        document.body.style.background = '#B77750';

    } else if (hora >= 12 && hora <= 18) {

        //boa tarde
        img.src = '2tarde.png'
        document.body.style.background = '#FD5B3F';
        saudação.innerHTML = 'BOA TARDE!'

    } else {
        //boa noite
        img.src = '3noite.png'
        document.body.style.background = '#362A45';
        saudação.innerHTML = 'BOA NOITE!'

    }

}
// DEPOIS CRIAR UM "BOA MADRUGADA" ENTRE AS 01:00 E 04:00


