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
    document.getElementById('contador').innerText = hora +':'+ min +':'+ seg 

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

    document.getElementById('contador').innerText = hora +':'+ min +':'+ seg 
}