var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes() // coloquei os minutos sozinho
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos`)

if (hora >= 5 && hora < 12) {
    console.log('Bom dia pra você!')

} else if (hora <= 18 && hora > 12) {
    console.log('Tenha uma ótima tarde!')

} else if (hora > 18 || hora <= 0) {
    console.log('Uma boa noite pra você!')

} else {
    console.log('Boa madrugada!')
}

  //Desafio: fazer ele dizer Boa madrugada nas horas entre 01:00 e 04:00
  //Desafio cumprido