let incCrono = 0;
let cifras = 1;
let divisor = Math.pow(10, cifras);

let mostrar = function() {
    let tiempo = new Date();
    let segs = tiempo.getSeconds();
    let mins = tiempo.getMinutes();
    let hora = tiempo.getHours();
    let ceroSeg = (segs < 10 ? '0' : '');
    let ceroMin = (mins < 10 ? '0' : '');
    let ceroHora = (hora < 10 ? '0' : '');
    let varH = 30 * hora + mins / 2;

    $("#digital").html(ceroHora + hora + " : " + ceroMin + mins + " : " + ceroSeg + segs);
    $('#v-hora').attr('transform', 'rotate(' + varH + " 50 50)");
    $('#v-min').attr('transform', 'rotate(' + 6 * mins + " 50 50)");
    $('#v-seg').attr('transform', 'rotate(' + 6 * segs + " 50 50)");
};

let arrancar = function() {
    incCrono = !incCrono;
    $('#arrancar').html(incCrono ? 'Parar' : 'Arrancar');
    $('#inicializar').prop('class', 'botones-' + (incCrono ? 'des' : 'act'));
    $('#inicializar').prop('disabled', (incCrono ? 'disabled' : ''));
};

let inicializar = function() {
    if (!incCrono) {
        localStorage.crono = 0;
    }
};

let mostrarVisitas = function() {
    localStorage.visitas = (localStorage.visitas || 0);
    localStorage.visitas++;
    $('#visitas').html(localStorage.visitas + " visitas.");
};

let mostrarCrono = function() {
    localStorage.crono = (localStorage.crono || 0);
    localStorage.crono = +localStorage.crono + incCrono; // El signo + convierte a number.
    $("#crono").html((localStorage.crono / divisor).toFixed(cifras) + " s.");
};

let crearLineas = function() {
    let svg = document.getElementById("reloj-svg1");
    let elemento;

    for (let indice = 0; indice < 60; ++indice) {
        elemento = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        $(elemento).attr('x1', '50');
        $(elemento).attr('y1', '2');
        $(elemento).attr('x2', '50');
        $(elemento).attr('y2', (indice % 15) == 0 ? '6' : '4');
        $(elemento).attr('stroke', 'black');
        $(elemento).attr('stroke-width', (indice % 5) == 0 ? '2' : '1');
        svg.appendChild(elemento);
        $(elemento).attr('transform', 'rotate(' + 6 * indice + " 50 50)");
    }
};