var hora = 0
var min = 0
var seg = 0

var intervalo

function iniciar(){
    intervalo = setInterval(inicio, 100)
}
function pausar(){
    clearInterval(intervalo)
}
function parar() {
    clearInterval(intervalo)
    var hora = 0
    var min = 0
    var seg = 0
    document.getElementById('contador').innerText = zero(hora) +':'+ zero(min) +':'+ zero(seg) 

}
function zero(digito) {
    if(digito < 10){
        return ('0' + digito)
    }else{
        return digito
    }
}
function inicio(){
    seg++
    if (seg == 60) {
        seg = 0
        min++
        if (min == 60) {
            min = 0
            hora++
        }
    }

    document.getElementById('contador').innerText = zero(hora) +':'+ zero(min) +':'+ zero(seg) 
}