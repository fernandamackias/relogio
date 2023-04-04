function relogio() {
    const elementoRelogio = document.querySelector(".relogiooo");
    const horaAtual = new Date();// informações referente ao tempo
    const horas = horaAtual.getHours(); //pegas as horas
    const minutos = horaAtual.getMinutes();//pegas os minutos
    const segundos = horaAtual.getSeconds();//pegar os segundos 
    const formatoHoras = horas.toString ().padStart(2,"0"); //formato das horas
    const formatoMinutos = minutos.toString().padStart(2,"0");
    const formatoSegundos = segundos.toString().padStart(2,"0");
    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`

}
setInterval(relogio, 1000)
